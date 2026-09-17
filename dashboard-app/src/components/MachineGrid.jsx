export default function MachineGrid() {
  const machines = [
    {
      id: 'Washer #01',
      model: 'LG Titan Pro 15kg',
      status: 'RUNNING',
      statusColor: 'primary',
      cycle: 'Normal Wash (40°C)',
      remaining: '18 Menit',
      order: '#AW-8924',
      weight: '12.8 Kg',
      progress: 62,
    },
    {
      id: 'Washer #02',
      model: 'LG Titan Pro 15kg',
      status: 'RUNNING',
      statusColor: 'primary',
      cycle: 'Pembilasan Akhir',
      remaining: '14 Menit',
      order: '#AW-8921',
      weight: 'Express (Jessica)',
      progress: 78,
    },
    {
      id: 'Washer #03',
      model: 'LG Titan Pro 15kg',
      status: 'RUNNING',
      statusColor: 'secondary',
      cycle: 'Heavy Bedcover (60°C)',
      remaining: '32 Menit',
      order: '#AW-8914',
      weight: 'Resto Nusantara',
      progress: 38,
    },
    {
      id: 'Washer #04',
      model: 'LG Titan Pro 15kg',
      status: 'STANDBY',
      statusColor: 'on-surface-variant',
      cycle: 'Dibersihkan • Kosong',
      remaining: null,
      order: null,
      weight: '15 Kg Siap',
      progress: 0,
      isStandby: true,
    },
    {
      id: 'Dryer #01',
      model: 'Speed Queen 16kg Gas',
      status: 'RUNNING',
      statusColor: 'primary',
      cycle: 'High Heat (72°C)',
      remaining: '09 Menit',
      order: '#AW-8902',
      weight: 'Kiloan 14 Kg',
      progress: 85,
    },
    {
      id: 'Dryer #02',
      model: 'Speed Queen 16kg Gas',
      status: 'STANDBY',
      statusColor: 'on-surface-variant',
      cycle: 'Bersih (Check OK)',
      remaining: null,
      order: null,
      weight: '16 Kg Siap',
      progress: 0,
      isStandby: true,
    },
    {
      id: 'Dryer #03',
      model: 'Speed Queen 16kg Gas',
      status: 'RUNNING',
      statusColor: 'primary',
      cycle: 'Delicate Low (50°C)',
      remaining: '24 Menit',
      order: '#AW-8919',
      weight: 'Jas Dokter (Dr. Hendra)',
      progress: 45,
    },
    {
      id: 'Dryer #04',
      model: 'Speed Queen 16kg Gas',
      status: 'SERVICE',
      statusColor: 'error',
      cycle: 'Sensor Igniter Error',
      remaining: null,
      order: '#MT-204',
      weight: 'OFFLINE',
      progress: 100,
      isService: true,
    },
  ]

  const statusBadge = (m) => {
    if (m.isService) {
      return 'bg-error-container/60 text-error'
    }
    if (m.statusColor === 'primary') {
      return 'bg-primary/20 text-primary'
    }
    if (m.statusColor === 'secondary') {
      return 'bg-secondary/20 text-secondary'
    }
    return 'bg-secondary-container text-on-secondary-container'
  }

  const progressColor = (m) => {
    if (m.isService) return 'bg-error'
    if (m.statusColor === 'primary') return 'bg-primary'
    if (m.statusColor === 'secondary') return 'bg-secondary'
    return 'bg-secondary'
  }

  return (
    <div className="rounded-2xl bg-surface-container/60 backdrop-blur-xl p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-primary text-[22px]">sensors</span>
          <div>
            <h2 className="text-base font-semibold text-on-surface tracking-tight">Status Mesin Cuci & Pengering (IoT Telemetri)</h2>
            <p className="text-xs text-on-surface-variant">Live telemetry siklus putaran, suhu tabung, dan estimasi waktu sisa mesin</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1.5 text-on-surface">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            <span>Berjalan (5)</span>
          </span>
          <span className="flex items-center gap-1.5 text-on-surface">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
            <span>Standby / Siap (2)</span>
          </span>
          <span className="flex items-center gap-1.5 text-on-surface">
            <span className="w-2.5 h-2.5 rounded-full bg-error"></span>
            <span>Maintenance (1)</span>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {machines.map((m, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-surface-container-low/80 backdrop-blur-md relative overflow-hidden transition-all hover:bg-surface-container-high/60 group"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <span className={`text-[10px] font-bold tracking-wider uppercase ${m.statusColor === 'error' ? 'text-error' : m.statusColor === 'secondary' ? 'text-secondary' : 'text-primary'}`}>
                  {m.id}
                </span>
                <h3 className="text-xs font-semibold text-on-surface">{m.model}</h3>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${statusBadge(m)}`}>
                {m.status}
              </span>
            </div>
            <div className="my-3 flex items-center justify-between">
              <div className="text-xs">
                <span className="text-on-surface-variant block text-[10px]">
                  {m.isService ? 'Error:' : 'Siklus:'}
                </span>
                <span className={`font-semibold ${m.isService ? 'text-error' : 'text-on-surface'}`}>{m.cycle}</span>
              </div>
              {m.remaining && (
                <div className="text-right">
                  <span className="text-[10px] text-primary block font-medium">Sisa Waktu</span>
                  <span className="text-base font-bold text-on-surface">{m.remaining}</span>
                </div>
              )}
              {m.isService && (
                <div className="text-right">
                  <span className="text-[10px] text-on-surface-variant block font-medium">Target OK</span>
                  <span className="text-xs font-bold text-error">Besok 10:00</span>
                </div>
              )}
            </div>
            <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
              <div className={`${progressColor(m)} h-1.5 rounded-full`} style={{ width: `${m.progress}%` }}></div>
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] text-on-surface-variant">
              <span>{m.isStandby ? `Terakhir: ${idx % 2 === 0 ? '25' : '40'} m lalu` : `Order: ${m.order}`}</span>
              {m.isStandby ? (
                <button className="font-semibold text-primary hover:underline">+ Muat Cucian</button>
              ) : m.isService ? (
                <span className="text-error font-medium">{m.weight}</span>
              ) : (
                <span>{m.weight}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
