import { useState } from 'react'

export default function WelcomeBanner() {
  const [activeFilter, setActiveFilter] = useState('today')

  const filters = [
    { id: 'today', label: 'Hari ini' },
    { id: '7d', label: '7 Hari' },
    { id: 'month', label: 'Bulan ini' },
  ]

  const filterBtnClass = (id) =>
    `px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
      activeFilter === id
        ? 'bg-primary text-on-primary font-semibold shadow-sm'
        : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50'
    }`

  return (
    <div className="relative overflow-hidden rounded-2xl bg-surface-container/60 backdrop-blur-2xl p-6 sm:p-8 shadow-xl">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/80 backdrop-blur-md text-[11px] font-medium text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
            <span>AuraWash Cloud Core • Cabang Senopati HQ</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-on-surface">
            Selamat Datang kembali, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Budi Santoso</span>
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="flex items-center gap-1.5 text-on-surface font-medium">
              <span className="material-symbols-outlined text-[16px] text-primary">local_laundry_service</span>
              8 Mesin Aktif
            </span>
            <span className="text-outline-variant">•</span>
            <span className="text-primary-fixed-dim">2 Siap</span>
            <span className="text-outline-variant">•</span>
            <span className="text-secondary-fixed">5 Berjalan</span>
            <span className="text-outline-variant">•</span>
            <span className="text-error font-medium">1 Maintenance</span>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex p-1 rounded-xl bg-surface-container-lowest/80 backdrop-blur-lg">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={filterBtnClass(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <button className="h-9 px-4 rounded-xl bg-surface-container-high/80 hover:bg-surface-bright text-xs font-semibold text-on-surface flex items-center gap-2 shadow-sm transition-all hover:scale-[1.02]">
            <span className="material-symbols-outlined text-[18px] text-primary">download</span>
            <span>Unduh Ringkasan</span>
          </button>
        </div>
      </div>
    </div>
  )
}
