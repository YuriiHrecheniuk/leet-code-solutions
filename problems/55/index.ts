export function canJump(nums: number[]): boolean {
  const prevJumps: number[] = [];

  const lastIndex = nums.length - 1;

  const passedIndexes = new Array<boolean>(nums.length);

  for (let index = 0; index < lastIndex;) {
    const currentJump = nums[index];

    if (currentJump === 0 || passedIndexes[index]) {
      let prevJump = prevJumps.pop();

      if (!prevJump) {
        return false;
      }

      while (prevJump === 1) {
        index -= prevJump;

        prevJump = prevJumps.pop();

        if (!prevJump) {
          return false;
        }
      }

      prevJumps.push(prevJump - 1);
      index--;

      continue;
    }

    passedIndexes[index] = true;

    index += currentJump;
    prevJumps.push(currentJump)
  }

  return true;
}
