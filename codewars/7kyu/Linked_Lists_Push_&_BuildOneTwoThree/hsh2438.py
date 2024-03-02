# https://www.codewars.com/kata/55be95786abade3c71000079

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


def push(head, data):
    if head is None:
        return Node(data)
    else:
        new_node = Node(data)
        new_node.next = head
    return new_node


def build_one_two_three():
    chained = push(None, 3)
    chained = push(chained, 2)
    chained = push(chained, 1)
    return chained


if __name__ == "__main__":
    assert push(None, 1).data == 1
    assert push(None, 1).next == None
    assert push(Node(1), 2).data == 2
    assert push(Node(1), 2).next.data == 1

    assert build_one_two_three().data == 1
    assert build_one_two_three().next.data == 2
    assert build_one_two_three().next.next.data == 3
    assert build_one_two_three().next.next.next == None
