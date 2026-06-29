const detecteBfs = function (sr, adj, vis) {
  let qu = [];
  vis[sr] = 1;
  qu.push([sr, -1]);

  while (qu.length > 0) {
    let [x, y] = qu.pop();
    for (let adjNode in adj[x]) {
      if (vis[adjNode] != 1) {
        vis[adjNode] = 1;
        qu.push([adjNode, x]);
      } else if (adjNode != y && y != -1) {
        return true;
      }
    }
  }
  return false;
};

const detecteDfs = function (adj, vis, st) {
  let [x, y] = st.pop();
  if (x >= adj.length) return false;
  for (let val of adj[x]) {
    if (vis[val] != 1) {
      vis[val] = 1;
      st.push([val, x]);
      if(detecteDfs(adj, vis, st)) return true;
    } else if (y != -1 && val != y) {
      return true;
    }
  }
  return false;
};

const isCycle = function (V, adj) {
  let vis = new Array(V).fill(0);
  // Bfs
  //   for (let i = 0; i < vis.length; i++) {
  //     if (1 != vis) {
  //       if(detecteBfs(i, adj, vis)) {
  //         return true;
  //       }
  //     }
  //   }

  //Dfs
  let st = [];
  for (let i = 0; i < V; i++) {
    if (vis[i] != 1) {
      console.log(vis);

      st.push([i, -1]);
      vis[i] = 1;
      if(detecteDfs(adj, vis, st)) return true;
    }
  }
};

let edges = [
  [0, 1],
  [1, 2],
  [2, 3],
];
let V = 4;
isCycle(V, edges);
