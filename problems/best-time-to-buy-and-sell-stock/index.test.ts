import {maxProfit} from "./index";

describe('best-time-to-buy-and-sell-stock', () => {
    test('Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.', () => {
        const prices = [7, 1, 5, 3, 6, 4]

        const result = maxProfit(prices);

        expect(result).toEqual(5)
    })

    test('No transactions are done and the max profit = 0.', () => {
        const prices = [7, 6, 4, 3, 1]

        const result = maxProfit(prices);

        expect(result).toEqual(0)
    })
})