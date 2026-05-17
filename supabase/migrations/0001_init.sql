-- OFFCUT: initial schema.
-- Run this in the Supabase SQL editor (or via the Supabase CLI).
-- Re-runnable: uses IF NOT EXISTS / CREATE OR REPLACE.

create extension if not exists pgcrypto;

create table if not exists public.briefs (
  id               uuid primary key default gen_random_uuid(),
  created_at       timestamptz not null default now(),
  status           text not null default 'open',  -- open | matched | closed
  piece_type       text not null,
  title            text not null,
  description      text not null,
  reference_links  text,
  size             text not null,
  budget           text not null,
  timeline         text not null,
  city             text not null,
  email            text not null,
  handle           text,
  notes            text  -- admin notes
);

create index if not exists briefs_created_at_idx on public.briefs (created_at desc);
create index if not exists briefs_status_idx on public.briefs (status);

create table if not exists public.applications (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  status       text not null default 'new',   -- new | reviewing | accepted | declined
  name         text not null,
  brand        text,
  email        text not null,
  city         text not null,
  instagram    text not null,
  website      text,
  disciplines  text not null,
  scale        text not null,
  turnaround   text not null,
  rate         text not null,
  pitch        text not null,
  notes        text  -- admin notes
);

create index if not exists applications_created_at_idx on public.applications (created_at desc);
create index if not exists applications_status_idx on public.applications (status);

-- Row Level Security: lock both tables down.
-- The service role bypasses RLS and is the only thing we use server-side,
-- so no public access is granted. If we later add user-facing reads,
-- we'll add explicit policies.
alter table public.briefs enable row level security;
alter table public.applications enable row level security;
