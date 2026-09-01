/**
 * @param {Node} root
 * @returns {number[]}
 */

/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
class Solution {
    topView(root) {
        // code here
        let map = {};

        let minAxis = 0;
        let maxAxis = 0;

        // function findout(root, axis) {

        //     if (!root) return;

        //     // Store only the first node at this axis
        //     if (map[axis] === undefined) {
        //         map[axis] = root.data;
        //     }

            // minAxis = Math.min(minAxis, axis);
            // maxAxis = Math.max(maxAxis, axis);

        //     // Keep searching even if axis already exists
        //     findout(root.left, axis - 1);
        //     findout(root.right, axis + 1);
        // }

        // findout(root, 0);
        let qu = [[root,0]]
        let front = 0;
        while(front < qu.length) {
            let [node, axis] = qu[front];
            front++;
            if(map[axis] == undefined) map[axis] = node.data;
            
            minAxis = Math.min(minAxis, axis);
            maxAxis = Math.max(maxAxis, axis);
            if(node.left) qu.push([node.left, axis-1])
            if(node.right) qu.push([node.right, axis + 1])
        }
        let list = []
        for(let i = minAxis;i<=maxAxis;i++) {
            list.push(map[i]);
        }
        return list;
    }
}