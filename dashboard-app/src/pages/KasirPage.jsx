import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import CustomerSelection from '../components/kasir/CustomerSelection'
import ServiceCatalog from '../components/kasir/ServiceCatalog'
import OrderCustomization from '../components/kasir/OrderCustomization'
import CartBilling from '../components/kasir/CartBilling'
import QuickMetrics from '../components/kasir/QuickMetrics'
import AddServiceForm from '../components/AddServiceForm'

export default function KasirPage() {
  const [services, setServices] = useState([])
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAddService, setShowAddService] = useState(false)

  useEffect(() => {
    loadKasirData()
  }, [])

  const loadKasirData = async () => {
    setLoading(true)
    try {
      const [servicesRes, customersRes] = await Promise.all([
        supabase.from('services').select('*').eq('is_active', true).order('category'),
        supabase.from('customers').select('*').order('name'),
      ])
      if (servicesRes.data) setServices(servicesRes.data)
      if (customersRes.data) setCustomers(customersRes.data)
    } catch (err) {
      console.error('Failed to load kasir data:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleCustomerAdded = (newCustomerOrList) => {
    if (Array.isArray(newCustomerOrList)) {
      setCustomers(newCustomerOrList)
    } else {
      setCustomers((prev) => [newCustomerOrList, ...prev])
    }
  }

  if (loading) {
    return (
      <main className="w-full pt-16 bg-background px-8 min-h-screen flex items-center justify-center">
        <div className="text-xs text-on-surface-variant">Memuat data kasir...</div>
      </main>
    )
  }

  return (
    <main className="w-full pt-16 bg-background px-8 min-h-screen">
      <div className="flex flex-col w-full pb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container/60 backdrop-blur-md">
              <span className="material-symbols-outlined text-primary text-[18px]">terminal</span>
              <span className="text-xs font-semibold text-on-surface">Kasir POS POS-01</span>
              <span className="text-[10px] text-on-surface-variant">• Senopati Central</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container/40">
              <span className="material-symbols-outlined text-secondary text-[16px]">scale</span>
              <span className="text-xs text-on-surface-variant font-label">
                Timbangan Bluetooth: <span className="text-primary font-medium">Terhubung (4.50 kg)</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-xl bg-surface-container/70 hover:bg-surface-container-high text-on-surface text-xs font-medium flex items-center gap-1.5 transition-all">
              <span className="material-symbols-outlined text-[16px] text-tertiary">history</span>
              <span>Riwayat Transaksi Hari Ini</span>
            </button>
            <button className="px-3 py-1.5 rounded-xl bg-surface-container/70 hover:bg-surface-container-high text-on-surface text-xs font-medium flex items-center gap-1.5 transition-all">
              <span className="material-symbols-outlined text-[16px] text-primary">qr_code_scanner</span>
              <span>Scan Barcode Member</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          <div className="xl:col-span-7 flex flex-col gap-5">
            <CustomerSelection customers={customers} onCustomerAdded={handleCustomerAdded} />
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-on-surface">Katalog Layanan</h2>
              <button
                onClick={() => setShowAddService(!showAddService)}
                className="px-3 py-1.5 rounded-xl bg-primary text-on-primary text-xs font-semibold flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">add</span>
                {showAddService ? 'Tutup Form' : 'Tambah Layanan'}
              </button>
            </div>
            {showAddService && <AddServiceForm onSuccess={() => { setShowAddService(false); loadKasirData() }} />}
            <ServiceCatalog services={services} />
            <OrderCustomization />
          </div>
          <div className="xl:col-span-5 flex flex-col gap-5">
            <CartBilling services={services} customers={customers} />
            <QuickMetrics />
          </div>
        </div>
      </div>
    </main>
  )
}
