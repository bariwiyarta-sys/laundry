export default function OrderCustomization() {
  return (
    <div className="rounded-2xl bg-surface-container-low/75 backdrop-blur-2xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[20px]">tune</span>
          <span className="text-xs uppercase font-label tracking-widest text-on-surface font-semibold">Kustomisasi Pesanan Aktif</span>
        </div>
        <span className="text-[11px] text-primary font-medium">Layanan Terpilih: Cuci Kering Setrika</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-4 flex flex-col gap-1.5">
          <label className="text-xs font-medium text-on-surface-variant flex items-center justify-between">
            <span>Berat Timbangan (Kg)</span>
            <span className="text-[10px] text-primary">Sinkron Scale</span>
          </label>
          <div className="relative">
            <input
              className="w-full h-11 px-3.5 rounded-xl bg-surface-container-lowest/90 text-lg font-bold text-primary focus:outline-none focus:ring-1 focus:ring-primary font-headline tracking-wide"
              step="0.1"
              type="number"
              defaultValue="4.5"
            />
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-on-surface-variant">KG</span>
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            <button className="px-2 py-1 rounded-lg bg-surface-container text-[11px] font-medium text-on-surface-variant hover:text-on-surface">+0.5</button>
            <button className="px-2 py-1 rounded-lg bg-surface-container text-[11px] font-medium text-on-surface-variant hover:text-on-surface">+1.0</button>
            <button className="px-2 py-1 rounded-lg bg-surface-container text-[11px] font-medium text-on-surface-variant hover:text-on-surface">Reset</button>
          </div>
        </div>
        <div className="md:col-span-8 flex flex-col gap-1.5">
          <label className="text-xs font-medium text-on-surface-variant">Pilihan Aroma Parfum Laundry</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button className="p-2.5 rounded-xl bg-primary-container text-on-primary-container text-xs font-medium text-left flex flex-col justify-between shadow-[0_0_12px_rgba(125,211,252,0.15)]">
              <span className="material-symbols-outlined text-[16px]">water_drop</span>
              <span className="mt-1 font-semibold leading-tight">Ocean Fresh</span>
              <span className="text-[10px] opacity-80">Default</span>
            </button>
            <button className="p-2.5 rounded-xl bg-surface-container/60 hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface text-xs font-medium text-left flex flex-col justify-between transition-all">
              <span className="material-symbols-outlined text-[16px]">spa</span>
              <span className="mt-1 font-semibold leading-tight">Lavender Classic</span>
              <span className="text-[10px] opacity-60">Calming</span>
            </button>
            <button className="p-2.5 rounded-xl bg-surface-container/60 hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface text-xs font-medium text-left flex flex-col justify-between transition-all">
              <span className="material-symbols-outlined text-[16px]">local_florist</span>
              <span className="mt-1 font-semibold leading-tight">Sakura Blossom</span>
              <span className="text-[10px] opacity-60">Sweet Floral</span>
            </button>
            <button className="p-2.5 rounded-xl bg-surface-container/60 hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface text-xs font-medium text-left flex flex-col justify-between transition-all">
              <span className="material-symbols-outlined text-[16px]">child_care</span>
              <span className="mt-1 font-semibold leading-tight">Baby Soft</span>
              <span className="text-[10px] opacity-60">Hypoallergenic</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-3 flex flex-col gap-2">
        <label className="text-xs font-medium text-on-surface-variant">Catatan Operasional & Instruksi Khusus (Tagging)</label>
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-surface-container-highest text-primary text-xs font-medium flex items-center gap-1.5 cursor-pointer hover:bg-primary-container hover:text-on-primary-container transition-all">
            <span className="material-symbols-outlined text-[14px]">label</span>
            Noda Kerah Baju Putih
            <span className="material-symbols-outlined text-[14px]">close</span>
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-error-container/60 text-error text-xs font-medium flex items-center gap-1.5 cursor-pointer">
            <span className="material-symbols-outlined text-[14px]">warning</span>
            Pakaian Mudah Luntur (Pisahkan)
            <span className="material-symbols-outlined text-[14px]">close</span>
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface-variant text-xs font-medium flex items-center gap-1 cursor-pointer hover:text-on-surface">
            <span className="material-symbols-outlined text-[14px]">check</span>
            Kancing Kemeja Lepas 1
          </span>
          <button className="px-2.5 py-1 rounded-lg bg-surface-container/50 hover:bg-surface-container text-on-surface text-xs font-medium flex items-center gap-1 transition-colors">
            <span className="material-symbols-outlined text-[14px]">add</span>
            Tambah Catatan Lain...
          </button>
        </div>
      </div>
    </div>
  )
}
