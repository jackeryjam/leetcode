/**
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
const arr2LinkedList = arr => {
    let head = node = new ListNode();
    arr.forEach(element => {
        node.next = new ListNode(element);
        node = node.next;
    });
    head = head.next;
    return head;
}
const linkedList2Arr = node => {
    let res = [];
    while (node) {
        res.push(node.val)
        node = node.next;
    }
    return res;
}
/**
 * https://leetcode-cn.com/explore/interview/card/tencent/222/linked-list/915/
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if(head == null) return head
    let node = head, len = 1;
    while (node.next) {
        len++;
        node = node.next;
    }
    // console.log(len)
    node.next = head;
    let time = len - ((k + 1) % len);
    // console.log(time)
    while (time--) {
        head = head.next;
    }
    let tmp = head.next;
    head.next = null;
    // console.log(linkedList2Arr(tmp))
    return tmp;
};

rotateRight(arr2LinkedList([0, 1, 2]), 4)