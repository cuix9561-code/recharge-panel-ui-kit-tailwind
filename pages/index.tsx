import React from 'react';
import { RechargeCard, defaultRechargeOptions } from '../components/RechargeCard';

export default function HomePage() {
  const handleSubmit = (option: typeof defaultRechargeOptions[0]) => {
    // In a real app, this would open a payment modal or redirect to checkout
    alert(`Redirecting to payment for: ${option.label} (¥${option.amount})`);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-sm font-bold text-white">
              R
            </div>
            <span className="text-white font-semibold">RechargeUI</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <a href="#" className="hover:text-emerald-400 transition-colors">Docs</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-widest bg-emerald-600/20 text-emerald-400 rounded-full mb-4">
            React + Tailwind Component
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Recharge Panel <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">UI Kit</span>
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            A Lemon Squeezy-inspired recharge card component for React and Next.js apps.
            Perfect for novel sites, membership platforms, and digital content stores.
          </p>
        </div>
      </section>

      {/* Demo Area */}
      <section className="relative z-10 flex-1 pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Component Demo */}
            <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-6 sm:p-8">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Live Preview</h3>
              <RechargeCard
                options={defaultRechargeOptions}
                onSubmit={handleSubmit}
              />
            </div>

            {/* Code Preview */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Usage</h3>
                <div className="bg-slate-900 rounded-xl border border-slate-800 p-4 overflow-x-auto">
                  <pre className="text-xs text-slate-300 font-mono leading-relaxed">
{`import { RechargeCard, defaultRechargeOptions }
  from 'recharge-panel-ui-kit-tailwind';

function CheckoutPage() {
  return (
    <RechargeCard
      options={defaultRechargeOptions}
      onSubmit={(opt) => {
        // Handle payment
      }}
    />
  );
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Features</h3>
                <ul className="space-y-2">
                  {[
                    '3 predefined pricing tiers (¥10 / ¥30 / ¥100)',
                    'Visual bonus progress bar',
                    '"Best Value" badge highlighting',
                    'Payment method icons (Alipay, WeChat, Card)',
                    'Loading state with spinner animation',
                    'Fully responsive & accessible',
                    'Customizable via props',
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                      <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800 py-8 text-center text-sm text-slate-600">
        <p>RechargePanel UI Kit — MIT Licensed. Built with React + Tailwind CSS.</p>
      </footer>
    </div>
  );
}
