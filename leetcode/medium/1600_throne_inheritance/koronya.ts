// [Medium] 1600. Throne Inheritance
// 1600_throne_inheritance

// https://leetcode.com/problems/throne-inheritance
// Runtime: 616 ms, faster than 50.00% of TypeScript online submissions for Throne Inheritance.
// Memory Usage: 81.2 MB, less than 100.00% of TypeScript online submissions for Throne Inheritance.


class ThroneInheritance {
  deathSet: Set<string>
  childMap: Map<string, string[]>
  kingName: string
  constructor(kingName: string) {
    this.deathSet = new Set()
    this.childMap = new Map()
    this.childMap.set(kingName, [])
    this.kingName = kingName
  }

  birth(parentName: string, childName: string): void {
    this.childMap.get(parentName)!.push(childName)
    this.childMap.set(childName, [])
  }

  death(name: string): void {
    this.deathSet.add(name)
  }

  getInheritanceOrder(): string[] {
    const dfs = (nodeName: string, resultOrder: string[]) => {
      if (this.deathSet.has(nodeName) === false) {
        resultOrder.push(nodeName)
      }
      this.childMap.get(nodeName)!.forEach((childName) => dfs(childName, resultOrder))
      return resultOrder
    }
  
    return dfs(this.kingName, [])
  }
}
