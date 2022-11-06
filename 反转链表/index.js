/**
 * 反转链表
 * https://leetcode-cn.com/explore/interview/card/bytedance/244/linked-list-and-tree/1038/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head || !head.next) {
        return head;
    }

    let node = head.next,
        tmp,
        pre = head;
    pre.next = null;

    while (node) {
        tmp = node;
        node = node.next;
        tmp.next = pre;
        pre = tmp;
    }
    return pre;
};
l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(3);
reverseList(l);