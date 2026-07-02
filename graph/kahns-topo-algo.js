let khanTopoSort = function (V, edges) {
	// code here
    let inDegree = new Array(V).fill(0)
	// let vis = new Array(V).fill(0);
	let adj = Array.from({ length: V }, () => []);
	for (let [u, v] of edges) {
		adj[u].push(v);
	}

    for(let i =0;i<adj.length;i++) {
        for(let j = 0;j<adj[i].length;j++) {
            inDegree[adj[i][j]]++;
        }
    }
    let qu =[]
    for(let i=0;i<inDegree.length;i++) {
        if(inDegree[i] ==0) qu.push(i)
    }

    let st = [];
    while(qu.length > 0) {
        let val = qu.shift()
        st.push(val)
        for(let node of adj[val]) {
            inDegree[node]--;
            if(inDegree[node] == 0) qu.push(node)
        }
    }
    console.log(st)
};
let V = 4
let edges = [[3, 0], [1, 0], [2, 0]]
khanTopoSort(V, edges)
