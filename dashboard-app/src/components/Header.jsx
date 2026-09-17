export default function Header() {
  return (
    <header className="fixed top-0 left-72 right-0 h-16 bg-surface-dim/75 backdrop-blur-2xl z-40 px-6 flex items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container/60 hover:bg-surface-container-high hover:text-on-surface transition-all cursor-pointer">
          <span className="material-symbols-outlined text-[18px] text-primary">storefront</span>
          <div className="flex flex-col text-left">
            <span className="text-xs font-semibold text-on-surface leading-tight">Cabang Utama - Senopati (HQ)</span>
            <span className="text-[10px] text-primary font-medium leading-tight">Ganti Cabang</span>
          </div>
          <span className="material-symbols-outlined text-[16px] text-on-surface-variant ml-1">expand_more</span>
        </div>
        <div className="relative w-80 lg:w-96">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">search</span>
          <input
            className="w-full h-9 pl-10 pr-4 rounded-xl bg-surface-container-lowest/70 text-xs text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary/40 transition-all"
            placeholder="Cari No. Nota, Nama Pelanggan, atau No. Resi..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="h-9 px-4 rounded-xl bg-primary text-on-primary font-semibold text-xs flex items-center gap-1.5 shadow-[0_0_20px_rgba(125,211,252,0.25)] hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-all">
          <span className="material-symbols-outlined text-[18px]">add</span>
          <span>+ Pesanan Baru</span>
        </button>
        <div className="relative">
          <button className="w-9 h-9 rounded-xl bg-surface-container/60 hover:bg-surface-container-high hover:text-on-surface text-on-surface-variant flex items-center justify-center transition-all">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
          </button>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error ring-2 ring-surface-dim"></span>
        </div>
        <div className="h-6 w-[1px] bg-outline-variant/60"></div>
        <div className="flex items-center gap-2.5 pl-1 cursor-pointer">
          <img
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover ring-1 ring-primary/30"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKLr7xmCndgtSaggUrdJukhhawnoNBXizM528-sV3CbrQ4AVD_gtNZLOUc87zkqJsMTf2d7WtMAONjIFkga2ZPNxfkcAScSNEOSkae_Tq3EnwVTIAWnlESKCeV9Euqnm479BbxHmTZKLWADrJ0UsFugcEDP_UCBBjwQvUKF_Aot9vcCJ0NqDfv0CDLcsLG6h5S9LZ02RHdrimfaNIHy2VJlX6fRu4g8IGrpupxmnN9GItPQdshX-BV"
          />
          <div className="hidden xl:flex flex-col text-left">
            <span className="text-xs font-semibold text-on-surface leading-tight">Budi Santoso</span>
            <span className="text-[11px] text-on-surface-variant leading-tight">Outlet Manager</span>
          </div>
        </div>
      </div>
    </header>
  )
}
