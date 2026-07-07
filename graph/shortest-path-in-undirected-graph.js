let shortestPath = function (V, edges, src, dest) {
	// code here
	let adj = Array.from({ length: V }, () => []);
	for (let [u, v] of edges) {
		adj[u].push(v);
		adj[v].push(u);
	}
	
	let dis = new Array(V).fill(Infinity);
	// let vis = new Array(V).fill(0);

	let bfs = function (i) {
		let qu = [[i, 0]];
        dis[i] = 0;
		while (qu.length > 0) {
			let [x, y] = qu.shift();
			for (let node of adj[x]) {
				// if (vis[node] == 0) {
					let m = y + 1;
					if (m < dis[node]) {
						qu.push([node, m]);
                        dis[node] = m;
					}
				// }
			}
		}
	};
    
	// vis[src] = 1;
	bfs(src);
    console.log(adj, dis);

	if (dis[dest] == Infinity) return -1;
	return dis[dest];
};

//weight of each edges is 1;
let V = 9;
let edges = [
	[0, 1],
	[0, 3],
	[1, 2],
	[3, 4],
	[4, 5],
	[2, 6],
	[5, 6],
	[6, 7],
	[6, 8],
	[7, 8],
];
let src = 0;
let dest = 8;
shortestPath(V, edges, src, dest);
