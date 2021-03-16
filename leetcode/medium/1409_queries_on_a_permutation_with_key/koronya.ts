// [Medium] 1409. Queries on a Permutation With Key
// 1409_queries_on_a_permutation_with_key

// https://leetcode.com/problems/queries-on-a-permutation-with-key
// Runtime: 92 ms, faster than 80.00% of TypeScript online submissions for Queries on a Permutation With Key.
// Memory Usage: 44.4 MB, less than 20.00% of TypeScript online submissions for Queries on a Permutation With Key.

/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
function processQueries(queries: number[], m: number): number[] {
  const arr: number[] = Array.from({ length: m }).map((_, index) => index + 1)

  return queries.reduce((acc, item) => {
    const findIndex: number = arr.indexOf(item)
    arr.splice(findIndex, 1)
    arr.unshift(item)
    return [...acc, findIndex]
  }, [])
}

processQueries([3, 1, 2, 1], 5) //?
processQueries([4, 1, 2, 2], 4) //?
processQueries([7, 5, 5, 8, 3], 8) //?
