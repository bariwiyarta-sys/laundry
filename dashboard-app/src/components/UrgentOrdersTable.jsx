export default function UrgentOrdersTable() {
  const orders = [
    {
      nota: '#AW-8921',
      name: 'Jessica Mila',
      phone: '0812-9988-7711',
      tier: 'Member Gold',
      service: 'EXPRESS 4 JAM',
      serviceType: 'Cuci Komplit Lipat',
      weight: '6.5 Kg',
      status: 'Setrika & Fragrance',
      statusColor: 'tertiary',
      deadline: '15:30 (Sisa 35 m)',
      deadlineColor: 'error',
      pickup: 'Ambil Sendiri',
    },
    {
      nota: '#AW-8919',
      name: 'Dr. Hendra Gunawan',
      phone: '0811-2345-6789',
      tier: 'Regular',
      service: 'SAME-DAY',
      serviceType: 'Dry Clean Jas Dokter',
      weight: '3 Pcs',
      status: 'Pengeringan Rendah',
      statusColor: 'primary',
      deadline: '16:45 (Sisa 1j 50m)',
      deadlineColor: 'on-surface',
      pickup: 'Antar Kurir Express',
      pickupColor: 'secondary',
    },
    {
      nota: '#AW-8914',
      name: 'Resto Nusantara (B2B)',
      phone: '0813-8899-0012',
      tier: 'Korporat',
      service: 'REGULER 24 JAM',
      serviceType: 'Taplak Meja & Seragam Kitchen',
      weight: '28.4 Kg',
      status: 'Washer #03 (Heavy Wash)',
      statusColor: 'secondary',
      deadline: '17:00',
      deadlineColor: 'on-surface',
      pickup: 'Kurir Van #02',
      pickupColor: 'on-surface-variant',
    },
    {
      nota: '#AW-8908',
      name: 'Rian Adriansyah',
      phone: '0856-1122-3344',
      tier: 'Priority',
      service: 'KILAT 8 JAM',
      serviceType: 'Cuci Sepatu Sneaker Balenciaga',
      weight: '1 Pasang',
      status: 'UV Sanitizing & Box',
      statusColor: 'primary',
      deadline: '18:00 (Sisa 3 Jam)',
      deadlineColor: 'primary',
      pickup: 'Ambil Sendiri',
      pickupColor: 'on-surface-variant',
    },
  ]

  const statusColorMap = {
    primary: 'bg-primary/20 text-primary',
    secondary: 'bg-secondary-container/50 text-secondary',
    tertiary: 'bg-tertiary-container/50 text-tertiary',
    'on-surface': 'bg-surface-container-high text-on-surface-variant',
    error: 'bg-error-container/60 text-error',
  }

  const serviceColorMap = {
    error: 'bg-error-container/60 text-error',
    secondary: 'bg-secondary-container text-secondary',
    'on-surface': 'bg-surface-container-high text-on-surface-variant',
    primary: 'bg-primary-container text-primary',
  }

  return (
    <div className="rounded-2xl bg-surface-container/60 backdrop-blur-xl p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-error text-[22px]">bolt</span>
          <div>
            <h2 className="text-base font-semibold text-on-surface tracking-tight">Pesanan Mendesak & Prioritas Hari Ini</h2>
            <p className="text-xs text-on-surface-variant">Layanan Express kilat dan order mendekati batas deadline pengambilan</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-error-container/40 text-error flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
            5 Order Perlu Perhatian
          </span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="text-on-surface-variant uppercase tracking-wider text-[11px] bg-surface-container-low/50">
              <th className="py-3 px-4 rounded-l-xl">No. Nota</th>
              <th className="py-3 px-4">Nama Pelanggan</th>
              <th className="py-3 px-4">Jenis Layanan</th>
              <th className="py-3 px-4">Berat / Qty</th>
              <th className="py-3 px-4">Status Alur</th>
              <th className="py-3 px-4">Deadline</th>
              <th className="py-3 px-4 text-right rounded-r-xl">Aksi Cepat</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/20">
            {orders.map((order) => (
              <tr key={order.nota} className="hover:bg-surface-container-high/40 transition-colors">
                <td className="py-3.5 px-4 font-mono font-bold text-primary">{order.nota}</td>
                <td className="py-3.5 px-4">
                  <div className="font-semibold text-on-surface">{order.name}</div>
                  <div className="text-[11px] text-on-surface-variant">
                    {order.phone} • {order.tier}
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <span
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                      serviceColorMap[order.service] || 'bg-surface-container-high text-on-surface-variant'
                    }`}
                  >
                    {order.service}
                  </span>
                  <span className="block text-on-surface mt-0.5">{order.serviceType}</span>
                </td>
                <td className="py-3.5 px-4 text-on-surface font-medium">{order.weight}</td>
                <td className="py-3.5 px-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold text-[11px] ${
                      statusColorMap[order.statusColor] || 'bg-surface-container-high text-on-surface-variant'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                    {order.status}
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <span className={`font-bold ${order.deadlineColor === 'error' ? 'text-error' : 'text-on-surface'}`}>
                    {order.deadline}
                  </span>
                  <span className="block text-[10px] text-on-surface-variant">{order.pickup}</span>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      className="p-1.5 rounded-lg bg-surface-container-high hover:bg-primary-container text-on-surface hover:text-primary transition-colors"
                      title="Kirim WhatsApp"
                    >
                      <span className="material-symbols-outlined text-[16px]">chat</span>
                    </button>
                    <button className="h-7 px-2.5 rounded-lg bg-primary text-on-primary font-semibold text-[11px] flex items-center gap-1 hover:bg-primary-fixed-dim transition-all" title="Perbarui Status">
                      <span className="material-symbols-outlined text-[14px]">check</span>
                      <span>Selesai</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
