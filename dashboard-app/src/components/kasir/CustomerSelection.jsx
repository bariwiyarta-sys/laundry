import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

const TIERS = [
  { value: 'Regular', label: 'Regular' },
  { value: 'Silver', label: 'Silver' },
  { value: 'Gold', label: 'Gold' },
  { value: 'Priority', label: 'Priority' },
  { value: 'Korporat', label: 'Korporat' },
]

export default function CustomerSelection({ customers = [], onCustomerAdded }) {
  const [query, setQuery] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    tier: 'Regular',
    loyalty_points: 0,
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!customers.length) {
      supabase.from('customers').select('*').then(({ data }) => {
        if (data) onCustomerAdded?.(data)
      })
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    try {
      const { data, error: insertError } = await supabase
        .from('customers')
        .insert([
          {
            name: form.name,
            phone: form.phone,
            email: form.email || null,
            address: form.address || null,
            tier: form.tier,
            loyalty_points: Number(form.loyalty_points) || 0,
          },
        ])
        .select()
        .single()

      if (insertError) throw insertError

      onCustomerAdded?.([data, ...customers])
      setForm({ name: '', phone: '', email: '', address: '', tier: 'Regular', loyalty_points: 0 })
      setShowForm(false)
      setQuery('')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const filtered = customers.filter((c) => {
    const q = query.toLowerCase()
    return c.name.toLowerCase().includes(q) || c.phone.includes(query) || (c.email && c.email.toLowerCase().includes(q))
  })

  return (
    <div className="relative overflow-hidden rounded-2xl bg-surface-container-low/75 backdrop-blur-2xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
      <div className="absolute -right-12 -top-12 w-44 h-44 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[20px]">person_search</span>
          <span className="text-xs uppercase font-label tracking-widest text-on-surface-variant font-semibold">Pelanggan Aktif</span>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="text-xs text-primary hover:text-primary-fixed font-medium flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-[16px]">person_add</span>
          <span>{showForm ? 'Tutup' : '+ Tambah Baru'}</span>
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit} className="mb-4 p-4 rounded-xl bg-surface-container/60 space-y-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-primary text-[18px]">person_add</span>
            <span className="text-xs font-semibold text-on-surface">Registrasi Pelanggan Baru</span>
          </div>
          {error && <div className="p-2 rounded-lg bg-error-container/40 text-xs text-error">{error}</div>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-medium text-on-surface-variant">Nama Lengkap</label>
              <input
                className="w-full h-9 px-3 rounded-lg bg-surface-container-lowest/80 text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-primary/40"
                placeholder="Contoh: Siti Rahmawati"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-medium text-on-surface-variant">No. Telepon</label>
              <input
                className="w-full h-9 px-3 rounded-lg bg-surface-container-lowest/80 text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-primary/40"
                placeholder="0812-xxxx-xxxx"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-medium text-on-surface-variant">Email (Opsional)</label>
              <input
                className="w-full h-9 px-3 rounded-lg bg-surface-container-lowest/80 text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-primary/40"
                placeholder="nama@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-medium text-on-surface-variant">Tier Membership</label>
              <select
                className="w-full h-9 px-3 rounded-lg bg-surface-container-lowest/80 text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-primary/40"
                value={form.tier}
                onChange={(e) => setForm({ ...form, tier: e.target.value })}
              >
                {TIERS.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2 flex flex-col gap-1">
              <label className="text-[11px] font-medium text-on-surface-variant">Alamat</label>
              <input
                className="w-full h-9 px-3 rounded-lg bg-surface-container-lowest/80 text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-primary/40"
                placeholder="Jl. Nama Jalan No. XX"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-medium text-on-surface-variant">Poin Loyalitas Awal</label>
              <input
                className="w-full h-9 px-3 rounded-lg bg-surface-container-lowest/80 text-xs text-on-surface focus:outline-none focus:ring-1 focus:ring-primary/40"
                type="number"
                placeholder="0"
                value={form.loyalty_points}
                onChange={(e) => setForm({ ...form, loyalty_points: e.target.value })}
              />
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => {
                setShowForm(false)
                setForm({ name: '', phone: '', email: '', address: '', tier: 'Regular', loyalty_points: 0 })
                setError(null)
              }}
              className="px-3 py-1.5 rounded-lg bg-surface-container text-xs font-medium text-on-surface-variant hover:text-on-surface transition-colors"
              disabled={saving}
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-1.5 rounded-lg bg-primary text-on-primary text-xs font-semibold flex items-center gap-1.5 shadow-sm disabled:opacity-60"
            >
              <span className="material-symbols-outlined text-[16px]">{saving ? 'progress_activity' : 'save'}</span>
              {saving ? 'Menyimpan...' : 'Simpan Pelanggan'}
            </button>
          </div>
        </form>
      )}
      <div className="relative mb-3">
        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
        <input
          className="w-full h-11 pl-11 pr-10 rounded-xl bg-surface-container-lowest/80 text-sm font-medium text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-1 focus:ring-primary/50 shadow-inner"
          placeholder="Ketik nama / no. telepon / barcode member..."
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface" onClick={() => setQuery('')}>
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        )}
      </div>
      {query && (
        <div className="mb-3 max-h-40 overflow-y-auto rounded-xl bg-surface-container/60 divide-y divide-outline-variant/20">
          {filtered.length === 0 ? (
            <div className="p-3 text-xs text-on-surface-variant text-center">Pelanggan tidak ditemukan.</div>
          ) : (
            filtered.map((c) => (
              <div
                key={c.id}
                className="p-2.5 flex items-center gap-2 cursor-pointer hover:bg-surface-container-high/40"
                onClick={() => {
                  setQuery(c.name)
                }}
              >
                <div className="w-8 h-8 rounded-lg bg-primary-container/60 text-primary flex items-center justify-center text-[11px] font-bold">
                  {c.name?.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex flex-col">
                  <div className="text-xs font-semibold text-on-surface">{c.name}</div>
                  <div className="text-[11px] text-on-surface-variant">{c.phone}</div>
                </div>
                <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant">{c.tier}</span>
              </div>
            ))
          )}
        </div>
      )}
      {!query && (
        <div className="rounded-xl bg-surface-container/60 p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-container/80 flex items-center justify-center text-primary font-bold text-sm shadow-inner">
              {customers[0]?.name?.slice(0, 2).toUpperCase() || 'SR'}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-on-surface">{customers[0]?.name || 'Pilih Pelanggan'}</span>
                {customers[0]?.tier && (
                  <span className="px-2 py-0.5 rounded-full bg-tertiary-container/60 text-tertiary text-[10px] font-semibold tracking-wide">
                    {customers[0].tier.toUpperCase()}
                  </span>
                )}
              </div>
              <span className="text-xs text-on-surface-variant flex items-center gap-1.5 mt-0.5">
                {customers[0]?.phone || '-'}
                {customers[0]?.address && (
                  <>
                    <span className="text-outline">•</span>
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    {customers[0].address}
                  </>
                )}
              </span>
            </div>
          </div>
          <div className="flex sm:flex-col items-end justify-between w-full sm:w-auto bg-surface-container-lowest/50 sm:bg-transparent p-2 sm:p-0 rounded-lg">
            <span className="text-[10px] font-label text-on-surface-variant uppercase">Reward Loyalitas</span>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-[16px]">stars</span>
              <span className="text-xs font-bold text-on-surface">{customers[0]?.loyalty_points || 0} Poin</span>
              <span className="text-[11px] text-primary">
                (Rp {((customers[0]?.loyalty_points || 0) * 100).toLocaleString('id-ID')})
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
