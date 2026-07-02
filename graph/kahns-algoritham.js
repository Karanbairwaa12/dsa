function topoSort(adj) {
  let inDegree = new Array(adj.length).fill(0);
  for (let i = 0; i < adj.length; i++) {
    for (let j = 0; j < adj[i].length; j++) {
      inDegree[adj[i][j]]++;
    }
  }

  let qu = [];
  let topOrder = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] == 0) qu.push(i);
  }
  while (qu.length > 0) {
    let k = qu.shift();
    topOrder.push(k);
    for (let node of adj[k]) {
      inDegree[node]--;

      if (inDegree[node] == 0) {
        qu.push(node);
      }
    }
  }
  return topOrder
  console.log(topOrder);
}

let abj = [[1], [2], [3], [], [5], [1, 2]];
topoSort(abj);
