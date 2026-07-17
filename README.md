<div align="center">

<!-- VeilPay Logo / Brand -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://veilpay-eta.vercel.app/image2.white.webp">
  <img src="https://veilpay-eta.vercel.app/image2.webp" alt="Veilpay" width="280">
</picture>

<br/>

# VeilPay

### Private by Default. Multi-Chain by Design.

**Private crypto payments & anonymous donations — stealth payments across 7+ chains.**

[Website](https://veilpay-eta.vercel.app) · [Docs](Veilpay/veilpay-docs/) · [X / Twitter](https://x.veilpayapp.com/) · [Discord](https://discord.veilpayapp.com/) · [Telegram](https://telegram.veilpayapp.com/)

<br/>

[![Built with React](https://img.shields.io/badge/Built_with-React_19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

</div>

---

## Overview

**VeilPay** is a next-generation private crypto payments platform that combines zero-knowledge proofs, stealth addresses, and multi-chain architecture to deliver fully private transactions. Send and receive payments without revealing sender, receiver, or amount — across Ethereum, Solana, Stellar, and more.

VeilPay is designed for users who demand financial privacy without sacrificing speed, usability, or multi-chain access.

> *"Take back your financial privacy."*

---

## Features

### Privacy-First Transactions
| Feature | Description |
|---|---|
| **Zero-Knowledge Proofs** | Prove a payment is valid without revealing sender, receiver, or amount. Every transaction is cryptographically private. |
| **Stealth Addresses** | EIP-5564 dual-key stealth addresses generate a fresh one-time address per transaction, breaking on-chain linkability across Stellar, EVM, and Solana. |
| **Encrypted Notes** | Attach encrypted metadata to transactions that only the intended recipient can decrypt. |

### Multi-Chain Support
| Chain | Type | Status |
|---|---|---|
| **Ethereum** | EVM L1 | ✅ Supported |
| **Base** | EVM L2 | ✅ Supported |
| **Arbitrum** | EVM L2 | ✅ Supported |
| **Polygon** | EVM L2 | ✅ Supported |
| **Solana** | Non-EVM | ✅ Supported |
| **Stellar** | Non-EVM | ✅ Supported |

### Privacy Assets
Send and receive privacy-native tokens alongside major chains:

- **Monero (XMR)** — The gold standard in private digital currency
- **Zcash (ZEC)** — Selective disclosure with zk-SNARKs
- **Midnight** — Cardano's privacy-focused sidechain
- **Stellar Private Payments** — Native privacy layer on Stellar

### 📱 Consumer App
- **Unified Vault** — One wallet for all your private and public assets
- **Fiat Ramps** — On/off-ramp between fiat and crypto seamlessly
- **WalletConnect** — Connect to dApps with privacy-preserving session management
- **Send / Receive Flows** — Intuitive UX for private payments

---

## Architecture

```
Veilpay/
├── api/                # Serverless API routes (Vercel)
├── public/             # Static assets & images
├── scripts/            # Build & utility scripts
├── src/                # Application source code
│   ├── components/     # Reusable UI components
│   ├── pages/          # Route-level page components
│   ├── hooks/          # Custom React hooks
│   └── lib/            # Utilities & helpers
└── veilpay-docs/       # Comprehensive documentation
    ├── architecture/   # Protocol overview & design docs
    ├── chains/         # Per-chain integration guides
    ├── consumer-app/   # App feature documentation
    ├── getting-started/ # Quickstart & setup guides
    ├── privacy/        # ZK proofs, stealth addresses, encrypted notes
    └── security/       # API hardening & secrets management
```

### Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 + TypeScript 6 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion, GSAP |
| **3D Graphics** | Three.js (React Three Fiber) |
| **Routing** | React Router DOM 7 |
| **Icons** | Lucide React, Radix UI Icons |
| **Backend** | Vercel Serverless Functions |
| **Database** | PostgreSQL + Redis |
| **Testing** | Vitest |
---


## Documentation

Comprehensive documentation lives in [`veilpay-docs/`](Veilpay/veilpay-docs/):

| Section | Path | Description |
|---|---|---|
| **Protocol Overview** | `architecture/` | How Veilpay operates and the payment lifecycle |
| **Supported Networks** | `chains/` | Mainnet & testnet details for each chain |
| **Consumer App** | `consumer-app/` | Balances, fiat ramps, send/receive, WalletConnect |
| **Getting Started** | `getting-started/` | Quickstart guide & local development setup |
| **Privacy** | `privacy/` | ZK proofs, stealth addresses, encrypted notes |
| **Security** | `security/` | API hardening, secrets management, security model |

---

## Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start Vite dev server |
| `pnpm build` | TypeScript compile + Vite production build |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run ESLint |
| `pnpm test` | Run Vitest test suite |
| `pnpm optimize:img` | Optimize images using Sharp |
| `pnpm docs:manifest` | Generate documentation manifest |
| `pnpm docs:check` | Validate documentation structure |

---

## 🌍 Community & Social

| Platform | Link |
|---|---|
| **Website** | [veilpay-eta.vercel.app](https://veilpayapp.com) |
| **X / Twitter** | [x.veilpayapp.com](https://x.veilpayapp.com/) |
| **Discord** | [discord.veilpayapp.com](https://discord.veilpayapp.com/) |
| **Telegram** | [telegram.veilpayapp.com](https://telegram.veilpayapp.com/) |
| **Instagram** | [instagram.veilpayapp.com](https://instagram.veilpayapp.com/) |
| **LinkedIn** | [linkedin.veilpayapp.com](https://linkedin.veilpayapp.com/) |
| **Medium** | [veilpay.medium.com](https://veilpay.medium.com/) |
| **Blog** | [veilpay-eta.vercel.app/blogs](https://veilpayapp.com/blogs) |

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Private payments. Fully yours.**

[⭐ Star this repo](https://github.com/Veilpayapp/VeilPay/stargazers) to show your support!

</div>
