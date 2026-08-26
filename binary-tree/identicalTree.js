var isSameTree = function(p, q) {

    // let recursion = function(p, q) {
    //     if (!p || !q) return p === q;
    //     if (p.val !== q.val) return false;

    //     return recursion(p.left, q.left) && recursion(p.right, q.right)
    // }

    // return recursion(p, q)
    if(!p || !q) return p === q;
    let st = [[p,q]];
    while(st.length > 0) {
        let [node1, node2] = st.pop();
        if (!node1 && !node2) continue;
        if (!node1 || !node2) return false;
        if (node1.val !== node2.val) return false;

        st.push([node1.left, node2.left])
        st.push([node1.right, node2.right]);
    }
    return true;
};