create table if not exists public.visits (
  id text primary key,
  location text not null,
  visit_date date not null,
  program text not null,
  stakeholders text not null,
  sentiment text not null check (sentiment in ('Positive', 'Neutral', 'Concerned')),
  summary text not null,
  notes text not null,
  findings jsonb not null default '[]'::jsonb,
  blockers jsonb not null default '[]'::jsonb,
  follow_ups jsonb not null default '[]'::jsonb,
  tags jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists visits_created_at_idx on public.visits (created_at desc);
create index if not exists visits_program_idx on public.visits (program);
create index if not exists visits_sentiment_idx on public.visits (sentiment);

create table if not exists public.user_roles (
  email text primary key,
  role text not null check (role in ('field_staff', 'manager', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists user_roles_role_idx on public.user_roles (role);

create extension if not exists vector;

create table if not exists public.visit_embeddings (
  visit_id text primary key references public.visits(id) on delete cascade,
  embedding vector(768) not null,
  embedding_text text not null,
  provider text not null,
  model text not null,
  updated_at timestamptz not null default now()
);

alter table public.visit_embeddings
  add column if not exists embedding_text text not null default 'Legacy embedding text unavailable';

alter table public.visit_embeddings
  add column if not exists provider text not null default 'local-js';

alter table public.visit_embeddings
  add column if not exists model text not null default 'local-hashing-embedding-v1';

alter table public.visit_embeddings
  add column if not exists updated_at timestamptz not null default now();

create index if not exists visit_embeddings_updated_at_idx
  on public.visit_embeddings (updated_at desc);

create index if not exists visit_embeddings_embedding_idx
  on public.visit_embeddings
  using hnsw (embedding vector_cosine_ops);

create or replace function public.match_visit_embeddings(
  query_embedding vector(768),
  match_count integer default 5
)
returns table (
  id text,
  location text,
  visit_date date,
  program text,
  stakeholders text,
  sentiment text,
  summary text,
  notes text,
  findings jsonb,
  blockers jsonb,
  follow_ups jsonb,
  tags jsonb,
  created_at timestamptz,
  embedding_text text,
  provider text,
  model text,
  similarity double precision
)
language sql
stable
security definer
set search_path = public
as $$
  select
    v.id,
    v.location,
    v.visit_date,
    v.program,
    v.stakeholders,
    v.sentiment,
    v.summary,
    v.notes,
    v.findings,
    v.blockers,
    v.follow_ups,
    v.tags,
    v.created_at,
    e.embedding_text,
    e.provider,
    e.model,
    (1 - (e.embedding <=> query_embedding))::double precision as similarity
  from public.visit_embeddings e
  join public.visits v on v.id = e.visit_id
  order by e.embedding <=> query_embedding
  limit greatest(1, least(match_count, 10));
$$;

create table if not exists public.visit_media (
  id text primary key,
  visit_id text not null references public.visits(id) on delete cascade,
  media_type text not null check (media_type in ('photo', 'video', 'audio')),
  file_name text not null,
  storage_path text not null unique,
  mime_type text not null,
  file_size integer not null check (file_size > 0),
  created_at timestamptz not null default now()
);

alter table public.visit_media
  drop constraint if exists visit_media_media_type_check;

alter table public.visit_media
  add constraint visit_media_media_type_check
  check (media_type in ('photo', 'video', 'audio'));

create index if not exists visit_media_visit_id_idx on public.visit_media (visit_id);
create index if not exists visit_media_created_at_idx on public.visit_media (created_at asc);

alter table public.visits enable row level security;
alter table public.visit_media enable row level security;
alter table public.visit_embeddings enable row level security;
alter table public.user_roles enable row level security;

drop policy if exists "service role can manage visits" on public.visits;
create policy "service role can manage visits"
  on public.visits
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

drop policy if exists "service role can manage visit media" on public.visit_media;
create policy "service role can manage visit media"
  on public.visit_media
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

drop policy if exists "service role can manage visit embeddings" on public.visit_embeddings;
create policy "service role can manage visit embeddings"
  on public.visit_embeddings
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

drop policy if exists "service role can manage user roles" on public.user_roles;
create policy "service role can manage user roles"
  on public.user_roles
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

grant execute on function public.match_visit_embeddings(vector(768), integer) to service_role;

insert into storage.buckets (
  id,
  name,
  public,
  file_size_limit,
  allowed_mime_types
) values (
  'visit-media',
  'visit-media',
  true,
  52428800,
  array[
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/heic',
    'video/mp4',
    'video/quicktime',
    'video/webm',
    'audio/mpeg',
    'audio/mp4',
    'audio/aac',
    'audio/wav',
    'audio/x-wav',
    'audio/webm',
    'audio/ogg',
    'audio/x-m4a'
  ]
)
on conflict (id) do update
set
  public = true,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

insert into public.visits (
  id,
  location,
  visit_date,
  program,
  stakeholders,
  sentiment,
  summary,
  notes,
  findings,
  blockers,
  follow_ups,
  tags,
  created_at
) values
(
  'VST-1042',
  'Mandya, Karnataka',
  '2026-06-18',
  'Skilling',
  'SHG women, local coordinator, trainer',
  'Concerned',
  'Women showed interest in tailoring training, but attendance was affected by wage-work timings, travel cost, and concern about delayed stipends from the previous batch.',
  'Met 18 women from SHG group. Attendance was lower than expected because many had wage work. They were interested in tailoring training but worried about travel cost. Local coordinator said previous batch had delayed stipend issues.',
  '["Strong interest in tailoring and income-linked skilling.", "Attendance depends on wage-work schedules.", "Trust can drop when stipend timelines are unclear."]'::jsonb,
  '["Travel cost", "Wage-work timing", "Delayed stipend concern"]'::jsonb,
  '["Discuss travel support options.", "Clarify stipend timeline before next mobilization.", "Schedule sessions after wage-work hours."]'::jsonb,
  '["skilling", "women", "attendance", "stipend", "travel"]'::jsonb,
  '2026-06-18T00:00:00Z'
),
(
  'VST-1039',
  'Ranchi, Jharkhand',
  '2026-06-14',
  'Livelihood',
  'Farmers, producer group lead',
  'Neutral',
  'Farmers were open to adopting improved vegetable cultivation practices, but input access and market linkage clarity remain unresolved.',
  'Farmers said they want to try vegetable cultivation this season. Seeds and inputs are not easily available locally. They asked who will buy the produce and at what price.',
  '["Adoption intent is present.", "Input availability is a recurring operational constraint.", "Market assurance is needed before farmers commit."]'::jsonb,
  '["Input availability", "Market linkage uncertainty"]'::jsonb,
  '["Map nearby input vendors.", "Share buyer linkage plan with farmer group.", "Plan one demo plot visit."]'::jsonb,
  '["agriculture", "market-linkage", "inputs"]'::jsonb,
  '2026-06-14T00:00:00Z'
),
(
  'VST-1036',
  'Barabanki, Uttar Pradesh',
  '2026-06-11',
  'Economic Inclusion',
  'Women entrepreneurs, field facilitator',
  'Positive',
  'Participants reported improved confidence in managing small shops, with digital payments and basic bookkeeping emerging as useful support areas.',
  'Women entrepreneurs shared that business is slowly improving. Many are using UPI but still maintain rough paper records. They asked for simple bookkeeping help.',
  '["Confidence is improving among micro-entrepreneurs.", "Digital payment adoption is visible.", "Bookkeeping support can improve business tracking."]'::jsonb,
  '["Manual bookkeeping", "Low confidence in monthly profit calculation"]'::jsonb,
  '["Run a simple bookkeeping session.", "Create a one-page monthly profit sheet.", "Check progress in next visit."]'::jsonb,
  '["entrepreneurship", "upi", "bookkeeping"]'::jsonb,
  '2026-06-11T00:00:00Z'
),
(
  'VST-1033',
  'Chittoor, Andhra Pradesh',
  '2026-06-09',
  'Economic Inclusion',
  'Women entrepreneurs, village volunteer, field coordinator',
  'Positive',
  'Women entrepreneurs reported better sales confidence after adopting UPI, but bookkeeping and monthly profit tracking still need practical support.',
  'Met 14 women entrepreneurs from the self-help group. Most participants were positive and said their small shops are improving after using UPI payments. However, many still maintain rough paper records and are not confident about calculating monthly profit.',
  '["UPI usage is improving confidence among micro-entrepreneurs.", "Participants want simple tools for monthly profit tracking.", "Peer examples are helping other women adopt digital payments."]'::jsonb,
  '["Manual bookkeeping", "Low confidence in monthly profit calculation"]'::jsonb,
  '["Run a simple bookkeeping session.", "Share a one-page profit tracking template.", "Check UPI transaction records during the next visit."]'::jsonb,
  '["economic-inclusion", "women", "upi", "bookkeeping"]'::jsonb,
  '2026-06-09T00:00:00Z'
),
(
  'VST-1030',
  'Tumakuru, Karnataka',
  '2026-06-07',
  'Skilling',
  'Youth trainees, trainer, placement coordinator',
  'Concerned',
  'Youth trainees value the course, but attendance is slipping because travel costs and unclear placement timelines are reducing motivation.',
  'Met 22 youth trainees. They liked the training but said bus fare is difficult to manage daily. Several asked when placement interviews will happen. Trainer said attendance dropped after the second week because the placement timeline was unclear.',
  '["Training interest is present but attendance is fragile.", "Travel cost is affecting daily participation.", "Placement clarity is important for continued motivation."]'::jsonb,
  '["Travel cost", "Placement timeline uncertainty", "Attendance drop"]'::jsonb,
  '["Share placement calendar with trainees.", "Explore travel support for low-income trainees.", "Track attendance for the next two weeks."]'::jsonb,
  '["skilling", "youth", "attendance", "travel", "placement"]'::jsonb,
  '2026-06-07T00:00:00Z'
),
(
  'VST-1027',
  'Gaya, Bihar',
  '2026-06-05',
  'Livelihood',
  'Farmer group, input dealer, cluster coordinator',
  'Neutral',
  'Farmers are willing to try vegetable cultivation, but input access and buyer assurance remain unresolved before adoption can scale.',
  'Farmers were open to vegetable cultivation but said seeds and fertilizer are not reliably available nearby. They also asked who will buy the produce and whether the price will be shared before sowing.',
  '["Adoption intent is visible among farmers.", "Input availability is still a practical barrier.", "Market linkage clarity is needed before farmers commit."]'::jsonb,
  '["Input availability", "Market linkage uncertainty"]'::jsonb,
  '["List nearby input vendors with current stock.", "Share buyer linkage and price communication plan.", "Identify one demo farmer for early adoption."]'::jsonb,
  '["livelihood", "farmers", "inputs", "market-linkage"]'::jsonb,
  '2026-06-05T00:00:00Z'
),
(
  'VST-1024',
  'Kolar, Karnataka',
  '2026-06-03',
  'Livelihood',
  'Women farmers, local input vendor, field coordinator',
  'Concerned',
  'Women farmers are interested in crop diversification, but delayed input delivery and uncertainty around market buyers are creating hesitation.',
  'Met 16 women farmers. They want to diversify crops but said input delivery was delayed last season. The local vendor could not confirm seed availability. Farmers also asked whether a buyer will be confirmed before harvest.',
  '["Crop diversification interest is present.", "Past input delays have reduced confidence.", "Buyer confirmation is important before farmers invest."]'::jsonb,
  '["Input availability", "Market linkage uncertainty", "Delayed input delivery"]'::jsonb,
  '["Confirm seed availability with vendors.", "Set a buyer discussion before sowing.", "Track input delivery date commitments."]'::jsonb,
  '["livelihood", "women", "inputs", "market-linkage"]'::jsonb,
  '2026-06-03T00:00:00Z'
),
(
  'VST-1021',
  'Dharwad, Karnataka',
  '2026-06-01',
  'Skilling',
  'SHG members, trainer, block coordinator',
  'Concerned',
  'SHG members want to continue tailoring training, but delayed stipends and session timing conflicts are repeatedly affecting trust and attendance.',
  'Met 20 SHG members. Participants want to continue tailoring training but said the previous stipend was delayed. Some women cannot attend morning sessions because of wage work and household responsibilities.',
  '["Training demand remains strong among SHG members.", "Delayed stipend communication is affecting trust.", "Morning timing clashes with wage work and household duties."]'::jsonb,
  '["Delayed stipend concern", "Wage-work timing", "Attendance drop"]'::jsonb,
  '["Share stipend status before the next session.", "Pilot an afternoon training slot.", "Ask block coordinator to call absentees before next class."]'::jsonb,
  '["skilling", "women", "stipend", "attendance", "timing"]'::jsonb,
  '2026-06-01T00:00:00Z'
)
on conflict (id) do nothing;
