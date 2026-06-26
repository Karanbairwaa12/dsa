var findCircleNum = function (arr) {
  if (arr.length === 0) return 0;
  let count = 0;
  let vis = new Array(arr.length).fill(0);
  console.log(vis, "vis");
  let bfs = [];

  console.log("hi", arr);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], vis);
    if (vis[i] === 0) {
      bfs.push(i);
      vis[i] = 1;
      while (bfs.length > 0) {
        let id = bfs.pop();
        console.log(id, "id");
        for (let j = 0; j < arr[id].length; j++) {
          if (arr[id][j] == 1 && vis[j] == 0) {
            bfs.push(j);
            vis[j] = 1;
          }
        }
      }
      count++;
    }
  }
  console.log(count);
  return 0;
};

var findCircleNumSecond = function (arr) {
  if (arr.length === 0) return 0;
  let count = 0;
  let vis = new Array(arr.length).fill(0);

  let bfs = [];

  for (let i = 0; i < vis.length; i++) {
    if (vis[i] == 0) {
      //   bfsAlg(i); // dfs or bfs algo
      count++;
    }
  }
};

let isConnected = [
  [1, 0, 0, 0, 1],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 1, 0],
  [1, 0, 0, 0, 1],
];
findCircleNum(isConnected);
