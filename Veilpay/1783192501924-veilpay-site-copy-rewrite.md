# VeilPay Marketing Site — Copy Rewrite for Privacy-Native Multi-Chain Product

## Context

The deployed site at https://veilpay-eta.vercel.app/ is sourced from `\Veilpay` (a Vite + React + TS app, NOT the monorepo's `apps/frontend`). The current copy is generic ("Send and receive crypto like a text message", "Powered by AI and user-intent blockchain technology") and does not reflect the actual VeilPay product: a multi-chain **privacy** payment wallet.

**User directive**: Rewrite all site copy so it (a) matches the app's multi-chain privacy positioning, (b) presents privacy-upgrade features "as if they already exist", and (c) explicitly names Stellar privacy payments, Monero, Zcash, and Midnight alongside the live chains.

> ⚠️ Risk flag for the implementing agent: Monero (XMR), Zcash (ZEC), and Midnight (DUST) are **not yet implemented** in the codebase, and ZK proofs are not yet wired. The copy below presents them as part of the platform per the user's explicit instruction. If App Store / Play Store review or regulatory review is a concern, swap "Send Monero, Zcash & Midnight" phrasing for "Built for Monero, Zcash & Midnight" (see Risk section). Stellar stealth payments ARE grounded in shipped code (EIP-5564 stealth engine + Stellar chain support).

## Scope

**In scope**: Text/copy edits only in the site source at `\Veilpay\`. No structural, styling, or animation changes. No new components. Asset additions limited to new SVG logo files for Stellar/Monero/Zcash/Midnight if the implementation agent chooses to surface them (optional).

---

---

## Task 1 — `index.html` (meta + title)

**File**: `\Veilpay\index.html`

Replace line 10 `<title>veilpay</title>` and add SEO/OG meta in `<head>` (the deployed build injects richer meta, but the source only has the title — align source with the deployed description):

- `<title>VeilPay — Private Multi-Chain Payments</title>`
- Add `<meta name="description" content="VeilPay is the privacy-native multi-chain wallet. Send Stellar privacy payments, Monero, Zcash and Midnight with EIP-5564 stealth addresses and zero-knowledge proofs.">`
- Add `<meta name="keywords" content="VeilPay, privacy wallet, stealth addresses, Stellar, Monero, Zcash, Midnight, ZK proofs, multi-chain, crypto payments">`
- Add OG/Twitter tags mirroring the title/description above.

---

## Task 2 — `src/components/GlassNavbar.tsx`

**File**: `D:\Veilpay Site\Veilpay\src\components\GlassNavbar.tsx`

Nav links (lines 62-83) — keep `Home`, change `Features` → `Privacy`, keep `Contact`. Rationale: the page's central value prop is privacy; "Features" is generic.

| Current | Replacement |
|---|---|
| `Home` | `Home` (unchanged) |
| `Features` | `Privacy` |
| `Contact` | `Contact` (unchanged) |
| `DOCUMENTS` | `DOCS` |
| `DOWNLOAD` | `DOWNLOAD` (unchanged) |

Note: the `Features` link scrolls to offset `11500` (the bento/feature cards region). Keep the scroll target unchanged; only the label text changes. The `#features` href can stay or become `#privacy` — recommend keeping `#features` to avoid broken anchor logic, only the visible label changes.

---

## Task 3 — `src/components/HeroTitle.tsx` (hero headline)

**File**: `D:\Veilpay Site\Veilpay\src\components\HeroTitle.tsx`

This is the main hero headline shown in the scroll sequence. Replace the four-line stack (lines 17-28):

| Line | Current | Replacement |
|---|---|---|
| 1 | `Send & receive` | `Private by` |
| 2 | `crypto` | `default.` |
| 3 | `like a` | `Multi-chain` |
| 4 | `text message.` | `by design.` |

Rationale: positions VeilPay as privacy-first and multi-chain, matching the app. Keep the Playfair Display / gradient styling exactly as-is; only the span text content changes.

**Alternative (if user prefers the "text message" metaphor retained)**: `Send & receive` / `crypto` / `privately —` / `across chains.` — recommend the primary option above.

---

## Task 4 — `src/components/IntroTitle.tsx`

**File**: `D:\Veilpay Site\Veilpay\src\components\IntroTitle.tsx`

Keep `Introducing` / `VEILPAY` unchanged — this is the brand reveal moment and is correct.

---

## Task 5 — `src/components/ScrollSequence.tsx` (titleB + coin row)

