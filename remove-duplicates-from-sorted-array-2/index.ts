export function removeDuplicates(nums: number[]): number {
    let nonUniqueNumsCount = 0;
    let lastFoundUniqueNum: number;
    let lastFoundUniqueNumOccurences = 1;

    for (let numIndex = 0; numIndex < nums.length; numIndex++) {
        const num = nums[numIndex];

        nums[numIndex] = undefined;

        if (lastFoundUniqueNum === num) {
            lastFoundUniqueNumOccurences++;

            if (lastFoundUniqueNumOccurences > 2) {
                nonUniqueNumsCount++;
            } else {
                nums[numIndex - nonUniqueNumsCount] = num;
            }
        } else {
            lastFoundUniqueNum = num;
            lastFoundUniqueNumOccurences = 1;

            nums[numIndex - nonUniqueNumsCount] = num;
        }
    }

    return nums.length - nonUniqueNumsCount;
}