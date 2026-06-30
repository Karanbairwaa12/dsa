const safeNodes = function (V, edges) {
  let adj = Array.from({ length: V }, () => []);
  for (let [u, v] of edges) {
    adj[u].push(v);
  }

  let vis = new Array(V).fill(0);
  let psf = new Array(V).fill(0);

  let dfs = function (i) {
    for (let node of adj[i]) {
      if (vis[node] == 0) {
        vis[node] = 1;
        psf[node] = 1;
        if (!dfs(node)) return false;
      } else if (vis[node] == 1 && psf[node] == 1) {
        return false;
      }
    }
    psf[i] = 0;
    return true;
  };

  for (let i = 0; i < V; i++) {
    if (vis[i] == 0) {
      vis[i] = 1;
      psf[i] = 1;
      dfs(i);
    }
  }

  let states = []
  for(let i =0;i<psf.length;i++) {
    if(psf[i] == 0) {
      states.push(i)
    }
  }

  console.log(states);
};

let edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 6],
  [6, 7],
  [3, 5],
  [5, 6],
  [8, 1],
  [8, 9],
  [9, 10],
  [10, 8],
  [11, 9],
];
safeNodes(12, edges);
