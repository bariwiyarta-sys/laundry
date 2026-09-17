import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function DashboardPage() {
  const [stats, setStats] = useState({
    todayRevenue: 0,
    activeOrders: 0,
    readyOrders: 0,
    criticalStock: 0,
    activeMachines: 0,
  })
  const [recentOrders, setRecentOrders] = useState([])
  const [machines, setMachines] = useState([])
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    setLoading(true)
    try {
      const [ordersRes, machinesRes, servicesRes] = await Promise.all([
        supabase
          .from('orders')
          .select('*, customer:customers(*), items:order_items(*)')
          .order('created_at', { ascending: false }),
        supabase.from('machines').select('*').order('updated_at', { ascending: false }),
        supabase.from('services').select('*').eq('is_active', true).order('category'),
      ])

      if (ordersRes.data) {
        setRecentOrders(ordersRes.data.slice(0, 10))
        const today = new Date().toISOString().split('T')[0]
        const todayOrders = ordersRes.data.filter((o) => o.created_at?.startsWith(today))
        const todayRevenue = todayOrders.reduce((sum, o) => sum + Number(o.total || 0), 0)
        setStats((s) => ({
          ...s,
          todayRevenue,
          activeOrders: ordersRes.data.filter((o) => o.status === 'pending' || o.status === 'processing').length,
          readyOrders: ordersRes.data.filter((o) => o.status === 'ready').length,
        }))
      }
      if (machinesRes.data) {
        setMachines(machinesRes.data)
        setStats((s) => ({
          ...s,
          activeMachines: machinesRes.data.filter((m) => m.status === 'running').length,
          criticalStock: machinesRes.data.filter((m) => m.status === 'service').length,
        }))
      }
      if (servicesRes.data) {
        setServices(servicesRes.data)
      }
    } catch (err) {
      console.error('Failed to load dashboard data:', err)
    } finally {
      setLoading(false)
    }
  }

  const formatCurrency = (value) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(value || 0)

  const formatDate = (dateStr) => {
    if (!dateStr) return '-'
    const d = new Date(dateStr)
    return d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
  }

  if (loading) {
    return (
      <main className="w-full pt-16 bg-background px-8 min-h-screen flex items-center justify-center">
        <div className="text-xs text-on-surface-variant">Memuat data...</div>
      </main>
    )
  }

  return (
    <main className="w-full pt-16 bg-background px-8 min-h-screen">
      <div className="flex flex-col w-full pb-16 space-y-8">
        <div className="rounded-2xl bg-surface-container/60 backdrop-blur-xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/80 backdrop-blur-md text-[11px] font-medium text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                <span>AuraWash Cloud Core • Cabang Senopati HQ</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-on-surface">
                Selamat Datang kembali, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Budi Santoso</span>
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="flex items-center gap-1.5 text-on-surface font-medium">
                  <span className="material-symbols-outlined text-[16px] text-primary">local_laundry_service</span>
                  {stats.activeMachines} Mesin Aktif
                </span>
                <span className="text-outline-variant">•</span>
                <span className="text-secondary-fixed">{stats.activeOrders} Berjalan</span>
                <span className="text-outline-variant">•</span>
                <span className="text-error font-medium">{stats.criticalStock} Maintenance</span>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex p-1 rounded-xl bg-surface-container-lowest/80 backdrop-blur-lg">
                <button className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-primary text-on-primary transition-all shadow-sm">Hari ini</button>
                <button className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50 transition-all">7 Hari</button>
                <button className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50 transition-all">Bulan ini</button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          <div className="rounded-2xl bg-surface-container/60 backdrop-blur-xl p-5 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-on-surface-variant">Omzet Hari Ini</span>
              <div className="w-9 h-9 rounded-xl bg-primary-container/40 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px]">payments</span>
              </div>
            </div>
            <div className="text-2xl font-bold tracking-tight text-on-surface">{formatCurrency(stats.todayRevenue)}</div>
          </div>
          <div className="rounded-2xl bg-surface-container/60 backdrop-blur-xl p-5 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-on-surface-variant">Total Cucian Aktif</span>
              <div className="w-9 h-9 rounded-xl bg-secondary-container/50 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[20px]">dry_cleaning</span>
              </div>
            </div>
            <div className="text-2xl font-bold tracking-tight text-on-surface">{stats.activeOrders} Order</div>
          </div>
          <div className="rounded-2xl bg-surface-container/60 backdrop-blur-xl p-5 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-on-surface-variant">Siap Ambil / Antar</span>
              <div className="w-9 h-9 rounded-xl bg-tertiary-container/50 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
              </div>
            </div>
            <div className="text-2xl font-bold tracking-tight text-on-surface">{stats.readyOrders} Pesanan</div>
          </div>
          <div className="rounded-2xl bg-surface-container/60 backdrop-blur-xl p-5 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-error">Stok Kritis</span>
              <div className="w-9 h-9 rounded-xl bg-error-container/40 flex items-center justify-center text-error">
                <span className="material-symbols-outlined text-[20px]">warning</span>
              </div>
            </div>
            <div className="text-2xl font-bold tracking-tight text-error">{stats.criticalStock} Peringatan</div>
          </div>
        </div>

        <div className="rounded-2xl bg-surface-container/60 backdrop-blur-xl p-6 shadow-xl">
          <h2 className="text-base font-semibold text-on-surface mb-4">Pesanan Terbaru</h2>
          {recentOrders.length === 0 ? (
            <div className="text-xs text-on-surface-variant">Belum ada pesanan.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="text-on-surface-variant uppercase tracking-wider text-[11px] bg-surface-container-low/50">
                    <th className="py-3 px-4 rounded-l-xl">No. Nota</th>
                    <th className="py-3 px-4">Pelanggan</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right rounded-r-xl">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-surface-container-high/40 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-primary">{order.invoice_number}</td>
                      <td className="py-3 px-4 text-on-surface">{order.customer?.name || 'Umum'}</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-surface-container-high text-on-surface-variant">
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-semibold text-on-surface">{formatCurrency(order.total)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="rounded-2xl bg-surface-container/60 backdrop-blur-xl p-6 shadow-xl">
          <h2 className="text-base font-semibold text-on-surface mb-4">Status Mesin</h2>
          {machines.length === 0 ? (
            <div className="text-xs text-on-surface-variant">Belum ada data mesin.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {machines.map((m) => (
                <div key={m.id} className="p-4 rounded-xl bg-surface-container-low/80">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold tracking-wider text-primary uppercase">{m.name}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${m.status === 'running' ? 'bg-primary/20 text-primary' : m.status === 'standby' ? 'bg-secondary-container text-on-secondary-container' : 'bg-error-container/60 text-error'}`}>
                      {m.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-xs text-on-surface-variant">{m.model || '-'}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
