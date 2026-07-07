class MaxHeap {
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

  print() {}

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.size;
  }

  // ======================
  // Heapify
  // ======================

  heapifyUp(index) {
    if (index == 0) return;

    let parent = this.getParentIndex(index);
    if (this.heap[index] > this.heap[parent]) {
      this.swap(index, parent);
      this.heapifyUp(parent);
    }
  }

  heapifyDown(index, limit = this.heap.length) {
    
    let largest = index;
    let left = this.getLeftChild(index)
    let right = this.getRightChild(index)


    // if your left and right child goes up to limit then don't do anyting
    if(left < limit && this.heap[left] > this.heap[largest]) {
        largest = left;
    }

    // if your left and right child goes up to limit then don't do anyting
    if(right < limit && this.heap[right] < this.heap[largest]) {
        largest = right;
    }

    if(index != largest) {
        this.swap(index, largest)
        this.hepifyDown(largest)
    }
  }

  // ======================
  // Core Operations
  // ======================

  insert(value) {
    this.heap.push(value)
    this.heapifyUp(this.heap.length-1);
  }

  delete() {
    if(this.heap.length == 0) return;
    if(this.heap.length === 1) return this.heap.pop()
    
    let peek = this.peek()
    this.heap[0] = this.heap.pop()
    this.hepifyDown(0)
    return peek;
  }

  // ======================
  // Heap Operations
  // ======================

  // this is most important
  // don't run your hepifydown on leaf node 
  // do it from back, so you heapify left and right first, and then go to parent to heapify it
  buildMaxHeap() {
    let n = this.heap.length
    for(let i = Math.floor(n/2) -1;i>=0;i--) {
        this.hepifyDown(i)
    }
  }

  heapSort() {
    this.buildMaxHeap()
    let limit = this.heap.length -1;
    while(limit > 0) {
        this.swap(0, limit)
        this.hepifyDown(0, limit)
        limit--;
    }
  }
}
