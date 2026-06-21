'use client';

import React from 'react';

// ─── Types ────────────────────────────────────────────────

interface PaymentStatusModalProps {
  open: boolean;
  onClose: () => void;
  status: 'success' | 'failure';
  orderId: string;
  amount?: number;
}

// ─── Status Icons ─────────────────────────────────────────

function SuccessIcon() {
  return (
    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
      <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2.5 2.5L16 9" />
      </svg>
    </div>
  );
}

function FailureIcon() {
  return (
    <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
      <svg className="w-8 h-8 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M15 9l-6 6M9 9l6 6" />
      </svg>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────

export function PaymentStatusModal({
  open,
  onClose,
  status,
  orderId,
  amount,
}: PaymentStatusModalProps) {
  const isSuccess = status === 'success';

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        transition-all duration-300
        ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`
          relative bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl
          w-full max-w-sm mx-4 p-8 text-center
          transition-all duration-300 delay-75
          ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
      >
        {/* Icon */}
        <div className="mb-5 transition-all duration-500 delay-150" style={{ opacity: open ? 1 : 0, transform: open ? 'translateY(0)' : 'translateY(-8px)' }}>
          {isSuccess ? <SuccessIcon /> : <FailureIcon />}
        </div>

        {/* Title */}
        <h3
          className={`text-xl font-bold transition-all duration-500 delay-300 ${isSuccess ? 'text-emerald-400' : 'text-red-400'}`}
          style={{ opacity: open ? 1 : 0, transform: open ? 'translateY(0)' : 'translateY(-6px)' }}
        >
          {isSuccess ? 'Payment Successful!' : 'Payment Failed'}
        </h3>

        {/* Order ID */}
        <p
          className="text-sm text-slate-400 mt-3 transition-all duration-500 delay-500"
          style={{ opacity: open ? 1 : 0, transform: open ? 'translateY(0)' : 'translateY(-4px)' }}
        >
          Order ID: <span className="text-slate-300 font-mono">{orderId}</span>
        </p>

        {/* Amount (success only) */}
        {isSuccess && amount !== undefined && (
          <p
            className="text-2xl font-bold text-white mt-2 transition-all duration-500 delay-500"
            style={{ opacity: open ? 1 : 0, transform: open ? 'translateY(0)' : 'translateY(-4px)' }}
          >
            ${amount.toFixed(2)}
          </p>
        )}

        {/* Back Button */}
        <button
          onClick={onClose}
          className="
            w-full mt-6 py-3 rounded-xl text-sm font-semibold
            bg-gradient-to-r from-emerald-600 to-emerald-500 text-white
            hover:from-emerald-500 hover:to-emerald-400
            shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/40
            active:scale-[0.98] transition-all duration-200
          "
          style={{ opacity: open ? 1 : 0, transform: open ? 'translateY(0)' : 'translateY(4px)', transitionDelay: '700ms', transitionDuration: '400ms' }}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
