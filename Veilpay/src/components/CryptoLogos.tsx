export const CRYPTO_LOGOS = [
  '/cryptos/btc.svg',
  '/cryptos/eth.svg',
  '/cryptos/sol.svg',
  '/cryptos/ltc.svg',
  '/cryptos/bnb.svg',
  '/cryptos/xrp.svg'
];

let lastLogoIndex = -1;
export const getNextCryptoLogo = (): string => {
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * CRYPTO_LOGOS.length);
  } while (nextIndex === lastLogoIndex);
  lastLogoIndex = nextIndex;
  return CRYPTO_LOGOS[nextIndex];
};
