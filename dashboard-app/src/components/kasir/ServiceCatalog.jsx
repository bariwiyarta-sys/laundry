export default function ServiceCatalog() {
  const categories = [
    { id: 'all', label: 'Semua Layanan', icon: 'view_module', active: true },
    { id: 'kiloan', label: 'Kiloan', icon: 'scale', active: false },
    { id: 'satuan', label: 'Satuan & Bedcover', icon: 'bed', active: false },
    { id: 'dry', label: 'Dry Cleaning', icon: 'dry_cleaning', active: false },
    { id: 'sepatu', label: 'Sepatu & Tas', icon: 'roller_skating', active: false },
    { id: 'karpet', label: 'Karpet & Gorden', icon: 'curtains', active: false },
  ]

  const services = [
    {
      title: 'Kiloan Cuci Kering Setrika',
      desc: 'Reguler 48 Jam • Higienis',
      price: 'Rp 9.000',
      unit: '/ kg',
      icon: 'local_laundry_service',
      badge: '2 Hari',
      badgeColor: 'bg-secondary-container text-on-secondary-container',
      inCart: true,
      qty: '4.5',
      total: 'Rp 40.500',
    },
    {
      title: 'Kiloan Express 6 Jam',
      desc: 'Prioritas Mesin Utama',
      price: 'Rp 18.000',
      unit: '/ kg',
      icon: 'bolt',
      badge: 'Express 6 Jam',
      badgeColor: 'bg-tertiary-container/80 text-tertiary font-semibold',
      inCart: false,
    },
    {
      title: 'Cuci Bedcover King Size',
      desc: 'Termasuk Tas Khusus',
      price: 'Rp 35.000',
      unit: '/ pcs',
      icon: 'bed',
      badge: 'Satuan',
      badgeColor: 'bg-secondary-container text-on-secondary-container font-semibold',
      inCart: true,
      qty: '1',
      total: 'Rp 35.000',
    },
    {
      title: 'Jas & Blazer Premium',
      desc: 'Solvent ramah serat wol',
      price: 'Rp 45.000',
      unit: '/ pcs',
      icon: 'dry_cleaning',
      badge: 'Dry Clean',
      badgeColor: 'bg-surface-container-highest text-on-surface-variant font-semibold',
      inCart: false,
    },
    {
      title: 'Sneaker Deep Clean',
      desc: 'Anti-bakteri + Unyellowing',
      price: 'Rp 55.000',
      unit: '/ pasang',
      icon: 'roller_skating',
      badge: 'Sepatu',
      badgeColor: 'bg-secondary-container text-on-secondary-container font-semibold',
      inCart: false,
    },
    {
      title: 'Kemeja Satuan Hanger',
      desc: 'Steam Press & Plastic Cover',
      price: 'Rp 12.000',
      unit: '/ pcs',
      icon: 'checkroom',
      badge: 'Satuan',
      badgeColor: 'bg-surface-container-highest text-on-surface-variant font-semibold',
      inCart: false,
    },
  ]

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap flex items-center gap-1.5 transition-all ${
              cat.active
                ? 'bg-primary text-on-primary font-semibold shadow-[0_0_16px_rgba(125,211,252,0.25)]'
                : 'bg-surface-container/70 hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {services.map((svc, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl bg-surface-container-low/80 backdrop-blur-xl p-4 flex flex-col justify-between shadow-sm hover:shadow-[0_4px_20px_rgba(125,211,252,0.12)] transition-all"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary-container/60 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">{svc.icon}</span>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${svc.badgeColor}`}>{svc.badge}</span>
            </div>
            <div className="mt-3">
              <h4 className="text-sm font-semibold text-on-surface leading-snug">{svc.title}</h4>
              <span className="text-xs text-on-surface-variant mt-0.5 block">{svc.desc}</span>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-sm font-bold text-primary font-headline">{svc.price}</span>
                <span className="text-[11px] text-on-surface-variant">{svc.unit}</span>
              </div>
            </div>
            <div className="mt-3 pt-3 flex items-center justify-between">
              {svc.inCart ? (
                <div className="flex items-center gap-1.5 bg-surface-container-lowest/80 rounded-lg p-1">
                  <button className="w-6 h-6 rounded-md bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center text-xs transition-colors">-</button>
                  <span className="text-xs font-bold text-on-surface w-7 text-center">{svc.qty}</span>
                  <button className="w-6 h-6 rounded-md bg-primary-container text-on-primary-container flex items-center justify-center text-xs font-bold transition-colors">+</button>
                </div>
              ) : (
                <button className="w-full h-8 rounded-xl bg-surface-container/70 hover:bg-primary-container hover:text-on-primary-container text-on-surface text-xs font-semibold flex items-center justify-center gap-1.5 transition-all">
                  <span className="material-symbols-outlined text-[16px]">add</span>
                  Tambah
                </button>
              )}
              {svc.inCart && <span className="text-xs font-semibold text-on-surface">{svc.total}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
