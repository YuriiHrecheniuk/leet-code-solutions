export function rotate(nums: number[], k: number): void {
    for (let i = 0; i < k; i++) {
        for (let numIndex = 1; numIndex < nums.length; numIndex++) {
            swapArrayElements(nums, 0, numIndex);
        }
    }
}

function swapArrayElements(array: unknown[], firstIndex: number, secondIndex: number): void {
    const secondElementValue = array[secondIndex];
    array[secondIndex] = array[firstIndex];
    array[firstIndex] = secondElementValue;
}

/*
[1*, 2*, 3, 4, 5, 6, 7] -> [2, 1, 3, 4, 5, 6, 7]
[2*, 1, 3*, 4, 5, 6, 7] -> [3, 1, 2, 4, 5, 6, 7]
[3*, 1, 2, 4*, 5, 6, 7] -> [4, 1, 2, 3, 5, 6, 7]
[4*, 1, 2, 3, 5*, 6, 7] -> [5, 1, 2, 3, 4, 6, 7]
[5*, 1, 2, 3, 4, 6*, 7] -> [6, 1, 2, 3, 4, 5, 7]
[6*, 1, 2, 3, 4, 5, 7*] -> [7, 1, 2, 3, 4, 5, 6]
 */