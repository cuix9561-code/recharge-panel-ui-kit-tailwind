'use client'

import { useState } from 'react'

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface PaymentFAQAccordionProps {
  items: FAQItem[]
  title?: string
  allowMultiple?: boolean
}

export function PaymentFAQAccordion({
  items,
  title = 'Frequently Asked Questions',
  allowMultiple = false,
}: PaymentFAQAccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        if (!allowMultiple) {
          next.clear()
        }
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      {items.map((item, index) => {
        const isOpen = openIds.has(item.id)
        return (
          <div
            key={item.id}
            className={index < items.length - 1 ? 'border-b border-slate-800' : ''}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between py-4 text-left active:scale-[0.98] transition-all"
            >
              <span className="text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors">
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 text-slate-500 transition-transform duration-300 ease-out ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: isOpen ? '200px' : '0' }}
            >
              <p className="text-sm text-slate-400 leading-relaxed pb-4">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const defaultFAQItems: FAQItem[] = [
  {
    id: '1',
    question: 'How long does it take for credits to arrive?',
    answer:
      'Credits are delivered instantly upon successful payment. If you do not see your credits within 5 minutes, please contact support.',
  },
  {
    id: '2',
    question: 'What payment methods do you support?',
    answer:
      'We support Alipay, WeChat Pay, and major credit cards (Visa, MasterCard). All transactions are processed securely.',
  },
  {
    id: '3',
    question: 'What if my payment failed but I was charged?',
    answer:
      'If you were charged but the credits were not delivered, the amount will be automatically refunded within 24 hours. Please contact our support team with your order ID for expedited assistance.',
  },
  {
    id: '4',
    question: 'Can I get a refund?',
    answer:
      'Credits are non-refundable as they are digital goods. However, if you experience a technical issue that prevents you from using the service, we offer a 7-day satisfaction guarantee.',
  },
  {
    id: '5',
    question: 'Is there a minimum recharge amount?',
    answer:
      'The minimum recharge amount is ¥10. You can purchase larger packages for better bonus rates.',
  },
]

export default function PaymentFAQAccordionDefault() {
  return <PaymentFAQAccordion items={defaultFAQItems} />
}
