/**
 * 合并两个有序链表
 * https://leetcode-cn.com/explore/interview/card/bytedance/244/linked-list-and-tree/1048/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let head = l = new ListNode();
    while (l1 || l2) {
        if (l1 && l2) {
            if(l1.val < l2.val) {
                l.next = l1;
                l1 = l1.next;
            } else {
                l.next  = l2;
                l2 = l2.next;
            }
        } else if (l1) {
            l.next  = l1;
            l1 = l1.next;
        } else if (l2) {
            l.next  = l2;
            l2 = l2.next;
        }
        l = l.next;
    }
    return head.next;
};