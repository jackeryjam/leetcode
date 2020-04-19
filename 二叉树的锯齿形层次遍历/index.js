/**
 * 二叉树的锯齿形层次遍历
 * https://leetcode-cn.com/explore/interview/card/bytedance/244/linked-list-and-tree/1027/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
Array.prototype.top = function () {
    return this[this.length - 1];
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let resAll = [];
    let stack1 = [];
    if(root) stack1.push(root)
    let stack2 = [];
    let res = [];
    while (stack1.length || stack2.length) {
        res = [];
        while (stack1.length) {
            let node = stack1.pop();
            res.push(node.val);
            if (node.left) stack2.push(node.left);
            if (node.right) stack2.push(node.right);
        }
        if (res.length) resAll.push(res);

        res = [];
        while (stack2.length) {
            let node = stack2.pop();
            res.push(node.val);
            if (node.right) stack1.push(node.right);
            if (node.left) stack1.push(node.left);
        }
        if (res.length) resAll.push(res);
    }
    return resAll;
};

console.log(zigzagLevelOrder())