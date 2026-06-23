# FieldSense

FieldSense is a full-stack field visit intelligence tool for capturing field notes, generating AI debriefs, storing visit records, and asking source-grounded questions across saved visits using RAG.

Live demo: https://fieldsense.field-sense-demo.workers.dev

## Features

- Secure Supabase Auth login with role-based access.
- Field visit creation with location, date, program area, stakeholders, notes, and media.
- AI debrief generation using Gemini.
- Supabase PostgreSQL persistence for visit records.
- Supabase Storage support for photos, videos, and voice memos.
- RAG-based Ask AI panel over indexed visit records.
- Gemini embeddings with Supabase `pgvector` semantic search.
- Admin-only reindexing for refreshing vector search.
- Dashboard insights for recurring blockers, sentiment, and follow-up actions.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | HTML, CSS, JavaScript served through Cloudflare Worker |
| Backend | Cloudflare Workers |
| Database | Supabase PostgreSQL |
| Authentication | Supabase Auth |
| Storage | Supabase Storage |
| AI Model | Gemini 2.5 Flash |
| Embeddings | Gemini Embedding 2 |
| Vector Search | Supabase `pgvector` |
| Deployment | Cloudflare Workers |

## RAG Flow

```text
User question
→ Gemini query embedding
→ Supabase pgvector similarity search
→ Matching visit records
→ Context builder
→ Gemini answer generation
→ Source-grounded answer with supporting visits
```

## API Routes

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/api/health` | Check deployment, Supabase, auth, AI, and embeddings status |
| POST | `/api/auth/login` | Sign in with Supabase Auth |
| POST | `/api/auth/logout` | End the current session |
| GET | `/api/auth/me` | Get current user and role |
| GET | `/api/visits` | List saved field visits |
| POST | `/api/visits` | Create a field visit |
| PUT | `/api/visits/:id` | Update a field visit |
| POST | `/api/visits/:id/media` | Upload visit media |
| POST | `/api/debrief` | Generate an AI debrief |
| POST | `/api/rag/reindex` | Rebuild vector index for visits |
| POST | `/api/rag/query` | Ask AI questions over indexed visits |

## Roles

| Role | Access |
| --- | --- |
| `field_staff` | Create visits, generate debriefs, upload media, view visit history |
| `manager` | View dashboard, visit history, and Ask AI |
| `admin` | Full access, including delete and RAG reindex |

## Environment Variables

Set these in Cloudflare Workers secrets:

```sh
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_EMAILS=
GEMINI_API_KEY=
```

Configured in `wrangler.toml`:

```toml
SUPABASE_STORAGE_BUCKET = "visit-media"
GEMINI_MODEL = "gemini-2.5-flash"
GEMINI_EMBEDDING_MODEL = "gemini-embedding-2"
```

Do not commit `.env` to GitHub.

## Supabase Setup

Run the schema in Supabase SQL Editor:

```sql
-- db/schema.sql
```

The schema creates visit tables, media metadata tables, user roles, `pgvector` embeddings, RLS policies, storage bucket setup, and the vector match function.

## Local Preview

```sh
bash scripts/build.sh
PORT=5174 node scripts/preview.mjs
```

Then open:

```text
http://localhost:5174
```

## Deploy

```sh
bash scripts/build.sh
npx wrangler deploy
```

## Health Check

```sh
curl https://fieldsense.field-sense-demo.workers.dev/api/health
```

Expected result includes:

```json
{
  "ok": true,
  "storage": "supabase-postgresql",
  "auth": "supabase-auth",
  "ai": "gemini",
  "embeddings": {
    "provider": "gemini",
    "model": "gemini-embedding-2"
  }
}
```

## Demo RAG Question

```text
Which visit mentions students, Excel, online job applications, laptop access, or practice time?
```

Expected answer should retrieve the Salem digital literacy visit and mention laptop access, hands-on practice time, and resume-building follow-up.

## Project Status

Deployed and tested with Supabase PostgreSQL, Supabase Storage, Supabase Auth, Gemini AI, Gemini embeddings, and RAG search.
