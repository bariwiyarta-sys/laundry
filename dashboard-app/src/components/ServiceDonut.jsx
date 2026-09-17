export default function ServiceDonut() {
  return (
    <div className="rounded-2xl bg-surface-container/60 backdrop-blur-xl p-6 shadow-xl flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary text-[20px]">pie_chart</span>
            <h2 className="text-base font-semibold text-on-surface">Layanan Terlaris</h2>
          </div>
          <span className="text-[11px] text-on-surface-variant">Berdasarkan Omzet</span>
        </div>
        <div className="relative w-44 h-44 mx-auto my-3 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" fill="transparent" r="38" stroke="#1a2438" strokeWidth="12"></circle>
            <circle cx="50" cy="50" fill="transparent" r="38" stroke="#7dd3fc" strokeDasharray="107 131" strokeDashoffset="0" strokeWidth="12"></circle>
            <circle cx="50" cy="50" fill="transparent" r="38" stroke="#88b4cc" strokeDasharray="59 179" strokeDashoffset="-107" strokeWidth="12"></circle>
            <circle cx="50" cy="50" fill="transparent" r="38" stroke="#c8a0f0" strokeDasharray="43 195" strokeDashoffset="-166" strokeWidth="12"></circle>
            <circle cx="50" cy="50" fill="transparent" r="38" stroke="#0e4d6e" strokeDasharray="29 209" strokeDashoffset="-209" strokeWidth="12"></circle>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-xl font-bold text-on-surface">Rp 4.85M</span>
            <span className="text-[10px] text-on-surface-variant font-medium">Total Hari Ini</span>
          </div>
        </div>
        <div className="space-y-3 mt-4">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
              <span className="text-on-surface">Kiloan Reguler (45%)</span>
            </div>
            <span className="font-semibold text-on-surface">Rp 2.182.500</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
              <span className="text-on-surface">Bedcover & Linen (25%)</span>
            </div>
            <span className="font-semibold text-on-surface">Rp 1.212.500</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
              <span className="text-on-surface">Sepatu & Tas Care (18%)</span>
            </div>
            <span className="font-semibold text-on-surface">Rp 873.000</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
              <span className="text-on-surface">Dry Cleaning Premium (12%)</span>
            </div>
            <span className="font-semibold text-on-surface">Rp 582.000</span>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center justify-between">
        <span className="text-[11px] text-on-surface-variant">Target Harian: <strong>Rp 5.000.000</strong></span>
        <span className="text-xs font-bold text-primary">97% Tercapai</span>
      </div>
    </div>
  )
}
