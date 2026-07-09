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

		if (this.heap[index][1] < this.heap[parent][1]) {
			this.swap(index, parent);
			this.heapifyUp(parent);
		}
	}

	heapifyDown(index, limit = this.heap.length) {
		let smallest = index;

		let left = this.getLeftChild(index);
		let right = this.getRightChild(index);

		if (left < limit && this.heap[left][1] < this.heap[smallest][1]) {
			smallest = left;
		}

		if (right < limit && this.heap[right][1] < this.heap[smallest][1]) {
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

let shortestPath = function (V, E, edges) {
  // code here
  let adj = Array.from({length: V+1}, () => [])
  for(let [u, v, d] of edges) {
    adj[u].push([v, d])
    adj[v].push([u, d])
  }

//   console.log(adj)
  let dist = new Array(V+1).fill(Number.MAX_SAFE_INTEGER)
  
  dist[1] =0;
  let pq = new MinPriorityQueue()
  let parent = new Array(V+1).fill(1)
  pq.push([1, 0])
  while(pq.size() > 0){
    let [node, dis] = pq.pop()
    if(dis > dist[node]) continue;
    for(let [adjNode, edgeWeight] of adj[node]) {
        if(dis + edgeWeight < dist[adjNode]) {
          dist[adjNode] = dis + edgeWeight
          pq.push([adjNode, dist[adjNode]])
		  parent[adjNode] = node
        }
    }
  }
//   console.log(dist, parent)
  if(dist[V] != -1) {
	let arr = [V]
	let node = V;
	while(parent[node] != node) {
		arr.push(parent[node])
		node = parent[node]
	}
	arr.push(dist[V])
	// console.log(arr.reverse())
	return arr.reverse()
  }
  return [-1]
};

let V = 5
let E = 6
let edges = [[1,2,2],[1,4,1],[2,3,4],[2,5,5],[4,3,3],[3,5,1]]
shortestPath(V, E, edges)
