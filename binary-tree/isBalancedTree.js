var isBalanced = function(root) {
    let recursion = function(root) {
        if(!root) return 0;
        
        let left = recursion(root.left);
        if(left == -1) return -1;
        let right = recursion(root.right);
        if(right == -1) return -1;

        if(Math.abs(left - right) > 1) return -1;
        return 1 + Math.max(left, right);
    }
    let ans = recursion(root)
    return ans == -1 ? false : true;
};

var isBalanced = function(root) {
    if(!root) return true;

    let st = [[root, false]];
    let map = new Map();

    while(st.length > 0) {
        let [node, visited] = st.pop();

        if(!visited) {
            st.push([node, true]);
            if(node.left) st.push([node.left, false]);
            if(node.right) st.push([node.right,false]);
        }else {
            let left = map.get(node.left) ?? 0;
            let right = map.get(node.right) ?? 0;
            if(Math.abs(left - right) > 1) return false;

            map.set(node, 1 + Math.max(left, right));
        }
    }
    return true;
};