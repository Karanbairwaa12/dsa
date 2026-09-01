/* Definition for Node
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @return {Number[]}
 */

class Solution {
    paths(root) {
        if(!root) return []
        // code here
        let res = [];
        let findout = function(root, path){
            path.push(root.data);
            if(root.left) findout(root.left, path);
            if(root.right) findout(root.right, path);
            if(!root.left && !root.right) {
                res.push([...path])
            }
            path.pop()
        }
        findout(root, [])
        return res;
    }
}