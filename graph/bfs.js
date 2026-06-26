const bfsfind = function (adj) {
	// code here
	if (adj.length == 0) return [];
	let vis = new Array(adj.length).fill(0);
	let root = [];
	let bfs = [0];
	vis[0] = 1;
	while (bfs.length > 0) {
		let id = bfs.shift();
        root.push(id)
		let nebur = adj[id];
		for (let i = 0; i < nebur.length; i++) {
			if (vis[nebur[i]] != 1) {
				bfs.push(nebur[i]);
				vis[nebur[i]] = 1;
			}
		}
	}
};

let adj  = [[2, 3, 1], [0], [0, 4], [0], [2]]
bfsfind(adj)
