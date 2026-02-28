import { API_ENDPOINTS, CURRENCY_CONFIG } from '@/constants';
import { ExchangeRateResponse } from '@/interfaces';
import { useEffect, useState } from 'react';

interface CurrencyConverterReturn {
    convertUsdToPhp: (usdAmount: number) => number;
    exchangeRate: number | null;
    loading: boolean;
    error: string | null;
}

export function useCurrencyConverter(): CurrencyConverterReturn {
    const [exchangeRate, setExchangeRate] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchExchangeRate = async (): Promise<void> => {
            try {
                setLoading(true);
                setError(null);

                const url = `${API_ENDPOINTS.CURRENCY_EXCHANGE}?from=${CURRENCY_CONFIG.FROM_CURRENCY}&to=${CURRENCY_CONFIG.TO_CURRENCY}`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data: ExchangeRateResponse = await response.json();
                const rate = data.rates?.PHP;

                if (!rate) {
                    throw new Error('PHP exchange rate not found');
                }

                setExchangeRate(rate);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch exchange rate');
                console.error('Error fetching exchange rate:', err);
                setExchangeRate(CURRENCY_CONFIG.FALLBACK_USD_TO_PHP_RATE);
            } finally {
                setLoading(false);
            }
        };

        fetchExchangeRate();
    }, []);

    const convertUsdToPhp = (usdAmount: number): number => {
        if (!exchangeRate) return usdAmount * CURRENCY_CONFIG.FALLBACK_USD_TO_PHP_RATE;
        return usdAmount * exchangeRate;
    };

    return {
        convertUsdToPhp,
        exchangeRate,
        loading,
        error
    };
}