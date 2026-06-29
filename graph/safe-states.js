const safeNodes = function (V, edges) {
  let adj = Array.from({ length: V }, () => []);
  for (let [u, v] of edges) {
    adj[u].push(v);
  }
  console.log(adj, "adj");
  let vis = new Array(V).fill(0);
  let isPath = new Array(V).fill(0);
  let isSafe = [];
  let tn = new Array(adj.length).fill(0);
  for (let i = 0; i < adj.length; i++) {
    if (adj[i].length == 0) {
      tn[i] = 1;
    }
  }
  let dfs = function(i) {
    for(let node of adj[i]) {
        if(vis[node] == 0) {
            vis[node] = 1;
            isPath[node] = 1;
            if(dfs(i)) return true;
        }else if(isPath[node] == 1)  {
            return false;
        }
    }
    isPath[i] = 0;
    if(tn[i] == 1) return true;
    return false;
  }

  for (let i = 0; i < V; i++) {
    if (tn[i] != 0) {
      isSafe.push(i);
    } else {
      if (dfs(i)) isSafe.push(i);
    }
  }

  console.log(isSafe)
};

let edges = [
  [1, 0],
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 3],
  [3, 4],
];
safeNodes(5, edges);
