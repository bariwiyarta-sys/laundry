import { useState } from 'react'

const CATEGORIES = [
  { id: 'all', label: 'Semua Layanan', icon: 'view_module' },
  { id: 'kiloan', label: 'Kiloan', icon: 'scale' },
  { id: 'satuan', label: 'Satuan & Bedcover', icon: 'bed' },
  { id: 'dry_clean', label: 'Dry Cleaning', icon: 'dry_cleaning' },
  { id: 'sepatu', label: 'Sepatu & Tas', icon: 'roller_skating' },
  { id: 'karpet', label: 'Karpet & Gorden', icon: 'curtains' },
]

const BADGE_COLORS = {
  kiloan: 'bg-secondary-container text-on-secondary-container',
  satuan: 'bg-secondary-container text-on-secondary-container font-semibold',
  dry_clean: 'bg-surface-container-highest text-on-surface-variant font-semibold',
  sepatu: 'bg-secondary-container text-on-secondary-container font-semibold',
  karpet: 'bg-surface-container-highest text-on-surface-variant font-semibold',
}

const formatCurrency = (value) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(value || 0)

export default function ServiceCatalog({ services = [] }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all' ? services : services.filter((s) => s.category === activeCategory)

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap flex items-center gap-1.5 transition-all ${
              activeCategory === cat.id
                ? 'bg-primary text-on-primary font-semibold shadow-[0_0_16px_rgba(125,211,252,0.25)]'
                : 'bg-surface-container/70 hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <div className="text-xs text-on-surface-variant p-4 text-center">Belum ada layanan dalam kategori ini.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filtered.map((svc) => (
            <div
              key={svc.id}
              className="group relative rounded-2xl bg-surface-container-low/80 backdrop-blur-xl p-4 flex flex-col justify-between shadow-sm hover:shadow-[0_4px_20px_rgba(125,211,252,0.12)] transition-all"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="w-10 h-10 rounded-xl bg-primary-container/60 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">{svc.icon || 'local_laundry_service'}</span>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${BADGE_COLORS[svc.category] || 'bg-surface-container-highest text-on-surface-variant'}`}>
                  {svc.estimated_duration || svc.category}
                </span>
              </div>
              <div className="mt-3">
                <h4 className="text-sm font-semibold text-on-surface leading-snug">{svc.name}</h4>
                <span className="text-xs text-on-surface-variant mt-0.5 block">{svc.description || '-'}</span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-sm font-bold text-primary font-headline">{formatCurrency(svc.price_per_unit)}</span>
                  <span className="text-[11px] text-on-surface-variant">/ {svc.unit}</span>
                </div>
              </div>
              <div className="mt-3 pt-3 flex items-center justify-end">
                <button className="w-full h-8 rounded-xl bg-surface-container/70 hover:bg-primary-container hover:text-on-primary-container text-on-surface text-xs font-semibold flex items-center justify-center gap-1.5 transition-all">
                  <span className="material-symbols-outlined text-[16px]">add</span>
                  Tambah
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
