export default function QuickMetrics() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-xl bg-surface-container-low/60 backdrop-blur-xl p-3.5 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-[18px]">speed</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-on-surface-variant font-label uppercase">Kapasitas Dryer</span>
          <span className="text-xs font-bold text-on-surface">6/8 Mesin Siap</span>
        </div>
      </div>
      <div className="rounded-xl bg-surface-container-low/60 backdrop-blur-xl p-3.5 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary">
          <span className="material-symbols-outlined text-[18px]">verified</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-on-surface-variant font-label uppercase">SLA Tepat Waktu</span>
          <span className="text-xs font-bold text-on-surface">99.2% Bulan Ini</span>
        </div>
      </div>
    </div>
  )
}
