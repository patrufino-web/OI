// gp-site/utils/formatCurrency.ts

/**
 * Formats a number as a currency string.
 * 
 * @param amount - The numeric value to format.
 * @param currency - The currency code (e.g., 'BRL', 'USD'). Defaults to 'BRL'.
 * @returns A string representing the formatted currency.
 */
export function formatCurrency(amount: number, currency: string = 'BRL'): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  }).format(amount);
}

