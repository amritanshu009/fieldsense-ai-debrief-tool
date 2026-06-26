# Security Policy

FieldSense handles field visit notes, media metadata, authentication, and AI-generated summaries. Treat production deployments as sensitive.

## Secrets

Never commit:

- `.env`
- Supabase service-role keys
- Gemini API keys
- Cloudflare API tokens
- Production database credentials

If a real secret was committed, revoke and rotate it immediately. Removing it from the latest commit is not enough if it exists in Git history.

## Data Privacy

- Avoid uploading real beneficiary, patient, student, or household data to demos.
- Use synthetic sample data in public screenshots and seed files.
- Review uploaded media carefully before sharing public demos.
- Keep RLS policies enabled in Supabase.

## Reporting Security Issues

Please do not open a public GitHub issue for security-sensitive reports. Contact the maintainer privately through the GitHub profile linked to the repository.
