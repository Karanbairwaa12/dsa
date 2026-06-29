var isBipartite = function (V, edges) {
  let vis = new Array(V + 1).fill(-1);
  console.log(vis, edges.length);

  let constructAdj = function (edg) {
    let adj = Array.from({ length: V + 1 }, () => []);
    console.log(adj);
    for (let [u, v] of edg) {
      adj[u].push(v);
      adj[v].push(u);
    }
    return adj;
  };
  let adj = constructAdj(edges);

  let bfs = function (V, adj) {
    for (let i = 1; i <= V; i++) {
      if (vis[i] == -1) {
        vis[i] = 1;
        let qu = [i];
        while (qu.length > 0) {
          let u = qu.shift();

          for (let v of adj[u]) {
            if (vis[v] == -1) {
              qu.push(v);
              vis[v] = 1 - vis[u];
            } else if (vis[v] == vis[u]) {
              return false;
            }
          }
        }
      }
    }
    return true;
  };

  let dfsAlg = function (V, adj) {
    let vis = new Array(V + 1).fill(-1);
    let dfs = function(i) {
        for(let j = 0; j < adj[i].length;j++) {
            if(vis[adj[i][j]] == -1) {
                vis[adj[i][j]] = 1 - vis[i]
                if(!dfs(adj[i][j])) return false;
            }else if(vis[i] == vis[adj[i][j]]) {
                return false;
            }
        }
        return true;
    }
    for (let i = 1; i <= V; i++) {
      if (vis[i] == -1) {
        vis[i] = 1;
        if(!dfs(i)) return false;
      }
    }
    return true;
  };

  //   bfs(V, adj);
  console.log(dfsAlg(V, adj));
};

// let edges = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [4, 5],
//   [5, 6],
//   [6, 2],
//   [4, 7],
// ];

let edges = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 2],
  [5,8]
];
isBipartite(edges.length, edges);
