import { binarySearch } from "./binary-search";

const sortedArray = new Array<number>(1000);

for (let i = 0; i < sortedArray.length; i++) {
    sortedArray[i] = i + 1;
}

test('finds correct index', () => {
    expect(binarySearch(sortedArray, 1)).toBe(0);
    expect(binarySearch(sortedArray, 99)).toBe(98);
    expect(binarySearch(sortedArray, 1000)).toBe(999);
})

test('returns -1 if not found', () => {
    expect(binarySearch(sortedArray, 0)).toBe(-1);
    expect(binarySearch(sortedArray, 1001)).toBe(-1);
    expect(binarySearch(sortedArray, -1)).toBe(-1);
})