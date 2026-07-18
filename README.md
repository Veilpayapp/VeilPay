<div align="center">
<img src="Veilpay/public/image.png" alt="Veilpay" width="300">

<h1>VeilPay</h1>

Private crypto payments and anonymous donations, built on stealth addressing across seven or more chains.

[Website](https://www.veilpayapp.com) · [Docs](https://www.veilpayapp.com/docs) · [X](https://x.veilpayapp.com) · [Discord](https://discord.veilpayapp.com) · [Telegram](https://telegram.veilpayapp.com)

<br/>

<a href="https://react.dev/"><img src="https://img.shields.io/badge/Built_with-React_19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React 19" /></a>
<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 6" /></a>
<a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 8" /></a>
<a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind 4" /></a>
<img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License: MIT" />

</div>

## Overview

VeilPay is a private crypto payments platform that combines zero-knowledge proofs, stealth addresses, and a multi-chain architecture to keep transaction details off the public record. Sender, receiver, and amount stay hidden across Ethereum, Solana, Stellar, and other supported chains, while the app itself stays fast enough for everyday use.

The project is currently in waitlist stage at [veilpayapp.com](https://www.veilpayapp.com).

## Features

### Privacy

| Feature | Description |
|---|---|
| Zero-Knowledge Proofs | Validates a payment without revealing sender, receiver, or amount. |
| Stealth Addresses | EIP-5564 dual-key stealth addresses generate a fresh one-time address per transaction, breaking on-chain linkability across Stellar, EVM, and Solana. |
| Encrypted Notes | Attach encrypted metadata to a transaction that only the recipient can decrypt. |

### Chains

| Chain | Type | Status |
|---|---|---|
| Ethereum | EVM L1 | Supported |
| Base | EVM L2 | Supported |
| Arbitrum | EVM L2 | Supported |
| Polygon | EVM L2 | Supported |
| Solana | Non-EVM | Supported |
| Stellar | Non-EVM | Supported |

### Assets

<p>
<img src="Veilpay/public/cryptos/xlm.svg" width="32" alt="Stellar">
<img src="Veilpay/public/cryptos/eth.svg" width="32" alt="Ethereum">
<img src="Veilpay/public/cryptos/sol.svg" width="32" alt="Solana">
<img src="Veilpay/public/cryptos/xmr.svg" width="32" alt="Monero">
<img src="Veilpay/public/cryptos/zec.svg" width="32" alt="Zcash">
</p>

Alongside major chains, VeilPay supports privacy-native assets:

- **Monero (XMR)**: established private digital currency.
- **Zcash (ZEC)**: selective disclosure via zk-SNARKs.
- **Midnight**: Cardano's privacy-focused sidechain.
- **Stellar Private Payments**: native privacy layer on Stellar.

### Consumer App

- **Unified vault**: one wallet for public and private assets.
- **Fiat ramps**: on/off-ramp between fiat and crypto.
- **WalletConnect**: connect to dApps with privacy-preserving sessions.
- **Send and receive flows**: straightforward UX for private payments.
- **Anonymous donations**: donate without exposing wallet history.

## Architecture

```
Veilpay/
├── api/                  # Serverless API routes (Vercel)
├── public/               # Static assets and images
├── scripts/              # Build and utility scripts
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Route-level page components
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utilities and helpers
└── veilpay-docs/
    ├── architecture/     # Protocol overview and design docs
    ├── chains/           # Per-chain integration guides
    ├── consumer-app/     # App feature documentation
    ├── getting-started/  # Quickstart and setup guides
    ├── privacy/          # ZK proofs, stealth addresses, encrypted notes
    └── security/         # API hardening and secrets management
```

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19, TypeScript 6 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion, GSAP |
| 3D Graphics | Three.js (React Three Fiber) |
| Routing | React Router DOM 7 |
| Icons | Lucide React, Radix UI Icons |
| Backend | Vercel Serverless Functions |
| Database | PostgreSQL, Redis |
| Testing | Vitest |

## Documentation

Full documentation lives in `veilpay-docs/` and at [veilpayapp.com/docs](https://www.veilpayapp.com/docs).

| Section | Path | Description |
|---|---|---|
| Protocol Overview | `architecture/` | How VeilPay operates and the payment lifecycle |
| Supported Networks | `chains/` | Mainnet and testnet details for each chain |
| Consumer App | `consumer-app/` | Balances, fiat ramps, send/receive, WalletConnect |
| Getting Started | `getting-started/` | Quickstart guide and local development setup |
| Privacy | `privacy/` | ZK proofs, stealth addresses, encrypted notes |
| Security | `security/` | API hardening, secrets management, security model |

## Community

| Platform | Link |
|---|---|
| Website | [veilpayapp.com](https://www.veilpayapp.com) |
| X / Twitter | [x.veilpayapp.com](https://x.veilpayapp.com) |
| Discord | [discord.veilpayapp.com](https://discord.veilpayapp.com) |
| Telegram | [telegram.veilpayapp.com](https://telegram.veilpayapp.com) |
| Instagram | [instagram.veilpayapp.com](https://instagram.veilpayapp.com) |
| LinkedIn | [linkedin.veilpayapp.com](https://linkedin.veilpayapp.com) |
| Medium | [veilpay.medium.com](https://veilpay.medium.com) |
| Blog | [veilpayapp.com/blogs](https://www.veilpayapp.com/blogs) |

## License

Licensed under the MIT License. See [LICENSE](LICENSE) for details.

<div align="center">

[Join the waitlist](https://www.veilpayapp.com/waitlist)

</div>
