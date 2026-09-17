-- ============================================
-- AuraWash Laundry OS - Database Schema
-- Run this SQL in Supabase SQL Editor
-- ============================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================
-- CUSTOMERS TABLE
-- ============================================
create table if not exists public.customers (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  phone text not null,
  email text,
  address text,
  tier text default 'Regular',
  loyalty_points integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index idx_customers_phone on public.customers(phone);

-- ============================================
-- SERVICES TABLE (Laundry Services Catalog)
-- ============================================
create table if not exists public.services (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  description text,
  category text not null,
  price_per_unit numeric(10,2) not null,
  unit text not null,
  icon text default 'local_laundry_service',
  estimated_duration text,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index idx_services_category on public.services(category);
create index idx_services_active on public.services(is_active);

-- ============================================
-- ORDERS TABLE
-- ============================================
create table if not exists public.orders (
  id uuid primary key default uuid_generate_v4(),
  invoice_number text unique not null,
  customer_id uuid references public.customers(id),
  status text default 'pending',
  priority text default 'normal',
  subtotal numeric(10,2) not null,
  delivery_fee numeric(10,2) default 0,
  discount numeric(10,2) default 0,
  total numeric(10,2) not null,
  payment_method text default 'qris',
  payment_status text default 'unpaid',
  notes text,
  estimated_completion timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index idx_orders_invoice on public.orders(invoice_number);
create index idx_orders_customer on public.orders(customer_id);
create index idx_orders_status on public.orders(status);
create index idx_orders_created on public.orders(created_at desc);

-- ============================================
-- ORDER ITEMS TABLE
-- ============================================
create table if not exists public.order_items (
  id uuid primary key default uuid_generate_v4(),
  order_id uuid references public.orders(id) on delete cascade,
  service_id uuid references public.services(id),
  quantity numeric(10,2) not null,
  unit_price numeric(10,2) not null,
  subtotal numeric(10,2) not null,
  fragrance text,
  special_instructions jsonb default '[]'::jsonb,
  created_at timestamptz default now()
);

create index idx_order_items_order on public.order_items(order_id);
create index idx_order_items_service on public.order_items(service_id);

-- ============================================
-- MACHINES TABLE
-- ============================================
create table if not exists public.machines (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  type text not null,
  model text,
  status text default 'standby',
  current_order_id uuid references public.orders(id),
  progress integer default 0,
  temperature numeric(5,2),
  remaining_minutes integer,
  notes text,
  updated_at timestamptz default now()
);

create index idx_machines_status on public.machines(status);

-- ============================================
-- PAYMENTS TABLE
-- ============================================
create table if not exists public.payments (
  id uuid primary key default uuid_generate_v4(),
  order_id uuid references public.orders(id),
  amount numeric(10,2) not null,
  method text not null,
  status text default 'success',
  receipt_url text,
  created_at timestamptz default now()
);

create index idx_payments_order on public.payments(order_id);

-- ============================================
-- ENABLE RLS (Row Level Security)
-- ============================================
alter table public.customers enable row level security;
alter table public.services enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.machines enable row level security;
alter table public.payments enable row level security;

-- ============================================
-- RLS POLICIES (Public access for demo)
-- ============================================
create policy "public_read_customers" on public.customers for select using (true);
create policy "public_write_customers" on public.customers for insert with check (true);
create policy "public_update_customers" on public.customers for update using (true);

create policy "public_read_services" on public.services for select using (true);
create policy "public_write_services" on public.services for insert with check (true);
create policy "public_update_services" on public.services for update using (true);

create policy "public_read_orders" on public.orders for select using (true);
create policy "public_write_orders" on public.orders for insert with check (true);
create policy "public_update_orders" on public.orders for update using (true);

create policy "public_read_order_items" on public.order_items for select using (true);
create policy "public_write_order_items" on public.order_items for insert with check (true);

create policy "public_read_machines" on public.machines for select using (true);
create policy "public_write_machines" on public.machines for update using (true);

create policy "public_read_payments" on public.payments for select using (true);
create policy "public_write_payments" on public.payments for insert with check (true);
