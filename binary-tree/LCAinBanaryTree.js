/* Structure of binary tree node
class Node{
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}*/

/**
 * @param {Node} root
 * @param {number} n1
 * @param {number} n2
 * @returns {Node}
 */

class Solution {
    lca(root, n1, n2) {
        if(!root) return null;
        
        if (root.data === n1 || root.data === n2) {
            return root;
        }
        let left = this.lca(root.left, n1, n2);
        let right = this.lca(root.right, n1, n2)
        
        if(left && right) return root;
        
        
        return left || right;
        
    }
}