/*
Definition for Node
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
 * @returns {number[]}
 */

class Solution {
    bottomView(root) {
        // code here
        let map ={}
        let qu = [[root,0]];
        let front = 0;
        let minAxis = 0;
        let maxAxis = 0
        while(front < qu.length) {
            let [node, axis] = qu[front]
            front++;
            minAxis = Math.min(minAxis, axis);
            maxAxis = Math.max(maxAxis, axis);
            map[axis] = node.data;
            if(node.left) qu.push([node.left, axis - 1])
            if(node.right) qu.push([node.right, axis + 1])
        }

        let list =[]
        for(let i =minAxis;i <= maxAxis;i++) {
            list.push(map[i])
        }
        return list;
        
    }
}