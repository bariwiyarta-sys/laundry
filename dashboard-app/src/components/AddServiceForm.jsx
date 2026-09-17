import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

const CATEGORIES = [
  { value: 'kiloan', label: 'Kiloan' },
  { value: 'satuan', label: 'Satuan & Bedcover' },
  { value: 'dry_clean', label: 'Dry Cleaning' },
  { value: 'sepatu', label: 'Sepatu & Tas' },
  { value: 'karpet', label: 'Karpet & Gorden' },
]

const UNITS = [
  { value: 'kg', label: 'Kg' },
  { value: 'pcs', label: 'Pcs' },
  { value: 'pasang', label: 'Pasang' },
  { value: 'meter', label: 'Meter' },
]

export default function AddServiceForm({ onSuccess }) {
  const [form, setForm] = useState({
    name: '',
    description: '',
    category: 'kiloan',
    price_per_unit: '',
    unit: 'kg',
    icon: 'local_laundry_service',
    estimated_duration: '',
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    try {
      const { error: insertError } = await supabase.from('services').insert([
        {
          name: form.name,
          description: form.description,
          category: form.category,
          price_per_unit: Number(form.price_per_unit),
          unit: form.unit,
          icon: form.icon,
          estimated_duration: form.estimated_duration || null,
          is_active: true,
        },
      ])
      if (insertError) throw insertError
      setForm({
        name: '',
        description: '',
        category: 'kiloan',
        price_per_unit: '',
        unit: 'kg',
        icon: 'local_laundry_service',
        estimated_duration: '',
      })
      onSuccess?.()
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-surface-container/60 backdrop-blur-xl p-6 shadow-xl"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="material-symbols-outlined text-primary text-[20px]">add_circle</span>
        <h2 className="text-base font-semibold text-on-surface">Tambah Layanan Baru</h2>
      </div>
      {error && (
        <div className="mb-3 p-2.5 rounded-xl bg-error-container/40 text-xs text-error">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2 flex flex-col gap-1.5">
          <label className="text-xs font-medium text-on-surface-variant">Nama Layanan</label>
          <input
            className="w-full h-10 px-3.5 rounded-xl bg-surface-container-lowest/80 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary/40"
            placeholder="Contoh: Kiloan Super Clean"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-1.5">
          <label className="text-xs font-medium text-on-surface-variant">Deskripsi</label>
          <input
            className="w-full h-10 px-3.5 rounded-xl bg-surface-container-lowest/80 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary/40"
            placeholder="Ringkasan singkat layanan"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-on-surface-variant">Kategori</label>
          <select
            className="w-full h-10 px-3.5 rounded-xl bg-surface-container-lowest/80 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary/40"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-on-surface-variant">Satuan</label>
          <select
            className="w-full h-10 px-3.5 rounded-xl bg-surface-container-lowest/80 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary/40"
            value={form.unit}
            onChange={(e) => setForm({ ...form, unit: e.target.value })}
          >
            {UNITS.map((u) => (
              <option key={u.value} value={u.value}>
                {u.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-on-surface-variant">Harga per Satuan (Rp)</label>
          <input
            className="w-full h-10 px-3.5 rounded-xl bg-surface-container-lowest/80 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary/40"
            type="number"
            placeholder="10000"
            value={form.price_per_unit}
            onChange={(e) => setForm({ ...form, price_per_unit: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-on-surface-variant">Estimasi Durasi</label>
          <input
            className="w-full h-10 px-3.5 rounded-xl bg-surface-container-lowest/80 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary/40"
            placeholder="Contoh: 2 Hari"
            value={form.estimated_duration}
            onChange={(e) => setForm({ ...form, estimated_duration: e.target.value })}
          />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() =>
            setForm({
              name: '',
              description: '',
              category: 'kiloan',
              price_per_unit: '',
              unit: 'kg',
              icon: 'local_laundry_service',
              estimated_duration: '',
            })
          }
          className="px-4 py-2 rounded-xl bg-surface-container text-xs font-medium text-on-surface-variant hover:text-on-surface transition-colors"
          disabled={saving}
        >
          Reset
        </button>
        <button
          type="submit"
          disabled={saving}
          className="px-4 py-2 rounded-xl bg-primary text-on-primary text-xs font-semibold flex items-center gap-1.5 shadow-sm disabled:opacity-60"
        >
          <span className="material-symbols-outlined text-[16px]">{saving ? 'progress_activity' : 'save'}</span>
          {saving ? 'Menyimpan...' : 'Simpan Layanan'}
        </button>
      </div>
    </form>
  )
}
