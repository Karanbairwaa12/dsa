/* Structure of Binary Tree Node
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @returns {number[]}
 */

class Solution {
    leftView(root) {
        // code here
        let map = {}
        let maxDepth = 0;
        let recursion = function(root, depth) {
            if(!root) return;
            if(map[depth] === undefined) {
                map[depth] = root.data;
            }
            maxDepth = Math.max(maxDepth, depth)
            if(root.left) recursion(root.left, depth +1)
            if(root.right) recursion(root.right, depth +1)
        }
        recursion(root, 0)
        let list = []
        for(let i =0;i<=maxDepth;i++) {
            list.push(map[i])
        }
        return list;
    }
}