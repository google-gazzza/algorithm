/*
232-implement-queue-using-stacks
leetcode/easy/232. Implement Queue using Stacks
Difficulty: easy
URL: https://leetcode.com/problems/implement-queue-using-stacks/

*/

class MyQueue {
    private queue: number[] = [];
  
    constructor() {
      this.queue = [];
    }
  
    push(x: number): void {
      this.queue.push(x);
    }
  
    pop(): number {
      return this.queue.shift();
    }
  
    peek(): number {
      return this.queue[0];
    }
  
    empty(): boolean {
      return this.queue.length === 0;
    }
  }
  
  /**
   * Your MyQueue object will be instantiated and called as such:
   * var obj = new MyQueue()
   * obj.push(x)
   * var param_2 = obj.pop()
   * var param_3 = obj.peek()
   * var param_4 = obj.empty()
   */
  
  
  // Input
  //   ["MyQueue", "push", "push", "peek", "pop", "empty"]
  //   [[], [1], [2], [], [], []]
  // Output
  //   [null, null, null, 1, 1, false]
  //
  // Explanation
  const myQueue: MyQueue = new MyQueue();
  myQueue.push(1); // queue is: [1]
  myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
  myQueue.peek(); // return 1
  myQueue.pop(); // return 1, queue is [2]
  myQueue.empty(); // return false
  