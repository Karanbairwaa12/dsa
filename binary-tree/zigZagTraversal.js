/* Structure of Binary Tree Node
class Node{
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}*/

/**
 * @param {Node} root
 * @returns {number[]}
 */

class Solution {
    zigZagTraversal(root) {
        if (!root) return [];

        let qu = [root];
        let front = 0;
        let flag = true;
        let ans = [];

        while (front < qu.length) {
            let size = qu.length - front;
            let arr = new Array(size);

            for (let i = 0; i < size; i++) {
                let node = qu[front++];

                let pos = flag ? i : size - i - 1;
                arr[pos] = node.data;

                if (node.left) qu.push(node.left);
                if (node.right) qu.push(node.right);
            }

            ans.push(...arr);
            flag = !flag;
        }

        return ans;
    }
}