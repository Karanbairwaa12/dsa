const isCyclic = function (V, edges) {
  // code here

  let adj = Array.from({ length: V }, () => []);
  for (let [u, v] of edges) {
    adj[u].push(v);
  }

  let vis = new Array(V).fill(0);
  let isPath = new Array(V).fill(0);

  let dfs = function (i) {
    for (let node of adj[i]) {
      if (vis[node] == 0) {
        vis[node] = 1;
        isPath[node] = 1;
        if (dfs(node)) return true;
      } else if (isPath[node] == 1) {
        return true;
      }
    }
    isPath[i] = 0;
    return false;
  };
  for (let i = 0; i < V; i++) {
    if (vis[i] != 0) continue;
    vis[i] = 1;
    isPath[i] = 1;
    if (dfs(i)) return true;
  }
  return false;
};
let edges = [
  [0, 1],
  [1, 2],
  [2, 0],
  [2, 3],
];
isCyclic(edges.length, edges);
