// [JS][6kyu] Finding the Incorrect Value in a Binary Tree
// finding-the-incorrect-value-in-a-binary-tree
// https://www.codewars.com/kata/63f13a354a828b0041979359/train/javascript

// 0 -> next two elements
// 1 -> 1 + next two elements
// 2 -> 2 + next two elements
// 3 -> 3 + next two elements
// 4 -> 4 + next two elements
// 5 -> 5 + next two elements
// 6 -> 6 + next two elements
// 7 -> 7 + next two elements
// 8 -> 8 + next two elements

const findIncorrectValue = (tree) => {
  const treeLevel = Math.floor(Math.log2(tree.length + 1)) - 1
  const limit = 2 ** treeLevel - 1
  const isUpperLeafIndexLevel = (index) => Math.floor(Math.log2(index + 1)) === treeLevel - 1
  const candidateList = []
  for (let i = 0; i < limit; i += 1 || 0) {
    const now = tree[i]
    const leftItem = tree[2 * i + 1]
    const rightItem = tree[2 * i + 2]
    if (now !== leftItem + rightItem) {
      candidateList.push({ index: i, value: leftItem + rightItem })
    }
  }
  if (candidateList.length === 1 && isUpperLeafIndexLevel(candidateList[0].index)) {
    const childLeftIndex = 2 * candidateList[0].index + 1
    const childRightIndex = childLeftIndex + 1
    return [childRightIndex, tree[candidateList[0].index] - tree[childLeftIndex]]
  }

  const result = candidateList.pop()
  return [result.index, result.value]
}

findIncorrectValue([28, 13, 14, 6, 7, 5, 9])
findIncorrectValue([27, 14, 14, 6, 7, 5, 9])
findIncorrectValue([27, 13, 15, 6, 7, 5, 9])
findIncorrectValue([29, 13, 16, 5, 8, 9, 1])

findIncorrectValue([21, 9, 10, 4, 5, 4, 6, 2, 2, 1, 4, 1, 3, 2, 4])
findIncorrectValue([19, 9, 10, 5, 5, 4, 6, 2, 2, 1, 4, 1, 3, 2, 4])
findIncorrectValue([19, 9, 10, 4, 5, 4, 6, 3, 2, 1, 4, 1, 3, 2, 4])
