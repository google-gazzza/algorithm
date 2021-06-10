//1290. Convert Binary Number in a Linked List to Integer

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    
    let result='';
    let len=0;
    let i=0;
    let linked_data = head;
    while(true){
        result += String(linked_data.val);
        if(linked_data.next){
            len ++;
        }else{
            break;
        }   
        
        linked_data = linked_data.next;
    }
    return parseInt(result,2);
};
