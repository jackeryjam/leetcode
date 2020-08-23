/**
 * https://leetcode-cn.com/explore/interview/card/tencent/222/linked-list/916/
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head == null) return false;
    let node1 = head, node2 = head;
    while(true) {
        node1 = node1.next;
        node2 = node2.next;
        if(node2 == null) return false;
        node2 = node2.next;
        if(node2 == null) return false;
        if(node2 == node1) return true;
    }
};