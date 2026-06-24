const dfsfind = function (adj) {
	// code here
	if (adj.length == 0) return [];
	let vis = new Array(adj.length).fill(0);
	let dfs = [];
	let st = [0];
	vis[0] = 1;
	let recursive = function (st) {
		if (st.length == 0) return;

		let val = st.pop();
		dfs.push(val);
		for (let i = 0; i < adj[val].length; i++) {
			if (vis[adj[val][i]] == 0) {
				st.push(adj[val][i]);
				vis[adj[val][i]] = 1;
				recursive(st);
			}
		}
	};
	recursive(st);
	// console.log(dfs)
	return dfs;
};

let adj  = [[2, 3, 1], [0], [0, 4], [0], [2]]
dfsfind(adj)
