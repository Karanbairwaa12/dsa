const safeNodes = function (V, edges) {
    let adj = Array.from({length: V}, () => [])
    for(let [u, v] of edges) {
        adj[u].push(v)
    }
    console.log(adj, "adj")
    let vis = new Array(V).fill(0)
    let isPath = new Array(V).fill(0)

    
};

let edges = [[1, 0], [1, 2], [1, 3], [1, 4], [2, 3], [3, 4]]
safeNodes(5, edges)
