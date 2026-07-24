class DisjointSet {
	constructor(size) {
		// Parent array: stores the parent of each element
		this.parent = new Array(size);
		// Rank array: stores the depth of each tree (for union by rank)
		this.rank = new Array(size);
		// Size array: stores the size of each set (alternative to rank)
		this.size = new Array(size);

		// Initialize each element as its own set
		for (let i = 0; i < size; i++) {
			this.parent[i] = i; // Each node is its own parent
			this.rank[i] = 0; // Initial rank is 0
			this.size[i] = 1; // Initial size is 1
		}
	}

	// Find the root of an element with path compression
	find(element) {
		// Base case: found the root
		if (this.parent[element] !== element) {
			// Path compression: recursively find root and update parent
			this.parent[element] = this.find(this.parent[element]);
		}
		return this.parent[element];
	}

	// Alternative: Iterative find with path compression
	findIterative(element) {
		let root = element;

		// Find the root
		while (this.parent[root] !== root) {
			root = this.parent[root];
		}

		// Path compression: make all nodes point directly to root
		while (this.parent[element] !== element) {
			const next = this.parent[element];
			this.parent[element] = root;
			element = next;
		}

		return root;
	}

	// Union two elements by rank (optimized)
	unionByRank(element1, element2) {
		const root1 = this.find(element1);
		const root2 = this.find(element2);

		// Already in the same set
		if (root1 === root2) return;

		// Attach smaller rank tree under larger rank tree
		if (this.rank[root1] < this.rank[root2]) {
			this.parent[root1] = root2;
		} else if (this.rank[root1] > this.rank[root2]) {
			this.parent[root2] = root1;
		} else {
			// Same rank: make one root the parent and increment rank
			this.parent[root2] = root1;
			this.rank[root1]++;
		}
	}

	// Union two elements by size (alternative optimization)
	unionBySize(element1, element2) {
		const root1 = this.find(element1);
		const root2 = this.find(element2);

		if (root1 === root2) return;

		// Attach smaller set under larger set
		if (this.size[root1] < this.size[root2]) {
			this.parent[root1] = root2;
			this.size[root2] += this.size[root1];
		} else {
			this.parent[root2] = root1;
			this.size[root1] += this.size[root2];
		}
	}

	// Check if two elements are in the same set
	areConnected(element1, element2) {
		return this.find(element1) === this.find(element2);
	}

	// Get the number of disjoint sets
	getNumberOfSets() {
		let count = 0;
		for (let i = 0; i < this.parent.length; i++) {
			if (this.parent[i] === i) {
				count++;
			}
		}
		return count;
	}

	// Get all elements in a specific set
	getSetElements(element) {
		const root = this.find(element);
		const elements = [];
		for (let i = 0; i < this.parent.length; i++) {
			if (this.find(i) === root) {
				elements.push(i);
			}
		}
		return elements;
	}

	// Get all sets
	getAllSets() {
		const sets = new Map();
		for (let i = 0; i < this.parent.length; i++) {
			const root = this.find(i);
			if (!sets.has(root)) {
				sets.set(root, []);
			}
			sets.get(root).push(i);
		}
		return Array.from(sets.values());
	}

	// Reset the data structure
	reset() {
		for (let i = 0; i < this.parent.length; i++) {
			this.parent[i] = i;
			this.rank[i] = 0;
			this.size[i] = 1;
		}
	}
}

let minEdgesReq = function (n, edges) {
	// code here
	let ds = new DisjointSet(n);
	let nm = 0;
	for (let i = 0; i < edges.length; i++) {
		let [u, v] = edges[i];
		if (ds.find(u) != ds.find(v)) {
			ds.unionByRank(u, v);
			nm++;
		}
	}
	let rem = edges.length - nm;
	let count = 0;
	for (let i = 0; i < n; i++) {
		if (ds.find(i) == i) {
			count++;
		}
	}

	if (rem >= count - 1) return count - 1;
	return -1;
};
