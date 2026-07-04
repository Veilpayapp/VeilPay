const CRYPTO_LOGOS = [
  '/cryptos/xlm.svg',
  '/cryptos/eth.svg',
  '/cryptos/sol.svg',
  '/cryptos/xmr.svg',
  '/cryptos/zec.svg',
  '/cryptos/bnb.svg',
];

let availableIndices: number[] = [];

export const getNextCryptoLogo = (): string => {
  if (availableIndices.length === 0) {
    availableIndices = Array.from({ length: CRYPTO_LOGOS.length }, (_, i) => i);
    // Fisher-Yates shuffle
    for (let i = availableIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [availableIndices[i], availableIndices[j]] = [availableIndices[j], availableIndices[i]];
    }
  }
  const index = availableIndices.pop()!;
  return CRYPTO_LOGOS[index];
};
