-- ============================================
-- SEED DATA - Laundry Services
-- ============================================
insert into public.services (name, description, category, price_per_unit, unit, icon, estimated_duration)
values
  ('Kiloan Cuci Kering Setrika', 'Reguler 48 Jam • Higienis', 'kiloan', 9000, 'kg', 'local_laundry_service', '2 Hari'),
  ('Kiloan Express 6 Jam', 'Prioritas Mesin Utama', 'kiloan', 18000, 'kg', 'bolt', '6 Jam'),
  ('Cuci Bedcover King Size', 'Termasuk Tas Khusus', 'satuan', 35000, 'pcs', 'bed', '2 Hari'),
  ('Jas & Blazer Premium', 'Solvent ramah serat wol', 'dry_clean', 45000, 'pcs', 'dry_cleaning', '1 Hari'),
  ('Sneaker Deep Clean', 'Anti-bakteri + Unyellowing', 'sepatu', 55000, 'pasang', 'roller_skating', '2 Hari'),
  ('Kemeja Satuan Hanger', 'Steam Press & Plastic Cover', 'satuan', 12000, 'pcs', 'checkroom', '1 Hari')
on conflict do nothing;

-- ============================================
-- SEED DATA - Customers
-- ============================================
insert into public.customers (name, phone, email, address, tier, loyalty_points)
values
  ('Siti Rahmawati', '+62 812-3456-7890', 'siti@example.com', 'Jl. Senopati No. 42, Jakarta Selatan', 'Gold', 240),
  ('Jessica Mila', '+62 813-9988-7711', 'jessica@example.com', 'Jl. Sudirman No. 18, Jakarta', 'Gold', 520),
  ('Dr. Hendra Gunawan', '+62 811-2345-6789', 'hendra@example.com', 'Jl. Gatot Subroto No. 88, Jakarta Selatan', 'Regular', 80),
  ('Resto Nusantara', '+62 813-8899-0012', 'b2b@restonusantara.com', 'Jl. HR Rasuna Said No. 12, Jakarta', 'Korporat', 1200),
  ('Rian Adriansyah', '+62 856-1122-3344', 'rian@example.com', 'Jl. Kemang Raya No. 7, Jakarta Selatan', 'Priority', 340),
  ('Dewi Lestari', '+62 878-4455-6677', 'dewi@example.com', 'Jl. Kuningan No. 22, Jakarta', 'Gold', 180),
  ('Ahmad Fauzi', '+62 821-9988-7766', 'ahmad@example.com', 'Jl. Pancoran No. 55, Jakarta Selatan', 'Regular', 45),
  ('Maya Putri', '+62 856-2233-4455', 'maya@example.com', 'Jl. TB Simatupang No. 33, Jakarta', 'Silver', 95),
  ('Bapak Hadi Sutrisno', '+62 811-6677-8899', 'hadi@example.com', 'Jl. Casablanca No. 9, Jakarta', 'Regular', 30),
  ('Keluarga Wijaya', '+62 813-3344-5566', 'wijaya@example.com', 'Jl. Pondok Indah No. 14, Jakarta Selatan', 'Gold', 410)
on conflict do nothing;