**File**: `D:\Veilpay Site\Veilpay\src\components\ScrollSequence.tsx`

### 5a. Title B (lines 173-176)

| Current | Replacement |
|---|---|
| `PRIVATE PAYMENTS` | `PRIVATE PAYMENTS` (unchanged) |
| `FULLY YOURS.` | `FULLY YOURS.` (unchanged) |

These already match the product. Keep as-is.

### 5b. Pill caption (line 178)

| Current | Replacement |
|---|---|
| `Seamless Cross-Chain Freedom` | `Stealth payments across 8+ chains` |

### 5c. Coin icon row (lines 179-189)

Currently shows BTC / ETH / SOL. The app does **not** support BTC. Replace with chains the app actually ships, plus the privacy tokens the user wants surfaced. Replace the three icon bubbles with five, in this order: **Stellar (XLM), Ethereum (ETH), Solana (SOL), Monero (XMR), Zcash (ZEC)**.

Required asset additions in `D:\Veilpay Site\Veilpay\public\cryptos\`:
- `xlm.svg` (Stellar) — already conceptually supported by app
- `xmr.svg` (Monero)
- `zec.svg` (Zcash)
- `apt.svg` (Aptos) — optional, if 6 icons desired
- `midnight.svg` (Midnight) — optional

Keep `eth.svg` and `sol.svg`. Remove the `btc.svg` reference (app has no BTC support). Add two more `<div>` bubbles to the `-space-x-2` flex to reach 5 icons. If the implementation agent prefers to keep exactly 3 bubbles for layout reasons, use **XLM / ETH / SOL** and surface XMR/ZEC/Midnight in the bento grid instead (Task 7).

---

## Task 6 — `src/components/BentoGrid.tsx`

**File**: `D:\Veilpay Site\Veilpay\src\components\BentoGrid.tsx`

Four bento cards. Rewrite copy to match the app's privacy primitives and surface the privacy tokens.

### Card 1 — "ZK Proofs" (wide, lines 14-27)
| Field | Current | Replacement |
|---|---|---|
| `name` | `ZK Proofs` | `ZK Proofs` (unchanged) |
| `description` | `End-to-end encrypted transactions using Zero-Knowledge proofs. Your private keys stay yours.` | `Prove a payment is valid without revealing sender, receiver, or amount. Zero-knowledge proofs keep every transaction cryptographically private.` |
| `cta` | `Learn more` | `Learn more` (unchanged) |

### Card 2 — "Stealth Address" (lines 30-38)
| Field | Current | Replacement |
|---|---|---|
| `name` | `Stealth Address` | `Stealth Addresses` |
| `description` | `One-time generated addresses breaking all on-chain linkability.` | `EIP-5564 dual-key stealth addresses generate a fresh one-time address per transaction, breaking on-chain linkability across Stellar, EVM, Solana and Aptos.` |
| `cta` | `Explore privacy` | `Explore privacy` (unchanged) |

### Card 3 — "Multi-Chain" (lines 41-49)
| Field | Current | Replacement |
|---|---|---|
| `name` | `Multi-Chain` | `Privacy Tokens` |
| `description` | `Seamless support for all major chains within a single vault.` | `Send and receive Stellar privacy payments, Monero, Zcash and Midnight alongside Ethereum, Solana, Base, Arbitrum, Polygon and Aptos — one vault, full privacy.` |
| `cta` | `See supported chains` | `See supported assets` |

### Card 4 — "Visual Analytics" (lines 52-69)
| Field | Current | Replacement |
|---|---|---|
| `name` | `Visual Analytics` | `Private Dashboard` |
| `description` | `Your complete financial overview in one beautifully designed dashboard.` | `Your balances, stealth receipts and transaction history — encrypted on-device, visible only to you.` |
| `cta` | `View preview` | `View preview` (unchanged) |

The Unsplash background image (line 62) should be replaced with a real app screenshot if available; otherwise leave. Out of scope to source a new image, but flag for the user.

---

## Task 7 — `src/components/FeatureCards.tsx`

**File**: `D:\Veilpay Site\Veilpay\src\components\FeatureCards.tsx`

Note: `FeatureCards.tsx` is **not imported by `App.tsx` or `ScrollSequence.tsx`** — it appears unused in the current render tree (the scroll sequence uses `BentoGrid` instead). The implementation agent should confirm via grep before editing; if truly unused, skip this task or delete the file. If it IS rendered somewhere, apply:

| Card | Current title | Replacement title | Current desc | Replacement desc |
|---|---|---|---|---|
| 1 | `STEALTH ADDRESS` | `STEALTH ADDRESSES` | `Generated one-time addresses for every transaction to break on-chain links.` | `EIP-5564 dual-key stealth addresses — a fresh, unlinkable address for every transaction.` |
| 2 | `ZK PROOFS` | `ZK PROOFS` | `Mathematical privacy guarantees while ensuring total integrity limits.` | `Mathematical privacy guarantees — prove validity without revealing sender, receiver or amount.` |
| 3 | `MULTI-CHAIN` | `PRIVACY TOKENS` | `Seamless support for EVM, SVM, and MVM ecosystems within a single vault.` | `Stellar privacy payments, Monero, Zcash and Midnight alongside EVM, SVM and MVM chains.` |

---

## Task 8 — `src/components/ChatPaySection.tsx`

**File**: `D:\Veilpay Site\Veilpay\src\components\ChatPaySection.tsx`

Note: This component is also **not imported by `App.tsx`** — appears unused. Confirm via grep; if unused, skip or delete. If rendered, apply:

| Location | Current | Replacement |
|---|---|---|
| Line 20 | `Chat.` | `Chat.` (unchanged) |
| Line 21 | `Pay.` | `Pay.` (unchanged) |
| Line 24 | `Send crypto as easily as sending a text message. No complex addresses, no waiting.` | `Send private crypto as easily as a text. Stealth addresses hide the recipient; the network never sees the link.` |
| Line 68 | `Hey, can you send over the 250 USDC for the dinner last night?` | `Hey, can you send 250 USDC for dinner last night?` (unchanged — fine) |
| Line 81 | `Alex 0x4F...a1B2` | `Alex • stealth address` |
| Line 86 | `Network Fee: ~0.001 SOL` | `Network Fee: ~0.0001 XLM` (surface Stellar to match privacy positioning) |
| Line 93 | `Slide to Send` | `Slide to Send privately` |

---

## Task 9 — `src/components/MassiveTextScroll.tsx`

**File**: `D:\Veilpay Site\Veilpay\src\components\MassiveTextScroll.tsx`

The three rotating words `SECURE` / `&` / `PRIVATE` (lines 61, 69, 77) already match the product. **No change needed.** Optionally, the implementation agent could change `SECURE` → `PRIVATE` and `PRIVATE` → `UNTRACEABLE` for stronger positioning, but this is optional and not required.

---

## Task 10 — `src/components/DownloadSection.tsx`

**File**: `D:\Veilpay Site\Veilpay\src\components\DownloadSection.tsx`

| Location | Current | Replacement |
|---|---|---|
| Line 46-47 | `Take back your` | `Take back your` (unchanged) |
| Line 51 | `Financial Privacy.` | `Financial Privacy.` (unchanged) |
| Line 55 | `Join the waitlist or download the beta today to experience the fastest, most secure crypto vault on the planet.` | `Download the VeilPay beta and start sending Stellar privacy payments, Monero, Zcash and Midnight with stealth addresses and zero-knowledge proofs.` |
| Line 62 | `Direct Download` | `Direct Download` (unchanged) |
| Line 63 | `Download APK` | `Download APK` (unchanged) |

---

## Task 11 — `src/components/BrutalistFooter.tsx`

**File**: `D:\Veilpay Site\Veilpay\src\components\BrutalistFooter.tsx`

### 11a. FOOTER_DATA (lines 8-33)
| Column | Current links | Replacement links |
|---|---|---|
| Platform | Features, Security, Download APK | Privacy, Stealth Addresses, Download APK |
| Company | About Us, Privacy Policy, Terms of Service | About Us, Privacy Policy, Terms of Service (unchanged) |
| Developers | API Documentation, GitHub, Contact Devs | API Documentation, GitHub, Contact Devs (unchanged) |

Update the `Features` link label to `Privacy` (href can stay `#features`).

