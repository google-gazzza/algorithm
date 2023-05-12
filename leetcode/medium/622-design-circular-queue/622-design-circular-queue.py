# leetcode/medium/622. Design Circular Queue
# 622-design-circular-queue
# URL: https://leetcode.com/problems/design-circular-queue/description/?envType=study-plan-v2&id=programming-skills
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference

class MyCircularQueue:

    def __init__(self, k: int):
        self.queue = []
        self.queueSize = k

    def enQueue(self, value: int) -> bool:
        if (len(self.queue) < self.queueSize):
            self.queue.append(value)
            return True

        return False

    def deQueue(self) -> bool:
        if (len(self.queue) > 0):
            self.queue.pop(0)
            return True

        return False

    def Front(self) -> int:
        if (len(self.queue) > 0):
            return self.queue[0]

        return -1

    def Rear(self) -> int:
        if (len(self.queue) > 0):
            return self.queue[-1]

        return -1

    def isEmpty(self) -> bool:
        return len(self.queue) == 0

    def isFull(self) -> bool:
        return len(self.queue) == self.queueSize


# Your MyCircularQueue object will be instantiated and called as such:
# obj = MyCircularQueue(k)
# param_1 = obj.enQueue(value)
# param_2 = obj.deQueue()
# param_3 = obj.Front()
# param_4 = obj.Rear()
# param_5 = obj.isEmpty()
# param_6 = obj.isFull()

myCircularQueue = MyCircularQueue(3);
print(myCircularQueue.enQueue(1))  # // return True
print(myCircularQueue.enQueue(2))  # // return True
print(myCircularQueue.enQueue(3))  # // return True
print(myCircularQueue.enQueue(4))  # // return False
print(myCircularQueue.Rear())  # // return 3
print(myCircularQueue.isFull())  # // return True
print(myCircularQueue.deQueue())  # // return True
print(myCircularQueue.enQueue(4))  # // return True
print(myCircularQueue.Rear())  # // return 4
