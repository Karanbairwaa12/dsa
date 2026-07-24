class MinPriorityQueueNew {
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

const countPaths = function (V, edges) {
	// code here

	let adj = Array.from({ length: V }, () => Array().fill([]));
	for (let [u, v, w] of edges) {
		adj[u].push([v, w]);
		adj[v].push([u, w]);
	}
	// console.log(adj);

	let pq = new MinPriorityQueueNew();
	let dist = new Array(V).fill(Number.MAX_SAFE_INTEGER);
	dist[0] = 0;
	pq.push([0, 0]);
	let count = 0;

	while (pq.size() > 0) {
		let [tw, node] = pq.pop();
		for (let [adjNode, adjW] of adj[node]) {
			if (tw + adjW <= dist[adjNode]) {
				// count = 1;
				if (tw + adjW == dist[adjNode] && adjNode == V - 1) {
					count++;
                    continue;
				}else if(tw + adjW < dist[adjNode] && adjNode == V - 1) {
                    count = 1;
                }
				dist[adjNode] = tw + adjW;
				pq.push([tw + adjW, adjNode]);
				// count = 1;
			}
		}
	}

	console.log(dist, count);
};

const countPathsTwo = function (V, edges) {
	// code here

	let adj = Array.from({ length: V }, () => Array().fill([]));
	for (let [u, v, w] of edges) {
		adj[u].push([v, w]);
		adj[v].push([u, w]);
	}
	// console.log(adj);

	let pq = new MinPriorityQueueNew();
	let dist = new Array(V).fill(Number.MAX_SAFE_INTEGER);
    let counts = new Array(V).fill(0);
	dist[0] = 0;
    counts[0] = 1;
 	pq.push([0, 0]);

	while (pq.size() > 0) {
		let [tw, node] = pq.pop();
		for (let [adjNode, adjW] of adj[node]) {
			if(tw + adjW < dist[adjNode]) {
                dist[adjNode] = tw + adjW;
                pq.push([tw+adjW, adjNode])
                counts[adjNode] = counts[node]
            }else if(tw + adjW == dist[adjNode]){
                counts[adjNode] = (counts[adjNode] + counts[node])%10000000007
            }
		}
	}

	console.log(dist, counts);
};

let V = 6;
let edges = [
	[0, 2, 3],
	[0, 4, 2],
	[0, 5, 7],
	[2, 3, 1],
	[2, 5, 5],
	[5, 3, 3],
	[5, 1, 4],
	[1, 4, 1],
	[4, 5, 5],
];

countPaths(V, edges);
countPathsTwo(V, edges);

