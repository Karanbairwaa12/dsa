const isCyclic = function (V, edges) {
  // code here

  let adj = Array.from({ length: V }, () => []);
  for (let [u, v] of edges) {
    adj[u].push(v);
  }

  
};
let edges = [
  [0, 1],
  [1, 2],
  [2, 0],
  [2, 3],
];
isCyclic(edges.length, edges);
