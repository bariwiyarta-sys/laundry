export default function RevenueChart() {
  return (
    <div className="lg:col-span-2 rounded-2xl bg-surface-container/60 backdrop-blur-xl p-6 shadow-xl flex flex-col justify-between">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">stacked_bar_chart</span>
              <h2 className="text-base font-semibold text-on-surface">Tren Omzet & Volume Laundry</h2>
            </div>
            <p className="text-xs text-on-surface-variant mt-0.5">Statistik transaksi per hari 7 hari terakhir</p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-primary"></span>
              <span className="text-on-surface-variant">Kiloan</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-secondary"></span>
              <span className="text-on-surface-variant">Satuan</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-tertiary"></span>
              <span className="text-on-surface-variant">Dry Clean</span>
            </span>
          </div>
        </div>
        <div className="w-full h-64 pt-4">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 700 240">
            <defs>
              <linearGradient id="gradientLine" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.35"></stop>
                <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.0"></stop>
              </linearGradient>
            </defs>
            <line stroke="#2a3a48" strokeDasharray="4" strokeWidth="0.8" x1="40" x2="680" y1="40" y2="40"></line>
            <line stroke="#2a3a48" strokeDasharray="4" strokeWidth="0.8" x1="40" x2="680" y1="90" y2="90"></line>
            <line stroke="#2a3a48" strokeDasharray="4" strokeWidth="0.8" x1="40" x2="680" y1="140" y2="140"></line>
            <line stroke="#2a3a48" strokeWidth="1" x1="40" x2="680" y1="190" y2="190"></line>
            <text fill="#a0b4c4" fontFamily="Inter" fontSize="10" textAnchor="end" x="30" y="44">6M</text>
            <text fill="#a0b4c4" fontFamily="Inter" fontSize="10" textAnchor="end" x="30" y="94">4M</text>
            <text fill="#a0b4c4" fontFamily="Inter" fontSize="10" textAnchor="end" x="30" y="144">2M</text>
            <text fill="#a0b4c4" fontFamily="Inter" fontSize="10" textAnchor="end" x="30" y="194">0</text>
            <rect fill="#7dd3fc" height="80" opacity="0.9" rx="3" width="10" x="70" y="110"></rect>
            <rect fill="#88b4cc" height="45" opacity="0.8" rx="3" width="10" x="83" y="145"></rect>
            <rect fill="#c8a0f0" height="25" opacity="0.8" rx="3" width="10" x="96" y="165"></rect>
            <text fill="#a0b4c4" fontSize="11" textAnchor="middle" x="88" y="212">Sen</text>
            <rect fill="#7dd3fc" height="95" opacity="0.9" rx="3" width="10" x="160" y="95"></rect>
            <rect fill="#88b4cc" height="60" opacity="0.8" rx="3" width="10" x="173" y="130"></rect>
            <rect fill="#c8a0f0" height="35" opacity="0.8" rx="3" width="10" x="186" y="155"></rect>
            <text fill="#a0b4c4" fontSize="11" textAnchor="middle" x="178" y="212">Sel</text>
            <rect fill="#7dd3fc" height="110" opacity="0.9" rx="3" width="10" x="250" y="80"></rect>
            <rect fill="#88b4cc" height="70" opacity="0.8" rx="3" width="10" x="263" y="120"></rect>
            <rect fill="#c8a0f0" height="42" opacity="0.8" rx="3" width="10" x="276" y="148"></rect>
            <text fill="#a0b4c4" fontSize="11" textAnchor="middle" x="268" y="212">Rab</text>
            <rect fill="#7dd3fc" height="85" opacity="0.9" rx="3" width="10" x="340" y="105"></rect>
            <rect fill="#88b4cc" height="52" opacity="0.8" rx="3" width="10" x="353" y="138"></rect>
            <rect fill="#c8a0f0" height="30" opacity="0.8" rx="3" width="10" x="366" y="160"></rect>
            <text fill="#a0b4c4" fontSize="11" textAnchor="middle" x="358" y="212">Kam</text>
            <rect fill="#7dd3fc" height="125" opacity="0.9" rx="3" width="10" x="430" y="65"></rect>
            <rect fill="#88b4cc" height="80" opacity="0.8" rx="3" width="10" x="443" y="110"></rect>
            <rect fill="#c8a0f0" height="50" opacity="0.8" rx="3" width="10" x="456" y="140"></rect>
            <text fill="#a0b4c4" fontSize="11" textAnchor="middle" x="448" y="212">Jum</text>
            <rect fill="#7dd3fc" height="145" opacity="0.9" rx="3" width="10" x="520" y="45"></rect>
            <rect fill="#88b4cc" height="100" opacity="0.8" rx="3" width="10" x="533" y="90"></rect>
            <rect fill="#c8a0f0" height="65" opacity="0.8" rx="3" width="10" x="546" y="125"></rect>
            <text fill="#a0b4c4" fontSize="11" textAnchor="middle" x="538" y="212">Sab</text>
            <rect fill="#7dd3fc" height="135" opacity="1" rx="3" width="10" x="610" y="55"></rect>
            <rect fill="#88b4cc" height="92" opacity="0.9" rx="3" width="10" x="623" y="98"></rect>
            <rect fill="#c8a0f0" height="58" opacity="0.9" rx="3" width="10" x="636" y="132"></rect>
            <text fill="#7dd3fc" fontSize="11" fontWeight="700" textAnchor="middle" x="628" y="212">Min (Today)</text>
            <path d="M 88 120 Q 178 100 268 85 T 358 115 T 448 70 T 538 48 T 628 58" fill="none" stroke="#7dd3fc" strokeWidth="2.5"></path>
            <circle cx="628" cy="58" fill="#7dd3fc" r="4.5" stroke="#0a0e1a" strokeWidth="2"></circle>
          </svg>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-outline-variant/30 grid grid-cols-3 gap-4 text-center">
        <div>
          <span className="text-[11px] text-on-surface-variant block">Rata-rata Harian</span>
          <span className="text-sm font-semibold text-on-surface">Rp 4.230.000</span>
        </div>
        <div>
          <span className="text-[11px] text-on-surface-variant block">Volume Cucian Mingguan</span>
          <span className="text-sm font-semibold text-on-surface">1.048 Kg</span>
        </div>
        <div>
          <span className="text-[11px] text-on-surface-variant block">Efisiensi Siklus</span>
          <span className="text-sm font-semibold text-primary">96.8%</span>
        </div>
      </div>
    </div>
  )
}
