# 💰 Recharge Panel UI Kit — Tailwind

> A premium, Lemon Squeezy-inspired recharge/payment panel component for **React** and **Next.js** applications.  
> Perfect for novel sites, membership platforms, digital content stores, and indie SaaS products.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)
![Next.js](https://img.shields.io/badge/Next.js-14.x-000000?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

---

## ✨ Features

- 🎯 **3 predefined pricing tiers** — ¥10 Starter, ¥30 Popular (best value), ¥100 Premium
- 📊 **Visual bonus progress bar** — shows bonus value at a glance
- 🏆 **"Best Value" badge** — highlights the most attractive option
- 💳 **Payment method indicators** — Alipay, WeChat Pay, Credit Card
- ⏳ **Processing state** — built-in spinner for async payment flows
- 🎨 **Fully customizable** — all text, amounts, and styling configurable via props
- 🌙 **Dark-first design** — modern, premium aesthetic
- ♿ **Accessible** — keyboard navigable, screen-reader friendly
- 📱 **Responsive** — works flawlessly on mobile, tablet, and desktop

## 📸 Preview

```
┌─────────────────────────────────────────┐
│              💰 Top Up Credits            │
│     Select a package to continue reading  │
│                                           │
│  ◉ Starter Pack     +100 bonus    ¥10   │
│  ████████░░░░  100 bonus credits         │
│                                           │
│  ◎ Popular Pack    +500 bonus    ¥30   │
│  ████████████  500 bonus credits         │
│              ┌─────────────┐              │
│              │ Best Value  │              │
│              └─────────────┘              │
│                                           │
│  ◎ Premium Pack   +2000 bonus   ¥100    │
│  ████████████  2000 bonus credits        │
│                                           │
│        ┌─────────────────────┐            │
│        │  Pay ¥30            │            │
│        └─────────────────────┘            │
│    💳 Alipay  💳 WeChat  💳 Card        │
└─────────────────────────────────────────┘
```

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/cuix9561-code/recharge-panel-ui-kit-tailwind.git

# Navigate into the project
cd recharge-panel-ui-kit-tailwind

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

## 🎮 Usage

### Basic Example

```tsx
import { RechargeCard, defaultRechargeOptions } from './components/RechargeCard';

function CheckoutPage() {
  const handlePayment = (option: typeof defaultRechargeOptions[0]) => {
    // Redirect to payment gateway
    console.log(`Processing payment: ¥${option.amount}`);
  };

  return (
    <RechargeCard
      options={defaultRechargeOptions}
      onSubmit={handlePayment}
    />
  );
}
```

### Custom Options

```tsx
import { RechargeCard } from './components/RechargeCard';

const customOptions = [
  {
    id: 'basic',
    label: 'Basic Pack',
    amount: 5,
    bonus: '50 credits',
    description: 'For short reading sessions.',
  },
  {
    id: 'pro',
    label: 'Pro Pack',
    amount: 50,
    bonus: '1000 credits',
    popular: true,
    description: 'Most popular choice among power readers.',
  },
];

<RechargeCard
  title="Choose Your Plan"
  subtitle="Unlock unlimited reading"
  currency="$"
  options={customOptions}
  onSubmit={handlePayment}
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'Top Up Credits'` | Card header title |
| `subtitle` | `string` | `'Select a package...'` | Card subtitle |
| `options` | `RechargeOption[]` | required | Array of pricing tiers |
| `currency` | `string` | `'¥'` | Currency symbol |
| `onSubmit` | `(option) => void` | — | Callback when user confirms payment |
| `processing` | `boolean` | `false` | Shows loading spinner |

### RechargeOption Type

```ts
interface RechargeOption {
  id: string;
  label: string;
  amount: number;
  bonus?: string;
  popular?: boolean;
  description?: string;
}
```

## 📁 Project Structure

```
recharge-panel-ui-kit-tailwind/
├── components/
│   └── RechargeCard.tsx    # Main recharge card component
├── pages/
│   └── index.tsx           # Demo page with live preview
├── README.md               # This file
└── LICENSE                 # MIT License
```

## 🧩 Compatibility

- ✅ **React** 16.8+ (Hooks support)
- ✅ **Next.js** 12+ (App Router & Pages Router)
- ✅ **Tailwind CSS** 3.0+
- ✅ **TypeScript** 4.5+
- ✅ Works with **Vite**, **Remix**, **Gatsby**, and any React-based framework

## 📄 License

MIT — Free for personal and commercial projects. Attribution appreciated but not required.

---

<div align="center">
  <sub>Built with 💚 by <a href="https://github.com/cuix9561-code">Mark Cui</a></sub>
</div>
