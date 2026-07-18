function bellmanFord(V, edges, src) {
	let dist = new Array(V).fill(1e8);
	dist[src] = 0;
	for (let i = 0; i < V - 1; i++) {
		for (let [u, v, w] of edges) {
			if (dist[u] != 1e8 && dist[u] + w < dist[v]) {
				dist[v] = w + dist[u];
			}
		}
	}

	for (let [u, v, w] of edges) {
		if (dist[u] != 1e8 && dist[u] + w < dist[v]) {
			return [-1]
		}
	}
    console.log(dist)
    return dist
}

let V = 5;
let edges = [
	[0, 1, 5],
	[1, 2, 1],
	[1, 3, 2],
	[2, 4, 1],
	[4, 3, -1],
];
let src = 0;

bellmanFord(V, edges, src);
