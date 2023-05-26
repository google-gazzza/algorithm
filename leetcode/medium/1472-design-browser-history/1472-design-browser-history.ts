/*
1472-design-browser-history
leetcode/medium/1472. Design Browser History
URL: https://leetcode.com/problems/design-browser-history/

NOTE: Description
NOTE: Constraints
  - 1 <= nums.length <= 1000
  - 1 <= nums[i], original <= 1000

NOTE: Explanation
NOTE: Reference
*/

class HistoryNode {
  public prev: HistoryNode | null;
  public next: HistoryNode | null;
  public domain: string;

  constructor(
    prev: HistoryNode | null,
    domain: string,
  ) {
    this.prev = prev;
    this.next = null;
    this.domain = domain;
  }
}

class BrowserHistory {
  private head: HistoryNode | null = null;

  constructor(homepage: string) {
    this.head = new HistoryNode(null, homepage);
  }

  visit(url: string): void {
    if (this.head.next) {
      this.head.next.prev = null;
    }
    this.head.next = new HistoryNode(this.head, url);
    this.head = this.head.next;
  }

  back(steps: number): string {
    while (steps > 0 && this.head.prev !== null) {
      this.head = this.head.prev;
      steps -= 1;
    }
    return this.head.domain;
  }

  forward(steps: number): string {
    while (steps > 0 && this.head.next !== null) {
      this.head = this.head.next;
      steps -= 1;
    }
    return this.head.domain;
  }
}

const browserHistory: BrowserHistory = new BrowserHistory('leetcode.com');
browserHistory.visit('google.com');       // You are in "leetcode.com". Visit "google.com"
browserHistory.visit('facebook.com');     // You are in "google.com". Visit "facebook.com"
browserHistory.visit('youtube.com');      // You are in "facebook.com". Visit "youtube.com"
browserHistory.back(1);                   // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
browserHistory.back(1);                   // You are in "facebook.com", move back to "google.com" return "google.com"
browserHistory.forward(1);                // You are in "google.com", move forward to "facebook.com" return "facebook.com"
browserHistory.visit('linkedin.com');     // You are in "facebook.com". Visit "linkedin.com"
browserHistory.forward(2);                // You are in "linkedin.com", you cannot move forward any steps.
browserHistory.back(2);                   // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
browserHistory.back(7);                   // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"
