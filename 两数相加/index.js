/**
 * 两数相加
 * https://leetcode-cn.com/explore/interview/card/bytedance/244/linked-list-and-tree/1022/
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
var addTwoNumbers = function (l1, l2) {
    let num1, num2, tmp, up = 0;
    let first = new ListNode();
    let node = first;
    while (l1 || l2 || up) {

        num1 = l1 && l1.val || 0;
        num2 = l2 && l2.val || 0;

        tmp = num1 + num2 + up;
        up = Math.floor(tmp / 10);

        let tmpNode = new ListNode();
        tmpNode.val = tmp % 10;
        node.next = tmpNode;
        node = tmpNode;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return first.next;
};