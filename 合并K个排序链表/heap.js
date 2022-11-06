

function ListNode(val) {
    this.val = val;
    this.next = null;
}
let example = [[-10, -9, -9, -3, -1, -1, 0], [-5], [4], [-8], [], [-9, -6, -5, -4, -2, 2, 3], [-3, -3, -2, -1, 0]]
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
    let len = lists.length;
    const adjustDown = k => {
        let tmp = lists[k];
        for (let i = 2 * k + 1; i < len; i = 2 * i + 1) {
            if (lists[i] == null && lists[i + 1] == null) {
                break;
            }
            if (lists[i] == null && lists[i + 1] != null) {
                i = i + 1;
            } else if (lists[i + 1] && lists[i + 1].val < lists[i].val) {
                i = i + 1;
            }
            if (tmp && tmp.val <= lists[i].val) {
                break;
            } else {
                lists[k] = lists[i];
                k = i;
            }
        }
        lists[k] = tmp;
    }
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        adjustDown(i);
    }
    let head = node = new ListNode();
    while (lists[0]) {
        node.next = lists[0];
        lists[0] = lists[0].next;
        node = node.next;
        node.next = null;
        adjustDown(0);
    }
    return head.next;
}


let res = mergeKLists(example);
console.log(res)