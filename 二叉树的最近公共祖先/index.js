/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let res;
    const traverse = node => {
        if (node == null) return false;
        let count = 0;
        if (node == p || node == q) {
            count++;
        }
        if (traverse(node.left)) {
            count++;
        }
        if (traverse(node.right)) {
            count++;
        }
        if (count == 2) {
            res = node;
        }
        console.log(node.val, count)
        if (count > 0) return true;
    }
    traverse(root);
    return res;
};

let root = {
    val: 3,
    left: {
        val: 5,
        left: {
            val: 6
        },
        right: {
            val: 2,
            left: {
                val: 7
            },
            right: {
                val: 4
            }
        }
    },
    right: {
        val: 1,
        left: {
            val: 0
        }, 
        right: {
            val: 8
        }
    }
}

console.log( lowestCommonAncestor(root, 5, 1))