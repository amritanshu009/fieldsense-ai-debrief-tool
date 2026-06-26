# Contributing to FieldSense

Thanks for taking an interest in FieldSense. The project is meant to be useful for field teams, NGOs, program managers, and public-interest organizations that need a practical way to preserve and query field visit knowledge.

## Ways to Contribute

- Improve setup and deployment docs.
- Add sample field visit templates for different programs.
- Improve accessibility and responsive UI behavior.
- Add test coverage for API routes and RAG flows.
- Improve error messages for Supabase, storage, and Gemini failures.
- Suggest workflows for NGOs, skilling programs, livelihood programs, and community projects.

## Local Setup

```sh
git clone https://github.com/amritanshu009/fieldsense-ai-debrief-tool.git
cd fieldsense-ai-debrief-tool
npm install
cp .env.example .env
npm run build
PORT=5174 npm run preview
```

Run the Supabase schema in `schema.sql` before testing database-backed flows.

## Development Notes

- Keep secrets out of commits.
- Keep UI changes simple and usable for field teams.
- Prefer source-grounded AI output over unsupported generation.
- When changing RAG behavior, mention how retrieval quality was tested.

## Pull Request Checklist

- The change is focused and easy to review.
- Docs were updated if setup, APIs, roles, or workflows changed.
- Secrets and generated artifacts are not committed.
- The local preview still starts successfully.
- Any database changes are reflected in `schema.sql`.

## Reporting Issues

When opening an issue, include:

- What you expected to happen.
- What actually happened.
- Steps to reproduce.
- Screenshots or logs if relevant.
- Whether the issue affects local preview, deployed worker, Supabase, storage, auth, AI debriefs, or RAG search.
