# FieldSense

FieldSense is a deployable full-stack Worker project for field visit capture, AI debrief generation, vector search, RAG answers, and program insight tracking.

## What is included

- Browser UI served from the Worker.
- REST API routes under `/api`.
- OpenAPI spec at `/openapi.json`.
- Human-readable API docs at `/api/docs`.
- Supabase PostgreSQL persistence through the REST API.
- Supabase Storage uploads for photo, video, and voice memos.
- Supabase Auth login with server-side HTTP-only session cookies.
- Role-based access for `field_staff`, `manager`, and `admin`.
- Server-side Gemini integration through `POST /api/debrief` and `POST /api/rag/query`.
- Supabase `pgvector` visit embeddings for semantic retrieval.
- Local fallback debrief generation and local deterministic embeddings when AI keys are not configured.
- Manager Insights panel that detects recurring blockers and recommends the next action.
- Ask AI panel for querying indexed visit records with source-grounded answers.
- LangChain-style RAG pipeline structure: query embedding, retriever, context builder, prompt template, answer generation, and source packaging.
- Rich demo seed visits for dashboard pattern detection.

## API routes

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/api/health` | Check API, storage, and AI provider status. |
| POST | `/api/auth/login` | Sign in with Supabase Auth email/password. |
| POST | `/api/auth/logout` | Clear the server-side session cookie. |
| GET | `/api/auth/me` | Return the current authenticated user and role. |
| GET | `/api/visits` | List field visits. |
| POST | `/api/visits` | Save a structured field visit. |
| GET | `/api/visits/:id` | Fetch one field visit. |
| PUT | `/api/visits/:id` | Update one field visit and refreshed debrief fields. |
| POST | `/api/visits/:id/media` | Upload visit photos, video memos, or voice memos to Supabase Storage. |
| GET | `/api/media/:id` | Stream one attached media file through the backend. |
| POST | `/api/debrief` | Generate a structured debrief from raw field notes. |
| POST | `/api/rag/reindex` | Embed all visits into Supabase `pgvector`. |
| POST | `/api/rag/query` | Ask a RAG question over indexed visits. |

## Environment variables

Set these in the hosted environment:

```sh
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
SUPABASE_STORAGE_BUCKET=visit-media
ADMIN_EMAILS=your-email@example.com
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-2.5-flash
GEMINI_EMBEDDING_MODEL=gemini-embedding-2
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4.1-mini
```

`SUPABASE_STORAGE_BUCKET`, `ADMIN_EMAILS`, `GEMINI_MODEL`, `GEMINI_EMBEDDING_MODEL`, and `OPENAI_MODEL` are optional. The Worker uses `visit-media`, `gemini-2.5-flash`, `gemini-embedding-2`, and `gpt-4.1-mini` if no values are set.

Gemini is preferred when `GEMINI_API_KEY` is configured. OpenAI remains supported for debrief generation only, but RAG embeddings no longer require OpenAI. If Gemini is not configured or fails, indexing falls back to local 768-dimension hashed embeddings so demos do not fail because of API quota.

## RAG pipeline

The `POST /api/rag/query` endpoint follows a LangChain-style pipeline without adding a heavy runtime dependency to the Worker:

```text
question
→ query embedding
→ Supabase pgvector retriever
→ visit context builder
→ grounded prompt template
→ Gemini answer generation or fallback answer
→ source packaging
```

The response includes `answer`, `sources`, `pipeline`, `retrieval`, and `matches`, making the retrieval flow easy to inspect during demos.

Use the Supabase `service_role` key only on the server side. Do not place it in browser JavaScript. Photo/video/voice memo uploads require the service role key because the app writes to Supabase Storage through the backend.

## Authentication and roles

Create users in Supabase Dashboard under Authentication. The app supports three roles:

| Role | Access |
| --- | --- |
| `field_staff` | Create visits, upload media, generate debriefs, view visit history. |
| `manager` | View dashboards, visit history, and Ask AI/RAG answers. |
| `admin` | Full access, including delete and RAG reindexing. |

For your own account, add your email to `ADMIN_EMAILS`:

```sh
ADMIN_EMAILS=your-email@example.com
```

For other users, add rows to `public.user_roles`:

```sql
insert into public.user_roles (email, role)
values
  ('field.user@example.com', 'field_staff'),
  ('manager@example.com', 'manager')
on conflict (email) do update
set role = excluded.role,
    updated_at = now();
```

## PostgreSQL setup

Create a Supabase project, open the SQL editor, and run:

```sql
-- db/schema.sql
```

The full SQL file is in `db/schema.sql`. It creates the `public.visits`, `public.visit_media`, and `public.visit_embeddings` tables, enables `pgvector`, adds the `match_visit_embeddings` similarity-search RPC function, configures row-level security policies for the server-side service role, creates a public-read `visit-media` Storage bucket for preview display, and inserts sample seed rows.

The Worker uses Supabase PostgreSQL first. If the Supabase environment variables are missing, it falls back to sample data so local preview still opens.

## Media upload limits

| Media | Limit |
| --- | ---: |
| Files per visit | 5 |
| Photo size | 5 MB each |
| Video size | 50 MB each |
| Voice memo size | 25 MB each |

Media files are stored in Supabase Storage. PostgreSQL stores only file metadata such as visit ID, media type, storage path, MIME type, and file size.

## Build and validate

Build and validate with tools already present in the Sites Linux environment:

```sh
bash scripts/build.sh
node scripts/validate-artifact.mjs
```

The deterministic build copies source files into the required archive shape:

```text
dist/
├── .openai/
│   └── hosting.json
└── server/
    └── index.js
```

## Local preview

```sh
export SUPABASE_URL=https://your-project-ref.supabase.co
export SUPABASE_ANON_KEY=your_anon_key
export SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
export ADMIN_EMAILS=your-email@example.com
export GEMINI_API_KEY=your_gemini_api_key
PORT=5174 node scripts/preview.mjs
```

Then open `http://localhost:5174`.

## Package deploy artifact

```sh
tar -czf site.tar.gz dist
```

`dist/server/index.js` is an ES module with a default export containing `fetch(request, env, ctx)`. Edit `worker/index.js`, not the generated file under `dist/`.
