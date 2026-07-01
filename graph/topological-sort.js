let topoSort = function (V, edges) {
	// code here
	let vis = new Array(V).fill(0);
	let adj = Array.from({ length: V }, () => []);
	for (let [u, v] of edges) {
		adj[u].push(v);
	}
	let st = [];
	let dfs = function (i) {
		vis[i] = 1;
		for (let node of adj[i]) {
			if (vis[node] == 0) {
				dfs(node);
			}
		}
		st.push(i);
	};
	for (let i = 0; i < V; i++) {
		if (vis[i] == 0) {
			dfs(i);
		}
	}
	// console.log(st, st.reverse())
	return st.reverse();
};
let V = 4
let edges = [[3, 0], [1, 0], [2, 0]]
topoSort(V, edges)
