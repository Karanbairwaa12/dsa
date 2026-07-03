let findOrder = function (words) {
  // code here
  let word = [];
  let set = new Set();
  for (let i = 1; i < words.length; i++) {
    let x = 0;
    let y = 0;
    while (x < words[i - 1].length && y < words[i].length) {
      if (words[i - 1][x] != words[i][y]) {
        console.log(words[i - 1][x], words[i][y]);
        word.push([
          words[i - 1][x].codePointAt(0) - 97,
          words[i][y].codePointAt(0) - 97,
        ]);
        break;
      }
      x++;
      y++;
    }
  }

  let adj = {};
  let inDegree = {};
  for (let [u, v] of word) {
    // adj[u] = adj[u] !== undefined ? adj[u].push(v) : [v];
    if (adj[u] == undefined) {
      adj[u] = [v];
    } else {
      adj[u].push(v);
    }
    if (inDegree[v] == undefined) {
      inDegree[v] = 1;
    } else {
      inDegree[v] = inDegree[v] + 1;
    }
    if (inDegree[u] == undefined) inDegree[u] = 0;
    // if(adj[v] === undefined) adj[v] = [];
    // inDegree[v] = inDegree[v] != undefined ? inDegree[v] + 1 : 1;
  }
  //   console.log(word, adj, inDegree);
  let qu = [];
  let st = [];
  for (let [key, value] of Object.entries(inDegree)) {
    if (value == 0) qu.push(Number(key));
  }

  while (qu.length > 0) {
    let val = qu.shift();
    st.push(val);
    for (let node of Object.keys(adj[val])) {
        console.log(node,adj)
      inDegree[node] = inDegree[node] - 1;
      if (inDegree[node] == 0) qu.push(node);
    }
  }
  console.log(qu, st);
};
let words = ["baa", "abcd", "abca", "cab", "cad"];
findOrder(words);
