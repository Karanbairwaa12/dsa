/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let recursion = function(root1, root2) {
        if (!root1 || !root2) return root1 === root2;
        if(root1.val !== root2.val) return false;

        return recursion(root1.left, root2.right) && recursion(root1.right, root2.left);
    }
    return recursion(root.left, root.right)
};