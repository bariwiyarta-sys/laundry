import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function CartBilling({ services = [], customers = [] }) {
  const [cart, setCart] = useState([
    { serviceId: null, name: 'Kiloan Cuci Kering Setrika', qty: 4.5, price: 9000, total: 40500, fragrance: 'Ocean Fresh', tags: ['Noda Kerah', 'Pisahkan Luntur'] },
    { serviceId: null, name: 'Cuci Bedcover King Size', qty: 1, price: 35000, total: 35000, fragrance: null, tags: [] },
  ])
  const [delivery, setDelivery] = useState('delivery')
  const [usePoints, setUsePoints] = useState(true)
  const [paymentMethod, setPaymentMethod] = useState('qris')
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  const subtotal = cart.reduce((sum, item) => sum + item.total, 0)
  const deliveryFee = delivery === 'delivery' ? 10000 : 0
  const pointsDiscount = usePoints ? 20000 : 0
  const total = Math.max(0, subtotal + deliveryFee - pointsDiscount)

  const updateQty = (index, delta) => {
    setCart((prev) => {
      const next = [...prev]
      const item = { ...next[index] }
      const newQty = Math.max(0.1, Number((item.qty + delta).toFixed(1)))
      item.qty = newQty
      item.total = Math.round(newQty * item.price)
      next[index] = item
      return next
    })
  }

  const removeItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index))
  }

  const generateInvoiceNumber = () => {
    const now = new Date()
    const y = now.getFullYear()
    const m = String(now.getMonth() + 1).padStart(2, '0')
    const d = String(now.getDate()).padStart(2, '0')
    const rand = String(Math.floor(Math.random() * 9000) + 1000)
    return `#AW-${y}${m}${d}-${rand}`
  }

  const handleCheckout = async () => {
    setSaving(true)
    setError(null)
    setSuccess(null)
    try {
      const invoiceNumber = generateInvoiceNumber()
      const customerId = customers[0]?.id || null

      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert([
          {
            invoice_number: invoiceNumber,
            customer_id: customerId,
            status: 'pending',
            priority: 'normal',
            subtotal,
            delivery_fee: deliveryFee,
            discount: pointsDiscount,
            total,
            payment_method: paymentMethod,
            payment_status: 'paid',
            estimated_completion: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
          },
        ])
        .select()
        .single()

      if (orderError) throw orderError

      const orderItems = cart.map((item) => ({
        order_id: order.id,
        service_id: item.serviceId,
        quantity: item.qty,
        unit_price: item.price,
        subtotal: item.total,
        fragrance: item.fragrance,
        special_instructions: item.tags || [],
      }))

      const { error: itemsError } = await supabase.from('order_items').insert(orderItems)
      if (itemsError) throw itemsError

      const { error: paymentError } = await supabase.from('payments').insert([
        {
          order_id: order.id,
          amount: total,
          method: paymentMethod,
          status: 'success',
        },
      ])
      if (paymentError) throw paymentError

      setSuccess(`Pesanan ${invoiceNumber} berhasil disimpan.`)
      setCart([])
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

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
      {error && <div className="mb-3 p-2.5 rounded-xl bg-error-container/40 text-xs text-error">{error}</div>}
      {success && <div className="mb-3 p-2.5 rounded-xl bg-primary-container/40 text-xs text-primary">{success}</div>}
      <div className="flex flex-col gap-3 max-h-64 overflow-y-auto pr-1">
        {cart.map((item, idx) => (
          <div key={idx} className="p-3 rounded-xl bg-surface-container/50 flex items-start justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-on-surface">{item.name}</span>
              <span className="text-[11px] text-on-surface-variant mt-0.5">
                {item.qty} {item.qty >= 2 && item.qty % 1 === 0 ? '' : ''} × Rp {item.price.toLocaleString('id-ID')}
                {item.fragrance ? ` • Aroma: ${item.fragrance}` : ''}
              </span>
              {item.tags?.length > 0 && (
                <div className="flex items-center gap-1.5 mt-1">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-surface-container-highest text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs font-bold text-on-surface font-headline">Rp {item.total.toLocaleString('id-ID')}</span>
              <button className="text-[11px] text-on-surface-variant hover:text-error mt-1 flex items-center gap-0.5" onClick={() => removeItem(idx)}>
                <span className="material-symbols-outlined text-[14px]">delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4">
        <label className="text-xs font-medium text-on-surface-variant mb-2 block">Metode Penyerahan Laundry</label>
        <div className="grid grid-cols-2 gap-2">
          <label className="cursor-pointer">
            <input
              className="sr-only peer"
              name="pickup_mode"
              type="radio"
              checked={delivery === 'pickup'}
              onChange={() => setDelivery('pickup')}
            />
            <div className="p-2.5 rounded-xl bg-surface-container/40 peer-checked:bg-primary-container peer-checked:text-on-primary-container text-on-surface-variant hover:text-on-surface text-xs font-medium flex items-center justify-center gap-2 transition-all">
              <span className="material-symbols-outlined text-[16px]">store</span>
              <span>Ambil di Outlet</span>
            </div>
          </label>
          <label className="cursor-pointer">
            <input
              className="sr-only peer"
              name="pickup_mode"
              type="radio"
              checked={delivery === 'delivery'}
              onChange={() => setDelivery('delivery')}
            />
            <div className="p-2.5 rounded-xl bg-surface-container/40 peer-checked:bg-primary-container peer-checked:text-on-primary-container text-on-surface-variant hover:text-on-surface text-xs font-medium flex items-center justify-center gap-2 transition-all">
              <span className="material-symbols-outlined text-[16px]">local_shipping</span>
              <span>Antar ke Rumah (+10rb)</span>
            </div>
          </label>
        </div>
      </div>
      <div className="mt-3 p-3 rounded-xl bg-surface-container-lowest/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input
            checked={usePoints}
            onChange={(e) => setUsePoints(e.target.checked)}
            className="w-4 h-4 rounded text-primary bg-surface-container focus:ring-0 focus:ring-offset-0 cursor-pointer"
            id="pointRedeem"
            type="checkbox"
          />
          <label className="text-xs text-on-surface cursor-pointer select-none" htmlFor="pointRedeem">
            Tukar <strong className="text-tertiary">200 Poin</strong> Gold Reward
          </label>
        </div>
        <span className="text-xs font-semibold text-tertiary">-Rp 20.000</span>
      </div>
      <div className="mt-4 pt-3 flex flex-col gap-1.5 text-xs text-on-surface-variant">
        <div className="flex items-center justify-between">
          <span>Subtotal Layanan ({cart.length} Item)</span>
          <span className="font-medium text-on-surface">Rp {subtotal.toLocaleString('id-ID')}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Biaya Kirim / Kurir Ekspedisi</span>
          <span className="font-medium text-on-surface">Rp {deliveryFee.toLocaleString('id-ID')}</span>
        </div>
        <div className="flex items-center justify-between text-tertiary">
          <span>Diskon Poin Loyalitas</span>
          <span>-Rp {pointsDiscount.toLocaleString('id-ID')}</span>
        </div>
        <div className="mt-2 pt-2 flex items-baseline justify-between">
          <span className="text-sm font-semibold text-on-surface">Total Akhir Pembayaran</span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-primary font-headline tracking-tight">Rp {total.toLocaleString('id-ID')}</span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <label className="text-xs font-medium text-on-surface-variant mb-2 block">Pilih Pembayaran</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { id: 'qris', label: 'Tunai / Cash', icon: 'payments' },
            { id: 'transfer', label: 'Transfer Bank', icon: 'account_balance' },
            { id: 'cod', label: 'Bayar Saat Ambil', icon: 'pending_actions' },
          ].map((method) => (
            <button
              key={method.id}
              onClick={() => setPaymentMethod(method.id)}
              className={`p-2 rounded-xl text-xs font-medium flex flex-col items-center gap-1 transition-all ${
                paymentMethod === method.id
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-surface-container/60 hover:bg-surface-container-high text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{method.icon}</span>
              <span>{method.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-2.5">
        <button
          onClick={handleCheckout}
          disabled={saving || cart.length === 0}
          className="w-full h-12 rounded-xl bg-primary text-on-primary font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(125,211,252,0.35)] hover:bg-primary-fixed-dim transition-all active:scale-[0.99] disabled:opacity-60"
        >
          <span className="material-symbols-outlined text-[20px]">print</span>
          <span>{saving ? 'Menyimpan...' : 'Bayar & Cetak Struk Thermal (Enter)'}</span>
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
