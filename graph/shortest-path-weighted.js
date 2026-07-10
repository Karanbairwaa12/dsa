class MinPriorityQueue {
  constructor(arr = []) {
    this.heap = [...arr];
  }

  // ======================
  // Index Helpers
  // ======================

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChild(index) {
    return 2 * index + 1;
  }

  getRightChild(index) {
    return 2 * index + 2;
  }

  // ======================
  // Utility
  // ======================

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  peek() {
    return this.heap[0];
  }

  print() {
    console.log(this.heap);
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }

  // ======================
  // Heapify
  // ======================

  heapifyUp(index) {
    if (index === 0) return;

    let parent = this.getParentIndex(index);

    if (this.heap[index][0] < this.heap[parent][0]) {
      this.swap(index, parent);
      this.heapifyUp(parent);
    }
  }

  heapifyDown(index, limit = this.heap.length) {
    let smallest = index;

    let left = this.getLeftChild(index);
    let right = this.getRightChild(index);

    if (left < limit && this.heap[left][0] < this.heap[smallest][0]) {
      smallest = left;
    }

    if (right < limit && this.heap[right][0] < this.heap[smallest][0]) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest, limit);
    }
  }

  // ======================
  // Core Operations
  // ======================

  push(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    let root = this.peek();

    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return root;
  }

  // ======================
  // Heap Operations
  // ======================

  buildMinHeap() {
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  // Produces descending order
  heapSort() {
    this.buildMinHeap();

    let limit = this.heap.length - 1;

    while (limit > 0) {
      this.swap(0, limit);
      this.heapifyDown(0, limit);
      limit--;
    }

    return this.heap;
  }
}

let shortestPathMat = function (mat, src, dest) {
  let m = mat.length;
  let n = mat[0].length;
  let dmat = Array.from({ length: m }, () =>
    Array(n).fill(Number.MAX_SAFE_INTEGER),
  );
  let pmat = Array.from({ length: m }, () => Array(n).fill([-1, -1]));

  let pq = new MinPriorityQueue();
  let [sr, sc] = src;
  let [dr, dc] = dest;
  if(mat[sr][sc] == 0 || mat[dr][dc] == 0) return -1
  dmat[sr][sc] = 0;
  pq.push([0, sr, sc]);

  
  let dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  while(pq.size() > 0) {
	
    let [d, i, j] = pq.pop();
	// console.log(d, i,j)
    for (let [a, b] of dir) {
      let bi = i + a;
      let bj = j + b;
      if (
        bi < 0 ||
        bi >= m ||
        bj < 0 ||
        bj >= n ||
        mat[bi][bj] == 0 ||
        (dmat[bi][bj] != Number.MAX_SAFE_INTEGER && d + 1 >= dmat[bi][bj])
      )
        continue;
	  pmat[bi][bj] = [i, j]
	  dmat[bi][bj] = d+1
	  pq.push([d+1, bi, bj])
    }
  }

  if(dmat[dr][dc] != Number.MAX_SAFE_INTEGER) return dmat[dr][dc]
  return -1;
//   console.log(dmat, pmat)
};

let mat = [
  [1, 1, 1, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0],
  [1, 0, 0, 1],
];

let src = [0, 1];
let dest = [2, 2];

shortestPathMat(mat, src, dest);
