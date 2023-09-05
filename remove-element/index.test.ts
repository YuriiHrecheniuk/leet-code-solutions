import { removeElement } from './index'

describe("remove-element", () => {
  it("should return k = 2, with the first two elements of nums being 2", () => {
    const nums = [3, 2, 2, 3];
    const val = 3;

    const output = removeElement(nums, val);

    expect(nums).toEqual([2, 2, undefined, undefined]);
    expect(output).toEqual(2);
  });

  it("should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;

    const output = removeElement(nums, val);

    expect(nums).toEqual([0, 1, 3, 0, 4, undefined, undefined, undefined]);
    expect(output).toEqual(5);
  });
});
