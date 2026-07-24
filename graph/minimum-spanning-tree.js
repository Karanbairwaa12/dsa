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
let spanningTree = function (V, edges) {
	// code here
	let adj = Array.from({ length: V }, () => Array().fill([]));
	for (let [u, v, w] of edges) {
		adj[u].push([v, w]);
		adj[v].push([u, w]);
	}
	let vis = new Array(V).fill(0);
	let mst = [];
	let sum = 0;
	let pq = new MinPriorityQueueNew();
	pq.push([0, 0, -1]);

	while (pq.size() > 0) {
		let [w, n, p] = pq.pop();
		if (vis[n] == 1) continue;
		vis[n] = 1;
		sum = sum + w;
		for (let [adjNode, edgeW] of adj[n]) {
			if (vis[adjNode] == 1) continue;
			pq.push([edgeW, adjNode, n]);
		}
		if (p !== -1) mst.push([p, n]);
	}

	return sum;
};

let V = 3;
let Edges = [
	[0, 1, 5],
	[1, 2, 3],
	[0, 2, 1],
];

spanningTree(V, Edges)
