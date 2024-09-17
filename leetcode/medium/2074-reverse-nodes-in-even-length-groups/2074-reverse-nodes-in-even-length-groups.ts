// leetcode/medium/2074. Reverse Nodes in Even Length Groups
// 2074-reverse-nodes-in-even-length-groups
// URL: https://leetcode.com/problems/reverse-nodes-in-even-length-groups/description/

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

function isEvenGroup(n: number) {
  return n % 2 === 0;
}

function reverseEvenLengthGroups(head: ListNode | null): ListNode | null {
  let groupNum = 1;
  let prevGroupLastNode: ListNode = null;
  let cur = head;
  const headCopy = head;

  while (cur) {
    let nodes: ListNode[] = [];
    let prevGroupLastNodeCandidate = null;
    let newCur = cur;

    let fakeCur = cur;
    let nodesCount = 0;

    while (fakeCur && nodesCount < groupNum) {
      fakeCur = fakeCur.next;
      nodesCount += 1;
    }

    for (let i = 0; i < groupNum; i += 1) {
      if (!newCur) {
        break;
      }
      if (isEvenGroup(groupNum) || nodesCount % 2 === 0) {
        nodes.push(newCur);
      }

      if (i === groupNum - 1) {
        prevGroupLastNodeCandidate = newCur;
      }

      newCur = newCur.next;
    }

    if ((isEvenGroup(groupNum) && nodesCount % 2 === 0) || nodesCount % 2 === 0) {
      const nextGroupStart: ListNode = newCur;

      nodes = nodes.reverse();

      for (let i = 0; i < nodes.length - 1; i += 1) {
        nodes[i].next = nodes[i + 1];
      }

      prevGroupLastNode.next = nodes[0];
      nodes[nodes.length - 1].next = nextGroupStart;
      prevGroupLastNodeCandidate = nodes[nodes.length - 1];
      newCur = nextGroupStart;
    }
    prevGroupLastNode = prevGroupLastNodeCandidate;
    cur = newCur;
    // cur will be appoint of last element of group
    groupNum += 1;
  }

  return headCopy;
}