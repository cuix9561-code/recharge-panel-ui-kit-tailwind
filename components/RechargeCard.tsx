'use client';

import React, { useState } from 'react';

// ─── Types ────────────────────────────────────────────────

interface RechargeOption {
  id: string;
  label: string;
  amount: number;
  bonus?: string;
  popular?: boolean;
  description?: string;
}

interface RechargeCardProps {
  title?: string;
  subtitle?: string;
  options: RechargeOption[];
  currency?: string;
  onSubmit?: (option: RechargeOption) => void;
  processing?: boolean;
}

// ─── Payment Method Icons ────────────────────────────────

const PaymentMethods = () => (
  <div className="flex items-center justify-center gap-3 mt-4">
    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/50 rounded-md">
      <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      <span className="text-xs text-slate-400">Alipay</span>
    </div>
    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/50 rounded-md">
      <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      </svg>
      <span className="text-xs text-slate-400">WeChat Pay</span>
    </div>
    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/50 rounded-md">
      <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      <span className="text-xs text-slate-400">Card</span>
    </div>
  </div>
);

// ─── Main Component ──────────────────────────────────────

export function RechargeCard({
  title = 'Top Up Credits',
  subtitle = 'Select a package to continue reading',
  options,
  currency = '¥',
  onSubmit,
  processing = false,
}: RechargeCardProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedOption = options.find((o) => o.id === selectedId);

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/25 mb-4">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-sm text-slate-400 mt-1">{subtitle}</p>
      </div>

      {/* Options Grid */}
      <div className="space-y-3">
        {options.map((option) => {
          const isSelected = selectedId === option.id;
          return (
            <button
              key={option.id}
              onClick={() => setSelectedId(option.id)}
              disabled={processing}
              className={`
                relative w-full p-4 rounded-xl text-left transition-all duration-200
                ${isSelected
                  ? 'bg-gradient-to-r from-emerald-900/60 to-slate-800 border-2 border-emerald-500 shadow-lg shadow-emerald-500/10 scale-[1.02]'
                  : 'bg-slate-800/60 border-2 border-slate-700/50 hover:border-slate-500 hover:bg-slate-800 hover:scale-[1.01] hover:shadow-lg hover:shadow-black/20'
                }
                active:scale-[0.99]
              `}
            >
              {/* Popular Badge */}
              {option.popular && (
                <div className="absolute -top-3 right-4">
                  <span className="px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full shadow-lg">
                    Best Value
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Radio Circle */}
                  <div className={`
                    w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                    ${isSelected ? 'border-emerald-400 bg-emerald-500/20' : 'border-slate-600'}
                  `}>
                    {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />}
                  </div>

                  <div>
                    <span className="text-base font-semibold text-white">{option.label}</span>
                    {option.bonus && (
                      <span className="ml-2 px-1.5 py-0.5 text-[10px] font-bold bg-emerald-600/30 text-emerald-400 rounded-full">
                        +{option.bonus}
                      </span>
                    )}
                  </div>
                </div>

                <span className="text-lg font-bold text-white">
                  {currency}{option.amount}
                </span>
              </div>

              {option.description && isSelected && (
                <p className="mt-2 ml-8 text-xs text-slate-400">{option.description}</p>
              )}

              {option.bonus && (
                <div className="mt-1.5 ml-8">
                  <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-500"
                      style={{ width: isSelected ? '100%' : `${(option.amount / Math.max(...options.map(o => o.amount))) * 60}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-emerald-400/70 mt-0.5">
                    {option.bonus} bonus credits included
                  </p>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Submit Button */}
      <button
        onClick={() => selectedOption && onSubmit?.(selectedOption)}
        disabled={!selectedOption || processing}
        className={`
          w-full mt-6 py-3.5 rounded-xl text-base font-semibold transition-all duration-200
          ${selectedOption && !processing
            ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-500 hover:to-emerald-400 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/40 active:scale-[0.98]'
            : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }
        `}
      >
        {processing ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Processing...
          </span>
        ) : selectedOption ? (
          `Pay ${currency}${selectedOption.amount}`
        ) : (
          'Select a package'
        )}
      </button>

      {/* Payment Methods */}
      <PaymentMethods />

      {/* Footer */}
      <p className="text-center text-[11px] text-slate-600 mt-4">
        🔒 Secure payment • Credits are non-refundable • Instant delivery
      </p>
    </div>
  );
}

// ─── Default Options Preset ─────────────────────────────

export const defaultRechargeOptions: RechargeOption[] = [
  {
    id: 'starter',
    label: 'Starter Pack',
    amount: 10,
    bonus: '100 bonus',
    description: 'Perfect for casual readers — enjoy 100 extra credits to start your journey.',
  },
  {
    id: 'popular',
    label: 'Popular Pack',
    amount: 30,
    bonus: '500 bonus',
    popular: true,
    description: 'Our best-selling option with maximum bonus value. Most readers choose this.',
  },
  {
    id: 'premium',
    label: 'Premium Pack',
    amount: 100,
    bonus: '2000 bonus',
    description: 'For avid readers — unlock premium content and get the highest bonus rate.',
  },
];
