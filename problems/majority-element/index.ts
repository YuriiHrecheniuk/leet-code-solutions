export function majorityElement(nums: number[]): number {
    nums.sort();

    const middleIndex = Math.floor(nums.length / 2);

    return nums[middleIndex];
}