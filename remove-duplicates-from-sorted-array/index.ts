export function removeDuplicates(nums: number[]): number {
  let uniqueNumsCount = 0;
  let nonUniqueNumsCount = 0;

  for (let numIndex = 1, lastUniqueNum = nums[0]; numIndex < nums.length; numIndex++) {
    const num = nums[numIndex];

    if (num === lastUniqueNum) {
      nums[numIndex] = 
    }
  }

  return uniqueNumsCount;
}
