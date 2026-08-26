/*
Definition for Node
class Node{
    constructor(data){
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
    boundaryTraversal(root) {
        if(!root) return [];
        
        // code here
        let ans = [];
        let isLeafNode = function(node) {
            return !node.left && !node.right
        }
        if(isLeafNode(root)) return [root.data]
        let leftBoundary = function(root) {
            let curr = root;
            while(curr != null) {
                if(!isLeafNode(curr)) {
                    ans.push(curr.data)
                    if(curr.left) {
                        curr = curr.left;
                    }else {
                        curr = curr.right;
                    }
                }else {
                    break;
                }
            }
        }
        let leafNode = function(root) {
            if(isLeafNode(root)) {
                ans.push(root.data)
            }
            
            if(root.left) leafNode(root.left)
            if(root.right) leafNode(root.right)
        }
        let rightNode = function(root) {
            let curr = root;
            let val = []
            while(curr != null) {
                if(!isLeafNode(curr)) {
                    val.push(curr.data)
                    if(curr.right) {
                        curr = curr.right;
                    }else {
                        curr = curr.left;
                    }
                }else {
                    break;
                }
            }
            while(val.length > 0) {
                ans.push(val.pop())
            }
        }
        ans.push(root.data)
        leftBoundary(root.left)
        leafNode(root);
        rightNode(root.right)
        return ans;
    }
}