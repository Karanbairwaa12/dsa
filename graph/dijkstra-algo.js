import MinPriorityQueue from "../heap/priority-queue-min";

let dijkstra = function (V, edges, src) {
	// code here

    let adj = Array.from({length: V}, () => [])
    for(let [u, v, d] of edges) {
        adj[u].push([v, d])
        adj[v].push([u, d])
    }
    let dis = new Array(V).fill(Number.MAX_SAFE_INTEGER);

    let pq = new MinPriorityQueue()
    qu.push([src, 0])
    dis[src] = 0;
    while(qu.length > 0) {
        let [n, d] = qu.pop()
        if(d > dis[n]) continue;
        for(let [node, pr] of adj[n]) {
            if(d + pr < dis[node]) {
                qu.push([node, d+ pr])
            }
        }
    }
};


edges = [
    [0, 1, 2],
    [0, 2, 4],
    [1, 2, 1],
    [1, 3, 7],
    [2, 4, 3],
    [3, 4, 1]
];