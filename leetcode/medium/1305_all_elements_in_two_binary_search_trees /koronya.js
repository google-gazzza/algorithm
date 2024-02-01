
const insertionSort = (arr, insertItem) => {
  let index = -1
  const arrLen = arr.length
  for (let i = 0; i < arrLen; i += 1) {
    const item = arr[i]
    if (insertItem <= item) {
      index = i
      break
    }
  }
  if (index === -1) {
    arr.push(insertItem)
  } else {
    arr.splice(index, 0, insertItem)
  }
  return arr
}

const inOrderExecute = (root, fnc) => {
  if (root === null) {
    return
  }
  inOrderExecute(root.left, fnc)
  fnc(root.val)
  inOrderExecute(root.right, fnc)
}

// https://leetcode.com/problems/all-elements-in-two-binary-search-trees
// Runtime: 264 ms, faster than 31.60% of JavaScript online submissions for All Elements in Two Binary Search Trees.
// Memory Usage: 54 MB, less than 100.00% of JavaScript online submissions for All Elements in Two Binary Search Trees.
/**
 * 오히려 selectionSort로 구현한 getAllElements2보다
 * 단순 무식하게 정렬 sortedArr, sortedArr2를 구한 다음
 * 이 둘을 합쳐서 js 기본 sort를 한번 돌리는게 성능이 더 좋게 나오는 아이러니 ㅜㅜ
 */
const getAllElements = (root1, root2) => {
  const sortedArr = []
  const sortedArr2 = []
  inOrderExecute(root1, val => sortedArr.push(val))
  inOrderExecute(root2, val => sortedArr2.push(val))
  return [...sortedArr, ...sortedArr2].sort((a, b) => a - b)
}

// Runtime: 440 ms, faster than 10.41% of JavaScript online submissions for All Elements in Two Binary Search Trees.
// Memory Usage: 53.7 MB, less than 100.00% of JavaScript online submissions for All Elements in Two Binary Search Trees.
/**
 * sortedArr은 정렬되어 있는 상태에서(inorderTraversal 했으므로) root2를 순회하니까,
 * 이미 정렬되어 있는 상황에서 데이터를 추가해서 정렬을 유지하는거이니,
 * insertion sort가 좋겠구나! 라고 생각해서 구현했지만...
 * 속도가 시원치 않음 ㅜㅜ
 */
const getAllElements2 = (root1, root2) => {
  const sortedArr = []
  inOrderExecute(root1, val => sortedArr.push(val))
  inOrderExecute(root2, val => insertionSort(sortedArr, val))
  return sortedArr
}
