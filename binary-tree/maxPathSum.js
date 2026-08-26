var maxPathSum = function(root) {
    let max = root.val;
    let recursion = function(root) {
        if(!root) return 0;

        let left = Math.max(0,recursion(root.left));
        let right = Math.max(0,recursion(root.right));
        
        let val = root.val + left + right
        max = Math.max(max, val);

        return root.val + Math.max(left, right)
    }
    recursion(root);
    return max;
};
var maxPathSum = function(root) {
    if(!root) return true;

    let st = [[root, false]];
    let map = new Map();
    let max = -Infinity;
    while(st.length > 0) {
        let [node, visited] = st.pop();

        if(!visited) {
            st.push([node, true]);
            if(node.left) st.push([node.left, false]);
            if(node.right) st.push([node.right,false]);
        }else {
            let left = Math.max(0,map.get(node.left) ?? 0);
            let right = Math.max(0,map.get(node.right) ?? 0);
            max = Math.max(max, root.val + left + right);
            map.set(node, root.val + Math.max(left, right));
        }
    }
    return max;
};