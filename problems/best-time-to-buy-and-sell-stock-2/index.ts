export function maxProfit(prices: number[]): number {
  let [minPrice] = prices;
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];

    if (price <= minPrice) {
      minPrice = price;

      continue;
    }

    const nextPrice = prices[i + 1];

    if (nextPrice > price) {
      continue;
    }

    const profit = price - minPrice;
    maxProfit += profit;

    minPrice = prices[i + 1];

    i++; // to avoid redundant iteration
  }

  return maxProfit;
}
