export const API_ENDPOINTS = {
  PRODUCTS: 'https://fakestoreapi.com/products',
  CURRENCY_EXCHANGE: 'https://api.frankfurter.app/latest',
} as const;

export const CURRENCY_CONFIG = {
  FALLBACK_USD_TO_PHP_RATE: 56,
  FROM_CURRENCY: 'USD',
  TO_CURRENCY: 'PHP',
} as const;