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

function maxRemove(stones) {
    
  let [rows, cols] = stones[stones.length - 1];
  let arr = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let [i, j] of stones) {
    arr[i][j] = 1;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] == 0) continue;

      let id = i * cols + j;

      for (let col = 0; col < cols; col++) {
        if (col != j && arr[i][col] == 1) {
          let newnode = i * cols + col;
          let root1 = ds.find(id);
          let root2 = ds.find(newnode);
          if (root1 != root2) {
            ds.unionByRank(id, newnode);
          }
        }
      }

      for (let row = 0; row < rows; row++) {
        if (row != i && arr[row][j] == 1) {
          let newnode = row * cols + j;
          let root1 = ds.find(id);
          let root2 = ds.find(newnode);
          if (root1 != root2) {
            ds.unionByRank(id, newnode);
          }
        }
      }
    }
  }

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] == 0) continue;

      let id = i * cols + j;

        if(ds.find(id) == id) {
            count++;
        }
    }
  }


}

let stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
maxRemove(stones);