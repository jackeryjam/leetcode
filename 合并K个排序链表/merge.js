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
let example = [[1, 4, 5], [1, 3, 4]]
    .map(listNodeArr => {
        let head = node = new ListNode();
        listNodeArr.forEach(val => {
            node.next = new ListNode(val);
            node = node.next;
        });
        return head.next;
    })
/**
 * 
 * @param {ListNode[]} lists 
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) {
        return null;
    } else if (lists.length === 1) {
        return lists[0];
    } else if (lists.length === 2) {
        let head = node = new ListNode();
        while (lists[0] && lists[1]) {
            if (lists[0].val > lists[1].val) {
                node.next = new ListNode(lists[1].val);
                lists[1] = lists[1].next;
            } else {
                node.next = new ListNode(lists[0].val);
                lists[0] = lists[0].next;
            }
            node = node.next;
        }
        node.next = lists[0] ? lists[0] : lists[1];
        return head.next;
    } else {
        let len = lists.length;
        let mid = Math.floor(len / 2);
        let left = mergeKLists(lists.slice(0, mid));
        let right = mergeKLists(lists.slice(mid, len));
        return mergeKLists([left, right]);
    }
};
let res = mergeKLists(example);
console.log(res)