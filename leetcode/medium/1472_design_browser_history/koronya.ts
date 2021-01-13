// [Medium] 1472. Design Browser History
// 1472_design_browser_history

// https://leetcode.com/problems/design-browser-history
// Runtime: 204 ms, faster than 87.50% of TypeScript online submissions for Design Browser History.
// Memory Usage: 50.5 MB, less than 12.50% of TypeScript online submissions for Design Browser History.
class BrowserHistory {
  history: string[]
  candidates: string[]

  constructor(homepage: string) {
    this.history = [homepage]
    this.candidates = []
  }

  visit(url: string): void {
    this.history.push(url)
    this.candidates.length = 0
  }

  back(steps: number): string {
    const historyLength: number = this.history.length
    const spliceIndex: number = steps >= historyLength ? 1 : historyLength - steps
    const forwardCandidates: string[] = this.history.splice(spliceIndex)
    this.candidates = [...forwardCandidates, ...this.candidates]

    return this.history[this.history.length - 1]
  }

  forward(steps: number): string {
    const backCandidates: string[] = this.candidates.splice(0, steps)
    this.history = [...this.history, ...backCandidates]

    return this.history[this.history.length - 1]
  }
}
