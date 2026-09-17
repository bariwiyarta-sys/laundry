export default function KPICards() {
  const cards = [
    {
      title: 'Omzet Hari Ini',
      icon: 'payments',
      value: 'Rp 4.850.000',
      subtext: '+18.4%',
      detail: 'vs kemarin (Rp 4.095k)',
      color: 'primary',
      trend: 'up',
    },
    {
      title: 'Total Cucian Aktif',
      icon: 'dry_cleaning',
      value: '142',
      unit: 'Kg',
      unit2: '38 Pcs',
      subtext: '24 Order',
      detail: 'sedang dalam pengerjaan',
      color: 'secondary',
      trend: 'neutral',
    },
    {
      title: 'Siap Ambil / Antar',
      icon: 'inventory_2',
      value: '19',
      unit: 'Pesanan',
      subtext: '100% On-Time SLA',
      detail: '• 7 Delivery',
      color: 'tertiary',
      trend: 'up',
    },
    {
      title: 'Stok Kritis',
      icon: 'warning',
      value: '2 Peringatan',
      alerts: [
        'Deterjen Liquid Lav.: 2.4 L sisa',
        'Plastik Roll L: 15 pcs sisa',
      ],
      color: 'error',
      trend: 'alert',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="group relative rounded-2xl bg-surface-container/60 backdrop-blur-xl p-5 shadow-lg transition-all hover:-translate-y-1 hover:bg-surface-container-high/70"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-on-surface-variant">{card.title}</span>
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                card.color === 'primary'
                  ? 'bg-primary-container/40 text-primary group-hover:bg-primary group-hover:text-on-primary'
                  : card.color === 'secondary'
                  ? 'bg-secondary-container/50 text-secondary group-hover:bg-secondary group-hover:text-on-secondary'
                  : card.color === 'tertiary'
                  ? 'bg-tertiary-container/50 text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary'
                  : 'bg-error-container/40 text-error group-hover:bg-error group-hover:text-on-error'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{card.icon}</span>
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-2xl font-bold tracking-tight text-on-surface">
              {card.value}
              {card.unit && <span className="text-base font-normal text-on-surface-variant"> {card.unit}</span>}
              {card.unit2 && <span className="text-base font-normal text-on-surface-variant"> • {card.unit2}</span>}
            </span>
          </div>
          {card.trend === 'alert' ? (
            <div className="text-[11px] text-on-surface-variant flex flex-col gap-0.5 leading-tight">
              {card.alerts.map((alert, i) => (
                <span key={i} className="truncate">
                  • {alert.split(':')[0]}: <strong className="text-error font-medium">{alert.split(':')[1]}</strong>
                </span>
              ))}
            </div>
          ) : (
            <div
              className={`flex items-center gap-1.5 text-xs ${
                card.trend === 'up' ? 'text-primary font-medium' : 'text-on-surface-variant'
              }`}
            >
              {card.trend === 'up' && <span className="material-symbols-outlined text-[16px]">trending_up</span>}
              {card.trend === 'neutral' && <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>}
              <span>{card.subtext}</span>
              <span className="text-on-surface-variant font-normal">{card.detail}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
