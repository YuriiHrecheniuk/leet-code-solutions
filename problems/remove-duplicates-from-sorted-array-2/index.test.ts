import {removeDuplicates} from './index'

describe('remove-duplicates-from-sorted-array-2', () => {
    it('should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively', () => {
        const nums = [1, 1, 1, 2, 2, 3];

        const result = removeDuplicates(nums);

        expect(result).toEqual(5);
        expect(nums).toEqual([1, 1, 2, 2, 3, undefined])
    })

    it('should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively', () => {
        const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]

        const result = removeDuplicates(nums)

        expect(result).toEqual(7);
        expect(nums).toEqual([0, 0, 1, 1, 2, 3, 3, undefined, undefined])
    })
})