/**
 * https://leetcode-cn.com/explore/interview/card/bytedance/244/linked-list-and-tree/1024/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    const calcLen = node => {
        let len = 0;
        while (node) {
            len++;
            node = node.next;
        }
        return len;
    }
    let lenA = calcLen(headA),
        lenB = calcLen(headB);
    let gap = lenA - lenB;
    if (gap < 0) {
        let tmp = headA;
        headA = headB;
        headB = tmp;
        gap = -gap;
    }
    while (gap--) {
        headA = headA.next;
    }
    while(headA) {
        if(headB === headA) {
            return headB;
        }
        headA = headA.next;
        headB = headB.next;
    }
    return null;
};