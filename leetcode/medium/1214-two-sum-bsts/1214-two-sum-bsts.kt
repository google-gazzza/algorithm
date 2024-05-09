///**
// * Example:
// * var ti = TreeNode(5)
// * var v = ti.`val`
// * Definition for a binary tree node.
class TreeNode(var `val`: Int) {
    var left: TreeNode? = null
    var right: TreeNode? = null
}

class Solution {
    fun bst(root: TreeNode?, map: MutableMap<Int, Int>) {
        if (root == null) {
            return
        }
        map[root.`val`] = 1
        bst(root.left, map)
        bst(root.right, map)
    }

    fun twoSumBSTs(root1: TreeNode?, root2: TreeNode?, target: Int): Boolean {
        var map1 = mutableMapOf<Int, Int>()
        var map2 = mutableMapOf<Int, Int>()

        bst(root1, map1)
        bst(root2, map2)

        for (key in map1.keys) {
            if (map2.containsKey(target - key)) {
                return true
            }
        }

        return false
    }
}
