// 랴
// 1570_dot_product_of_two_sparse_vectors

// https://leetcode.com/problems/dot-product-of-two-sparse-vectors
// Runtime: 112 ms, faster than 74.56% of JavaScript online submissions for Dot Product of Two Sparse Vectors.
// Memory Usage: 51.5 MB, less than 90.00% of JavaScript online submissions for Dot Product of Two Sparse Vectors.

/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
const SparseVector = function (nums) {
  this.v = nums
}

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function (vec) {
  const v2 = vec.v
  return this.v.reduce((acc, cur, index) => acc + cur * v2[index], 0)
}

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);

let v1 = new SparseVector([1, 0, 0, 2, 3])
let v2 = new SparseVector([0, 3, 0, 4, 0])
let ans = v1.dotProduct(v2) //?
