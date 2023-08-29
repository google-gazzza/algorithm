// leetcode/medium/702. Search in a Sorted Array of Unknown Size
// 702-search-in-a-sorted-array-of-unknown-size
// URL: https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/

/**
 Do not return anything, modify board in-place instead.
 */

 class ArrayReader {
  // This is the ArrayReader's API interface.
  // You should not implement it, or speculate about its implementation
  get(index: number): number {
  };
};

function search(reader: ArrayReader, target: number): number {
  let lastIndex = 10 ** 4;
  let firstIndex = 0;
  let middleIndex = Math.floor((lastIndex - firstIndex) / 2);

  while (firstIndex < lastIndex && firstIndex !== middleIndex) {
    const middle = reader.get(middleIndex);

    if (middle === target) {
      return middleIndex;
    }

    if (middle < target) {
      firstIndex = middleIndex;
    } else {
      lastIndex = middleIndex;
    }

    middleIndex = Math.floor(firstIndex + ((lastIndex - firstIndex) / 2));
  }

  if (reader.get(firstIndex) === target) {
    return firstIndex;
  }

  return -1;
}
