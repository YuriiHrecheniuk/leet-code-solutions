export function removeDuplicates(nums: number[]): number {
  let nonUniqueNumsCount = 0;
  let lastFoundUniqueNum: number;

  for (let numIndex = 0; numIndex < nums.length; numIndex++) {
    const num = nums[numIndex];

    nums[numIndex] = undefined;

    if (lastFoundUniqueNum === num) {
      nonUniqueNumsCount++;
    } else {
      lastFoundUniqueNum = num;
      nums[numIndex - nonUniqueNumsCount] = num;
    }
  }

  return nums.length - nonUniqueNumsCount;
}
