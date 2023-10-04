export function canJump(nums: number[]): boolean {
  const jumps: number[] = [];

  const lastIndex = nums.length - 1;

  for (let index = 0; index < lastIndex;) {
    const jump = nums[index];

    if (jump === 0) {
      let prevJump = jumps.pop();

      if (!prevJump) {
        return false;
      }

      while (prevJump === 1) {
        index -= prevJump;

        prevJump = jumps.pop();

        if (!prevJump) {
          return false;
        }
      }

      jumps.push(prevJump - 1);
      index--;

      continue;
    }

    index += jump;
    jumps.push(jump)
  }

  return true;
}
