var diameterOfBinaryTree = function(root) {
    let max = 0;
    let recursion = function(root) {
        if(!root) return 0;

        let left = recursion(root.left);
        let right = recursion(root.right);
        let val = left + right;
        max = Math.max(max, val);
        return 1 + Math.max(left, right);
    }
    recursion(root);
    return max;

    // if(!root) return true;

    // let st = [[root, false]];
    // let map = new Map();
    // let max = 0;
    // while(st.length > 0) {
    //     let [node, visited] = st.pop();

    //     if(!visited) {
    //         st.push([node, true]);
    //         if(node.left) st.push([node.left, false]);
    //         if(node.right) st.push([node.right,false]);
    //     }else {
    //         let left = map.get(node.left) ?? 0;
    //         let right = map.get(node.right) ?? 0;
    //         max = Math.max(max, left + right);
    //         map.set(node, 1 + Math.max(left, right));
    //     }
    // }
    // return max;

};