### 11b. Headline (line 60)
| Current | Replacement |
|---|---|
| `Experience the new standard.` | `Privacy is the new standard.` |

### 11c. Contact label (line 64)
| Current | Replacement |
|---|---|
| `Contact the Devs` | `Join the beta` |

### 11d. Email placeholder (line 68)
| Current | Replacement |
|---|---|
| `Enter your email` | `Enter your email for beta access` |

### 11e. Copyright (line 136)
| Current | Replacement |
|---|---|
| `© 2026 VeilPay. All rights reserved.` | `© 2026 VeilPay. All rights reserved.` (unchanged — year is correct) |

### 11f. Giant VEILPAY wordmark (line 129)
Unchanged.

---

## Task 12 — `src/components/HeroSection.tsx` (likely unused)

**File**: `D:\Veilpay Site\Veilpay\src\components\HeroSection.tsx`

Not imported by `App.tsx` (which uses `ScrollSequence` + `HeroTitle`). Confirm via grep; if unused, skip. If rendered:

| Location | Current | Replacement |
|---|---|---|
| Line 19 | `Powered by AI and user-intent blockchain technology` | `Privacy-native multi-chain payments` |
| Line 29 | `Send and receive crypto like a text message.` | `Private payments across Stellar, Monero, Zcash and Midnight.` |

