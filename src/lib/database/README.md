# Database layer

Keep table-specific reads and writes in repository modules in this directory. Repositories should receive the caller-scoped Supabase client and rely on PostgreSQL row-level security for authorization. Route handlers and server components should compose these operations without embedding query details in UI components.
