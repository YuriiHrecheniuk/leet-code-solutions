import { removeDuplicates } from "./index";

describe("remove-duplicates-from-sorted-array", () => {
  it("should return k = 2, with the first two elements of nums being 1 and 2 respectively", () => {
    const nums = [1, 1, 2];

    const result = removeDuplicates(nums);

    expect(result).toEqual(2);
    expect(nums).toEqual([1, 2, undefined]);
  });

  it("should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

    const result = removeDuplicates(nums);

    expect(result).toEqual(5);
    expect(nums).toEqual([
      0,
      1,
      2,
      3,
      4,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ]);
  });
});