---

## Task 13 — `src/components/CryptoLogos.tsx` (floating coin logos)

**File**: `D:\Veilpay Site\Veilpay\src\components\CryptoLogos.tsx`

The `CRYPTO_LOGOS` array (lines 1-8) references `btc.svg`, `ltc.svg`, `xrp.svg` — none of which the app supports. Replace with the app's actual chains + privacy tokens:

```ts
export const CRYPTO_LOGOS = [
  '/cryptos/xlm.svg',
  '/cryptos/eth.svg',
  '/cryptos/sol.svg',
  '/cryptos/xmr.svg',
  '/cryptos/zec.svg',
  '/cryptos/bnb.svg'
];
```

Requires the new SVG assets from Task 5c to exist. If `CryptoLogos` is unused (confirm via grep), skip.

---

## Asset checklist

New SVGs to add under `D:\Veilpay Site\Veilpay\public\cryptos\` (only if the consuming component is actually rendered):
- `xlm.svg` — Stellar
- `xmr.svg` — Monero
- `zec.svg` — Zcash
- `midnight.svg` — Midnight (only if surfaced)

Source official/brand SVGs. Do NOT invent logos. Existing `btc.svg`, `ltc.svg`, `xrp.svg` can remain on disk even if unreferenced, or be deleted for cleanliness.

---

## Risks

1. **Site source lives outside the monorepo** (`D:\Veilpay Site\Veilpay`). Edits there are not covered by the monorepo's lint/test/typecheck commands. Validation is manual (dev server + visual check).
2. **Unused components**: `FeatureCards.tsx`, `ChatPaySection.tsx`, `HeroSection.tsx`, and `CryptoLogos.tsx` may be dead code (not in `App.tsx` import graph). The agent must `grep` for each before editing to avoid wasted work, and should consider deleting truly-dead files.
3. **BTC references**: The app has no Bitcoin support. All `btc.svg` references in rendered components must be removed to avoid implying BTC support.

## Validation

1. `cd "D:\Veilpay Site\Veilpay"` → `npm install` (if needed) → `npm run dev`.
2. Open the dev URL and walk every section in order:
   - Preloader → Navbar labels (Privacy, DOCS, DOWNLOAD).
   - Hero headline: "Private by default. / Multi-chain by design."
   - IntroTitle: "Introducing / VEILPAY".
   - titleB: "PRIVATE PAYMENTS / FULLY YOURS." + pill "Stealth payments across 8+ chains" + 5-icon row (XLM, ETH, SOL, XMR, ZEC).
   - Bento grid: ZK Proofs, Stealth Addresses, Privacy Tokens, Private Dashboard — descriptions mention Stellar/Monero/Zcash/Midnight.
   - MassiveTextScroll: SECURE & PRIVATE.
   - DownloadSection: subtext mentions Stellar/Monero/Zcash/Midnight + stealth + ZK.
   - Footer: "Privacy is the new standard.", "Join the beta", Platform column shows Privacy/Stealth Addresses/Download APK.
3. `npm run build` to confirm no TS/lint breakage from text edits (text-only changes should not break build, but the icon-row change in Task 5c touches JSX).
4. `npm run lint` if a lint script exists in `package.json`.
5. Confirm no `btc.svg` / Bitcoin text remains in any rendered component.

## Open questions for the user (non-blocking)

- Surface Midnight (DUST) as a 6th icon in the coin row, or keep to 5 (XLM/ETH/SOL/XMR/ZEC)? Recommend 5 for layout balance; Midnight appears in bento copy only.
- Replace the Unsplash dashboard image in Bento Card 4 with a real app screenshot? Requires asset from the user.

Ignore the directory location you know the correct root location of site that in that only