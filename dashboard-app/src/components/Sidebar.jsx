import { useState } from 'react'

export default function Sidebar() {
  const [active, setActive] = useState('dashboard')
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'space_dashboard' },
    { id: 'kasir-pos-pesanan', label: 'Kasir POS & Pesanan', icon: 'point_of_sale' },
    { id: 'operasional-kurir', label: 'Operasional & Kurir', icon: 'local_shipping' },
    { id: 'laporan-keuangan', label: 'Laporan Keuangan', icon: 'account_balance_wallet' },
  ]

  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest/80 backdrop-blur-2xl z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="flex flex-col">
        <div className="h-16 px-6 flex items-center gap-3 bg-surface-container-low/40 backdrop-blur-xl">
          <img
            alt="AuraWash Laundry OS Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1V-OIR7wBZBwpcjYP2i-I8Ojm_o6kzFrBdXpiBQFlmwyEoKRztTti1PtCe3xzplNfWqriUqb9ZOEOsLLK3GFSqBZaYWHlRZEMkdsvdD8jmHsxdGIcZ7kdZcy0bWxFaV5mXeTOKhvC43BprrPpdAsTSCE5AWWcPpqdgyLERPLhJC2pSe4GGIiJ_lMSCwbkZddGtyGMvstnP1Dm2c3g7aYwFJyBihFe8qQpW4itpCgD50JlQmlKQ7O9pGMw"
          />
          <div className="flex flex-col">
            <span className="text-sm font-headline font-bold tracking-tight text-on-surface leading-tight">AuraWash</span>
            <span className="text-[11px] font-label text-primary tracking-wide font-medium leading-tight">Laundry OS</span>
          </div>
        </div>
        <div className="px-4 py-4">
          <div className="p-3 rounded-xl bg-surface-container/60 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-label tracking-wider text-on-surface-variant font-semibold">Active Shift</span>
                <span className="text-xs font-medium text-on-surface">Shift Pagi: Budi S.</span>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container font-semibold">LIVE</span>
          </div>
        </div>
        <nav className="flex flex-col gap-1.5 px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active === item.id
                  ? 'bg-primary-container text-on-primary-container font-semibold rounded-xl shadow-[0_0_20px_rgba(125,211,252,0.15)]'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="p-3 rounded-xl bg-surface-container-low/70 backdrop-blur-xl flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[18px]">local_laundry_service</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-on-surface">Mesin Aktif</span>
              <span className="text-[11px] text-on-surface-variant">14 / 16 Siap Pakai</span>
            </div>
          </div>
          <span className="w-2 h-2 rounded-full bg-primary"></span>
        </div>
        <div className="px-2 py-1 text-center">
          <span className="text-[11px] text-on-surface-variant font-label tracking-tight">© 2024 AuraWash Platform</span>
        </div>
      </div>
    </aside>
  )
}
