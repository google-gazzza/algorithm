// https://leetcode.com/problems/design-skiplist
// Runtime: 168 ms, faster than 87.50% of JavaScript online submissions for Design Skiplist.
// Memory Usage: 55.9 MB, less than 100.00% of JavaScript online submissions for Design Skiplist.

function SkipNode(val) {
  this.val = val
  this.left = this.right = this.up = this.down = null
}

const getTrueOrFalse = () => Math.random() < 0.5
const getFirstNodeOfLayer = node => {
  let target = node
  while (true) {
    if (target.left === null) {
      return target
    }
    target = target.left
  }
}
const getLastNodeOfLayer = node => {
  let target = node
  while (true) {
    if (target.right === null) {
      return target
    }
    target = target.right
  }
}

var Skiplist = function() {
  const firstNode = new SkipNode(-Infinity)
  const lastNode = new SkipNode(Infinity)
  firstNode.right = lastNode
  lastNode.left = firstNode

  this.getStartNode = () => {
    let targetNode = firstNode
    while (targetNode.up !== null) {
      targetNode = targetNode.up
    }
    return targetNode
  }
}

Skiplist.prototype.search = function(target) {
  let targetNode = this.getStartNode()
  while (targetNode !== null) {
    const {val} = targetNode
    if (target > val) {
      targetNode = targetNode.right
    } else if (target === val) {
      return true
    } else {
      targetNode = targetNode.left.down
    }
  }
  return false
}

const coinFlipSpread = (newNode, tempArr) => {
  const tempArrLen = tempArr.length
  const num = newNode.val
  let recentNewNode = newNode
  let trueCount = 0
  while (tempArr.length > 0) {
    if (getTrueOrFalse() === false) {
      break
    }
    trueCount += 1
    const tempNode = tempArr.pop()
    const tempRightNode = tempNode.right
    const newNode = new SkipNode(num)
    newNode.down = recentNewNode
    newNode.left = tempNode
    newNode.right = tempRightNode
    recentNewNode.up = newNode
    tempNode.right = newNode
    tempRightNode.left = newNode
    recentNewNode = newNode
  }
  if (trueCount === tempArrLen && getTrueOrFalse() === true) {
    const firstNode = new SkipNode(-Infinity)
    const lastNode = new SkipNode(Infinity)
    const newNode = new SkipNode(num)
    const firstNodeOfDownLayer = getFirstNodeOfLayer(recentNewNode)
    const lastNodeOfDownLayer = getLastNodeOfLayer(recentNewNode)
    newNode.down = recentNewNode
    newNode.left = firstNode
    newNode.right = lastNode
    firstNode.right = newNode
    firstNode.down = firstNodeOfDownLayer
    lastNode.left = newNode
    lastNode.down = lastNodeOfDownLayer
    recentNewNode.up = newNode
    firstNodeOfDownLayer.up = firstNode
    lastNodeOfDownLayer.up = lastNode
  }
}

Skiplist.prototype.add = function(num) {
  const newNode = new SkipNode(num)
  let target = this.getStartNode()
  const candidateArr = []
  while (target !== null) {
    if (num > target.val) {
      target = target.right
    } else if (num === target.val) {
      candidateArr.push(target)
      target = target.down
    } else {
      candidateArr.push(target.left)
      target = target.left.down
    }
  }

  const lastTargetNode = candidateArr.pop()
  const lastTargetNodeVal = lastTargetNode.val
  if (num > lastTargetNodeVal) {
    const tempRightNode = lastTargetNode.right
    lastTargetNode.right = newNode
    tempRightNode.left = newNode
    newNode.left = lastTargetNode
    newNode.right = tempRightNode
    coinFlipSpread(newNode, candidateArr)
  } else if (num === lastTargetNodeVal) {
    const tempRightNode = lastTargetNode.right
    lastTargetNode.right = newNode
    newNode.left = lastTargetNode
    newNode.right = tempRightNode
    tempRightNode.left = newNode
  } else {
    const tempLeftNode = lastTargetNode.left
    lastTargetNode.left = newNode
    newNode.right = lastTargetNode
    newNode.left = tempLeftNode
    tempLeftNode.right = newNode
    coinFlipSpread(newNode, candidateArr)
  }
}

Skiplist.prototype.erase = function(num) {
  const candidateArr = []
  let target = this.getStartNode()
  let match = false
  while (target !== null) {
    if (num > target.val) {
      target = target.right
    } else if (num === target.val) {
      candidateArr.push(target)
      target = target.down
      match = true
    } else {
      candidateArr.push(target.left)
      target = target.left.down
    }
  }
  
  if (match === false) {
    return false
  }

  while (candidateArr.length > 0) {
    const tempNode = candidateArr.pop()
    if (tempNode.val !== num) {
      break
    }
    const tempLeftNode = tempNode.left
    const tempRightNode = tempNode.right
    if (tempLeftNode.val === -Infinity && tempRightNode.val === Infinity) {
      const leftDownNode = tempLeftNode.down
      const rightDownNode = tempLeftNode.down
      leftDownNode.up = null
      rightDownNode.up = null
      break
    }
    tempLeftNode.right = tempRightNode
    tempRightNode.left = tempLeftNode
  }

  return match
}

// for print SkipList
Skiplist.prototype.print = function() {
  const startNode = this.getStartNode()
  const startNodes = []
  let targetNode = startNode
  while (targetNode !== null) {
    startNodes.push(targetNode)
    targetNode = targetNode.down
  }

  const startNodesLen = startNodes.length
  startNodes.map((firstNodeOfLayer, index)=> {
    let text = ''
    let targetNode = firstNodeOfLayer
    while (targetNode !== null) {
      text += targetNode.val + ' -> '
      targetNode = targetNode.right
    }
    text = text.slice(0, -3)
    console.log(`${startNodesLen - index}'s layer: ${text}`)
  })
}
