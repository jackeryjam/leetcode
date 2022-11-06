/**
 * 排序链表
 * https://leetcode-cn.com/explore/interview/card/bytedance/244/linked-list-and-tree/1040/
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
var sortList = function (head) {
    function partition(node) {
        let left = leftTail = new ListNode(),
            pivotVal = node.val,
            right = rightTail = new ListNode()
        while (node) {
            if (node.val <= pivotVal) {
                leftTail.next = node;
                leftTail = node;
            } else {
                rightTail.next = node;
                rightTail = node;
            }
            node = node.next;
        }
        left = left.next
        right = right.next
        leftTail.next = null
        rightTail.next = null
        if(left.next && !right) {
            right = left
            left = left.next
            right.next = null
        }
        return { left, right }
    }
    function quickSort(node) {
        if (!node) {
            return { head: null, tail: null }
        } else if (!node.next) {
            return { head: node, tail: node }
        }
        let { left, right } = partition(node)
        let { head: leftHead, tail: leftTail } = quickSort(left)
        let { head: rightHead, tail: rightTail } = quickSort(right)
        leftTail.next = rightHead
        return { head: leftHead, tail: rightTail || leftTail }
    }
    return quickSort(head).head;
};

function convert(str) {
    let arr = str.split("->");
    let head = node = new ListNode()
    arr.forEach(val => {
        let tmp = new ListNode(val)
        node.next = tmp
        node = tmp
    })
    return head.next;
}

function print(node) {
    let res = [];
    while (node) {
        res.push(node.val);
        node = node.next;
    }
    console.log(res.join("->"))
}

print(sortList(convert("5->2->1->3->0->0->1")))