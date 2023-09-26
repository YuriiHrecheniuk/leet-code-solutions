import { maxProfit } from "./";

describe("best-time-to-buy-and-sell-stock", () => {
  test("Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4. Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3. Total profit is 4 + 3 = 7.", () => {
    const prices = [7, 1, 5, 3, 6, 4];

    const result = maxProfit(prices);

    expect(result).toEqual(7);
  });

  test("Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4. Total profit is 4.", () => {
    const prices = [1, 2, 3, 4, 5];

    const result = maxProfit(prices);

    expect(result).toEqual(4);
  });

  test("There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.", () => {
    const prices = [7, 6, 4, 3, 1];

    const result = maxProfit(prices);

    expect(result).toEqual(0);
  });
});
