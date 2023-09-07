// leetcode/medium/2782. Number of Unique Categories
// 2782-number-of-unique-categories
// URL: https://leetcode.com/problems/number-of-unique-categories/


// Definition for a category handler.
class CategoryHandler {
  constructor(categories: number[]);

  public haveSameCategory(a: number, b: number): boolean;
}

function numberOfCategories(n: number, categoryHandler: CategoryHandler): number {
  let set = new Set();
  let categoryCount = 0;

  for (let i = 0; i < n; i++) {
    if (set.has(i)) {
      continue;
    } else {
      categoryCount++;
      set.add(i);
    }

    for (let j = i + 1; j < n; j++) {
      if (set.has(j)) {
        continue;
      }

      if (categoryHandler.haveSameCategory(i, j)) {
        set.add(j);
      }
    }
  }

  return categoryCount;
};

n = 6, categoryHandler = [1, 1, 2, 2, 3, 3];
Output: 3;
