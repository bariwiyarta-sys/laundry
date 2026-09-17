export default function CartBilling() {
  return (
    <div className="rounded-2xl bg-surface-container-low/85 backdrop-blur-2xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] flex flex-col">
      <div className="pb-4 mb-4 flex items-start justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-label tracking-widest text-primary font-bold">Billing Cart</span>
            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-mono font-bold">#AW-2025-0894</span>
          </div>
          <span className="text-xs text-on-surface-variant mt-1">
            Estimasi Selesai: <strong className="text-on-surface font-semibold">Besok, 16:00 WIB</strong>
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-error transition-colors" title="Kosongkan Keranjang">
            <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 max-h-64 overflow-y-auto pr-1">
        <div className="p-3 rounded-xl bg-surface-container/50 flex items-start justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-on-surface">Kiloan Cuci Kering Setrika</span>
            <span className="text-[11px] text-on-surface-variant mt-0.5">4.5 kg × Rp 9.000 • Aroma: Ocean Fresh</span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface-container-highest text-primary">Noda Kerah</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-error-container/70 text-error">Pisahkan Luntur</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs font-bold text-on-surface font-headline">Rp 40.500</span>
            <button className="text-[11px] text-on-surface-variant hover:text-error mt-1 flex items-center gap-0.5">
              <span className="material-symbols-outlined text-[14px]">delete</span>
            </button>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-surface-container/50 flex items-start justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-on-surface">Cuci Bedcover King Size</span>
            <span className="text-[11px] text-on-surface-variant mt-0.5">1 pcs × Rp 35.000 • Packaging Bag</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs font-bold text-on-surface font-headline">Rp 35.000</span>
            <button className="text-[11px] text-on-surface-variant hover:text-error mt-1 flex items-center gap-0.5">
              <span className="material-symbols-outlined text-[14px]">delete</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4">
        <label className="text-xs font-medium text-on-surface-variant mb-2 block">Metode Penyerahan Laundry</label>
        <div className="grid grid-cols-2 gap-2">
          <label className="cursor-pointer">
            <input className="sr-only peer" name="pickup_mode" type="radio" />
            <div className="p-2.5 rounded-xl bg-surface-container/40 peer-checked:bg-primary-container peer-checked:text-on-primary-container text-on-surface-variant hover:text-on-surface text-xs font-medium flex items-center justify-center gap-2 transition-all">
              <span className="material-symbols-outlined text-[16px]">store</span>
              <span>Ambil di Outlet</span>
            </div>
          </label>
          <label className="cursor-pointer">
            <input checked className="sr-only peer" name="pickup_mode" type="radio" />
            <div className="p-2.5 rounded-xl bg-surface-container/40 peer-checked:bg-primary-container peer-checked:text-on-primary-container text-on-surface-variant hover:text-on-surface text-xs font-medium flex items-center justify-center gap-2 transition-all">
              <span className="material-symbols-outlined text-[16px]">local_shipping</span>
              <span>Antar ke Rumah (+10rb)</span>
            </div>
          </label>
        </div>
      </div>
      <div className="mt-3 p-3 rounded-xl bg-surface-container-lowest/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input checked className="w-4 h-4 rounded text-primary bg-surface-container focus:ring-0 focus:ring-offset-0 cursor-pointer" id="pointRedeem" type="checkbox" />
          <label className="text-xs text-on-surface cursor-pointer select-none" htmlFor="pointRedeem">
            Tukar <strong className="text-tertiary">200 Poin</strong> Gold Reward
          </label>
        </div>
        <span className="text-xs font-semibold text-tertiary">-Rp 20.000</span>
      </div>
      <div className="mt-4 pt-3 flex flex-col gap-1.5 text-xs text-on-surface-variant">
        <div className="flex items-center justify-between">
          <span>Subtotal Layanan (2 Item)</span>
          <span className="font-medium text-on-surface">Rp 75.500</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Biaya Kirim / Kurir Ekspedisi</span>
          <span className="font-medium text-on-surface">Rp 10.000</span>
        </div>
        <div className="flex items-center justify-between text-tertiary">
          <span>Diskon Poin Loyalitas</span>
          <span>-Rp 20.000</span>
        </div>
        <div className="mt-2 pt-2 flex items-baseline justify-between">
          <span className="text-sm font-semibold text-on-surface">Total Akhir Pembayaran</span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-primary font-headline tracking-tight">Rp 65.500</span>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-2.5">
        <button className="w-full h-12 rounded-xl bg-primary text-on-primary font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(125,211,252,0.35)] hover:bg-primary-fixed-dim transition-all active:scale-[0.99]">
          <span className="material-symbols-outlined text-[20px]">print</span>
          <span>Bayar & Cetak Struk Thermal (Enter)</span>
        </button>
        <div className="grid grid-cols-2 gap-2">
          <button className="h-10 rounded-xl bg-secondary-container hover:bg-secondary-container/80 text-on-secondary-container text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors">
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Kirim Nota WhatsApp</span>
          </button>
          <button className="h-10 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors">
            <span className="material-symbols-outlined text-[18px]">drafts</span>
            <span>Simpan Draft Nota</span>
          </button>
        </div>
      </div>
    </div>
  )
}
