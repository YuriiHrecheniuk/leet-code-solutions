import {majorityElement} from "./index";

describe('majority-element', () => {
    test('first test', () => {
        const nums = [3, 2, 3];

        const result = majorityElement(nums);

        expect(result).toEqual(3);
    })

    test('second test', () => {
        const nums = [2, 2, 1, 1, 1, 2, 2];

        const result = majorityElement(nums);

        expect(result).toEqual(2);
    })
})