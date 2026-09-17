export default function ProductionPipeline() {
  const steps = [
    { stage: 'Tahap 01', title: 'Order Masuk', subtitle: 'Timbang & Labeling Nota', count: '8 Order', color: 'primary', progress: 65 },
    { stage: 'Tahap 02', title: 'Pencucian', subtitle: 'Washer #1, #2, #3, #4', count: '6 Order', color: 'secondary', progress: 80 },
    { stage: 'Tahap 03', title: 'Pengeringan', subtitle: 'Dryer #1, #3 Aktif', count: '4 Order', color: 'primary-fixed', progress: 50 },
    { stage: 'Tahap 04', title: 'Setrika & Packing', subtitle: 'Steam Boiler & Fragrance', count: '5 Order', color: 'tertiary', progress: 70 },
    { stage: 'Tahap 05 (Ready)', title: 'Siap Ambil / Antar', subtitle: 'Rak A (12) • Kurir (7)', count: '19 Order', color: 'primary', progress: 100, isLast: true },
  ]

  return (
    <div className="rounded-2xl bg-surface-container/60 backdrop-blur-xl p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-primary text-[22px]">alt_route</span>
          <div>
            <h2 className="text-base font-semibold text-on-surface tracking-tight">Live Alur Produksi Real-Time</h2>
            <p className="text-xs text-on-surface-variant">Pelacakan otomatis siklus cucian dari penimbangan hingga packing</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container-lowest/80 text-xs">
          <span className="material-symbols-outlined text-secondary text-[16px]">avg_time</span>
          <span className="text-on-surface-variant">Rata-rata Waktu Tunggu Alur:</span>
          <span className="font-bold text-primary">3.2 Jam</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 relative">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl flex flex-col justify-between relative overflow-hidden transition-all hover:bg-surface-container-high/60 ${
              step.isLast ? 'bg-primary-container/30 backdrop-blur-md' : 'bg-surface-container-low/70 backdrop-blur-md'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-semibold text-on-surface-variant tracking-wider uppercase">{step.stage}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                  step.color === 'primary'
                    ? 'bg-primary/20 text-primary'
                    : step.color === 'secondary'
                    ? 'bg-secondary/20 text-secondary'
                    : step.color === 'tertiary'
                    ? 'bg-tertiary/20 text-tertiary'
                    : 'bg-primary-fixed/20 text-primary-fixed'
                }`}
              >
                {step.count}
              </span>
            </div>
            <div className="mb-4">
              <span className="text-sm font-semibold text-on-surface block">{step.title}</span>
              <span className="text-xs text-on-surface-variant">{step.subtitle}</span>
            </div>
            <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
              <div
                className={`h-1.5 rounded-full ${
                  step.color === 'primary'
                    ? 'bg-primary'
                    : step.color === 'secondary'
                    ? 'bg-secondary'
                    : step.color === 'tertiary'
                    ? 'bg-tertiary'
                    : 'bg-primary-fixed'
                }`}
                style={{ width: `${step.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
