export function removeElement(nums: (number | undefined)[], val: number): number {
  let valElementsCount = 0;

  for (let currentNumIndex = 0; currentNumIndex < nums.length; currentNumIndex++) {
    const currentNum = nums[currentNumIndex];

    if (currentNum === val) {
      valElementsCount++;

      if (currentNumIndex === nums.length - 1) {
        nums[currentNumIndex] = undefined;
      }
    } else {
      nums[currentNumIndex] = undefined;
      nums[currentNumIndex - valElementsCount] = currentNum;
    }
  }

  return nums.length - valElementsCount;
};