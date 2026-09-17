import CustomerSelection from '../components/kasir/CustomerSelection'
import ServiceCatalog from '../components/kasir/ServiceCatalog'
import OrderCustomization from '../components/kasir/OrderCustomization'
import CartBilling from '../components/kasir/CartBilling'
import QuickMetrics from '../components/kasir/QuickMetrics'

export default function KasirPage() {
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
                Timbangan Bluetooth:{' '}
                <span className="text-primary font-medium">Terhubung (4.50 kg)</span>
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
            <CustomerSelection />
            <ServiceCatalog />
            <OrderCustomization />
          </div>
          <div className="xl:col-span-5 flex flex-col gap-5">
            <CartBilling />
            <QuickMetrics />
          </div>
        </div>
      </div>
    </main>
  )
}
