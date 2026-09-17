export default function CustomerSelection() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-surface-container-low/75 backdrop-blur-2xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
      <div className="absolute -right-12 -top-12 w-44 h-44 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[20px]">person_search</span>
          <span className="text-xs uppercase font-label tracking-widest text-on-surface-variant font-semibold">Pelanggan Aktif</span>
        </div>
        <button className="text-xs text-primary hover:text-primary-fixed font-medium flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">person_add</span>
          <span>+ Tambah Baru</span>
        </button>
      </div>
      <div className="relative mb-3">
        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
        <input
          className="w-full h-11 pl-11 pr-10 rounded-xl bg-surface-container-lowest/80 text-sm font-medium text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-1 focus:ring-primary/50 shadow-inner"
          placeholder="Ketik nama / no. telepon / barcode member..."
          type="text"
          defaultValue="Siti Rahmawati (+62 812-3456-7890)"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface">
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
      </div>
      <div className="rounded-xl bg-surface-container/60 p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-container/80 flex items-center justify-center text-primary font-bold text-sm shadow-inner">SR</div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-on-surface">Siti Rahmawati</span>
              <span className="px-2 py-0.5 rounded-full bg-tertiary-container/60 text-tertiary text-[10px] font-semibold tracking-wide">MEMBER GOLD</span>
            </div>
            <span className="text-xs text-on-surface-variant flex items-center gap-1.5 mt-0.5">
              <span className="material-symbols-outlined text-[14px]">call</span> +62 812-3456-7890
              <span className="text-outline">•</span>
              <span className="material-symbols-outlined text-[14px]">location_on</span> Jl. Senopati No. 42 (1.8 km)
            </span>
          </div>
        </div>
        <div className="flex sm:flex-col items-end justify-between w-full sm:w-auto bg-surface-container-lowest/50 sm:bg-transparent p-2 sm:p-0 rounded-lg">
          <span className="text-[10px] font-label text-on-surface-variant uppercase">Reward Loyalitas</span>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-[16px]">stars</span>
            <span className="text-xs font-bold text-on-surface">240 Poin</span>
            <span className="text-[11px] text-primary">(Rp 24.000)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
