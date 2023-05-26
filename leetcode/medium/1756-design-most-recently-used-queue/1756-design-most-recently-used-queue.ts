/*
1756-design-most-recently-used-queue
leetcode/medium/1756. Design Most Recently Used Queue
URL: https://leetcode.com/problems/design-most-recently-used-queue/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

class MRUQueue {
  private queue: number[];

  constructor(n: number) {
    this.queue = new Array<number>(n);

    for (let i = 0; i < n; i += 1) {
      this.queue[i] = i + 1;
    }
  }

  fetch(k: number): number {
    this.queue.push(this.queue.splice(k - 1, 1)[0]);

    return this.queue[this.queue.length - 1];
  }
}

MRUQueue;
mRUQueue = new MRUQueue(8); // Initializes the queue to [1,2,3,4,5,6,7,8].
mRUQueue.fetch(3); // Moves the 3rd element (3) to the end of the queue to become [1,2,4,5,6,7,8,3] and returns it.
mRUQueue.fetch(5); // Moves the 5th element (6) to the end of the queue to become [1,2,4,5,7,8,3,6] and returns it.
mRUQueue.fetch(2); // Moves the 2nd element (2) to the end of the queue to become [1,4,5,7,8,3,6,2] and returns it.
mRUQueue.fetch(8); // The 8th element (2) is already at the end of the queue so just return it.
