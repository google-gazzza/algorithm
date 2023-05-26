// [Medium] 1600. Throne Inheritance
// 1600_throne_inheritance

// https://leetcode.com/problems/throne-inheritance
// Runtime: 640 ms, faster than 50.00% of JavaScript online submissions for Throne Inheritance.
// Memory Usage: 80.4 MB, less than 50.00% of JavaScript online submissions for Throne Inheritance.

/**
 * @param {string} kingName
 */
const ThroneInheritance = function (kingName) {
  this.deathSet = new Set()
  this.childMap = new Map()
  this.childMap.set(kingName, [])
  this.kingName = kingName
}

/**
 * @param {string} parentName
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function (parentName, childName) {
  this.childMap.get(parentName).push(childName)
  this.childMap.set(childName, [])
}

/**
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function (name) {
  this.deathSet.add(name)
}

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function () {
  const dfs = (nodeName, resultOrder) => {
    if (this.deathSet.has(nodeName) === false) {
      resultOrder.push(nodeName)
    }
    this.childMap.get(nodeName).forEach((childName) => dfs(childName, resultOrder))
    return resultOrder
  }

  return dfs(this.kingName, [])
}

const obj = new ThroneInheritance('king')
obj.getInheritanceOrder() //?
obj.birth('king', 'logan')
obj.getInheritanceOrder() //?
obj.death('logan')
obj.getInheritanceOrder() //?
obj.birth('king', 'hosea')
obj.getInheritanceOrder() //?
obj.birth('hosea', 'leonard')
obj.getInheritanceOrder() //?
obj.birth('hosea', 'carl')
obj.getInheritanceOrder() //?
obj.death('hosea')
obj.getInheritanceOrder() //?
obj.birth('king', 'ronda')
obj.getInheritanceOrder() //?
obj.birth('leonard', 'betty')
obj.getInheritanceOrder() //?
obj.birth('carl', 'helen')
obj.getInheritanceOrder() //?
obj.birth('ronda', 'alfred')
obj.getInheritanceOrder() //?
obj.birth('helen', 'luella')
obj.getInheritanceOrder() //?
obj.birth('ronda', 'lisa')
obj.getInheritanceOrder() //?
obj.death('luella')
obj.getInheritanceOrder() //?
obj.birth('lisa', 'kary')
obj.getInheritanceOrder() //?
obj.birth('lisa', 'angela')
obj.getInheritanceOrder() //?
obj.birth('carl', 'herman')
obj.getInheritanceOrder() //?
obj.death('ronda')
obj.getInheritanceOrder() //?

// const obj = new ThroneInheritance('king')
// obj.birth('king', 'andy') // order: king > andy
// obj.birth('king', 'bob') // order: king > andy > bob
// obj.birth('king', 'catherine') // order: king > andy > bob > catherine
// obj.birth('andy', 'matthew') // order: king > andy > matthew > bob > catherine
// obj.birth('bob', 'alex') // order: king > andy > matthew > bob > alex > catherine
// obj.birth('bob', 'asha') // order: king > andy > matthew > bob > alex > asha > catherine
// obj.getInheritanceOrder() // return ["king", "andy", "matthew", "bob", "alex", "asha", "catherine"]
// obj.death('bob') // order: king > andy > matthew > bob > alex > asha > catherine
// obj.getInheritanceOrder() // return ["king", "andy", "matthew", "alex", "asha", "catherine"]

// const obj = new ThroneInheritance('king')
// obj.birth('king', 'andy') // order: king > andy
// obj.birth('king', 'bob') // order: king > andy > bob
// obj.birth('bob', 'bob-s1') // order: king > andy > bob
// obj.birth('andy', 'andy-s1') // order: king > andy > bob
// obj.getInheritanceOrder() //?
// obj.birth('king', 'catherine') // order: king > andy > bob > catherine
// obj.birth('andy', 'matthew') // order: king > andy > matthew > bob > catherine
// obj.birth('bob', 'alex') // order: king > andy > matthew > bob > alex > catherine
// obj.birth('bob', 'asha') // order: king > andy > matthew > bob > alex > asha > catherine
// obj.getInheritanceOrder() // return ["king", "andy", "matthew", "bob", "alex", "asha", "catherine"]
// obj.death('bob') // order: king > andy > matthew > bob > alex > asha > catherine
// obj.getInheritanceOrder() // return ["king", "andy", "matthew", "alex", "asha", "catherine"]
