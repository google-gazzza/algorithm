// [Medium] 1570. Dot Product of Two Sparse Vectors
// 1570_dot_product_of_two_sparse_vectors

// https://leetcode.com/problems/dot-product-of-two-sparse-vectors
// Runtime: 195 ms, faster than 20.69% of TypeScript online submissions for Dot Product of Two Sparse Vectors.
// Memory Usage: 54.7 MB, less than 79.31% of TypeScript online submissions for Dot Product of Two Sparse Vectors.

class SparseVector {
  v: number[]
  constructor(nums: number[]) {
    this.v = nums
  }

  // Return the dotProduct of two sparse vectors
  dotProduct(vec: SparseVector): number {
    const v2 = vec.v
    return this.v.reduce((acc, cur, index) => acc + cur * v2[index], 0)
  }
}
