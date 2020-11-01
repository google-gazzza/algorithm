// implementing-a-queue
// Implementing a Queue
// difficulty: 7kyu
// https://www.codewars.com/kata/55a9c0994cb7e284d500005e

const Queue = function () {
  this.queue = [];
};

Queue.prototype.enqueue = function (item) {
  this.queue.push(item);
};

Queue.prototype.dequeue = function () {
  return this.queue.shift();
};

Queue.prototype.size = function () {
  return this.queue.length;
};
