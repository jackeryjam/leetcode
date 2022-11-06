/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    var hasCycle = function (head) {
        if (head == null) return null;
        let node1 = head, node2 = head;
        while (true) {
            node1 = node1.next;
            node2 = node2.next;
            if (node2 == null) return null;
            node2 = node2.next;
            if (node2 == null) return null;
            if (node2 == node1) return node1;
        }
    };
    let crossNode = hasCycle(head);
    if (crossNode == null) return null;
    while (crossNode != head) {
        crossNode = crossNode.next;
        head = head.next;
    }
    return crossNode;
};