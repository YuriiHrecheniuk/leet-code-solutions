import { canJump } from '.';

describe('55', () => {
  test('Jump 1 step from index 0 to 1, then 3 steps to the last index.', () => {
    const nums = [2, 3, 1, 1, 4];

    const result = canJump(nums);

    expect(result).toEqual(true);
  });

  test('You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.', () => {
    const nums = [3, 2, 1, 0, 4];

    const result = canJump(nums);

    expect(result).toEqual(false);
  });
});
