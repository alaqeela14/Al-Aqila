-- مخطط قاعدة بيانات لوحة تحكم مؤسسة العقيلة
-- نفّذ هذا الملف في Supabase > SQL Editor.
-- لا تضف service_role key إلى ملفات الموقع.

create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default 'مدير الموقع',
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.site_content (
  id uuid primary key default gen_random_uuid(),
  section text not null check (section in ('news','books','articles','lectures','projects','activities','series','topics')),
  title text not null,
  summary text not null default '',
  body text not null default '',
  media_url text not null default '',
  item_date date,
  published boolean not null default false,
  sort_order integer not null default 0,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists site_content_section_published_idx
  on public.site_content(section, published, sort_order, created_at desc);

alter table public.admin_users enable row level security;
alter table public.site_content enable row level security;

-- يستطيع المستخدم قراءة سجل صلاحياته فقط؛ لا يستطيع منح نفسه صلاحية.
create policy "admins_read_own_membership"
on public.admin_users for select to authenticated
using (user_id = auth.uid() and active = true);

-- المحتوى المنشور متاح للزوار، والمسودات متاحة للمديرين فقط.
create policy "public_read_published_content"
on public.site_content for select to anon, authenticated
using (published = true);

create policy "admins_read_all_content"
on public.site_content for select to authenticated
using (exists (
  select 1 from public.admin_users a
  where a.user_id = auth.uid() and a.active = true
));

create policy "admins_insert_content"
on public.site_content for insert to authenticated
with check (
  exists (select 1 from public.admin_users a where a.user_id = auth.uid() and a.active = true)
  and (created_by is null or created_by = auth.uid())
);

create policy "admins_update_content"
on public.site_content for update to authenticated
using (exists (select 1 from public.admin_users a where a.user_id = auth.uid() and a.active = true))
with check (exists (select 1 from public.admin_users a where a.user_id = auth.uid() and a.active = true));

create policy "admins_delete_content"
on public.site_content for delete to authenticated
using (exists (select 1 from public.admin_users a where a.user_id = auth.uid() and a.active = true));

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists site_content_updated_at on public.site_content;
create trigger site_content_updated_at
before update on public.site_content
for each row execute function public.set_updated_at();

-- مساحة عامة لعرض الصور والملفات المرتبطة بالمحتوى.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('site-media', 'site-media', true, 52428800,
  array['image/jpeg','image/png','image/webp','image/gif','application/pdf','audio/mpeg','video/mp4'])
on conflict (id) do nothing;

create policy "public_read_site_media"
on storage.objects for select to anon, authenticated
using (bucket_id = 'site-media');

create policy "admins_upload_site_media"
on storage.objects for insert to authenticated
with check (
  bucket_id = 'site-media'
  and exists (select 1 from public.admin_users a where a.user_id = auth.uid() and a.active = true)
);

create policy "admins_update_site_media"
on storage.objects for update to authenticated
using (
  bucket_id = 'site-media'
  and exists (select 1 from public.admin_users a where a.user_id = auth.uid() and a.active = true)
)
with check (
  bucket_id = 'site-media'
  and exists (select 1 from public.admin_users a where a.user_id = auth.uid() and a.active = true)
);

create policy "admins_delete_site_media"
on storage.objects for delete to authenticated
using (
  bucket_id = 'site-media'
  and exists (select 1 from public.admin_users a where a.user_id = auth.uid() and a.active = true)
);