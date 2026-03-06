class MyHeap {
	constructor() {
		this.heap = [3, 8, 2, 10, 5, 6];
	}

	getParentIndex(i) {
		return Math.floor((i - 1) / 2);
	}

	getLeftChild(i) {
		let idx = 2 * i + 1;
		if (idx > this.heap.size - 1) {
			return -1;
		}
		return idx;
	}

	getRightChild(i) {
		let idx = 2 * i + 2;
		if (idx > this.heap.size - 1) {
			return -1;
		}
		return idx;
	}

	heapifyUp(i) {
		let curr = i;
		let parrent = this.getParentIndex(curr);

		if (this.heap[curr] > this.heap[parrent]) {
			[this.heap[curr], this.heap[parrent]] = [
				this.heap[parrent],
				this.heap[curr],
			];
			this.heapifyUp(parrent);
		}
	}

	insert(val) {
		this.heap.push(val);
		if (this.heap === 0) return this.heap;

		this.heapifyUp(this.heap.length - 1);
	}

	heapifyDown(i) {
		let curr = i;
		let leftChild = this.getLeftChild(curr);
		let rightChild = this.getRightChild(curr);
		// console.log(curr, leftChild, rightChild)

		if (
			leftChild < this.heap.length &&
			this.heap[curr] < this.heap[leftChild]
		) {
			curr = leftChild;
		}
		if (
			rightChild < this.heap.length &&
			this.heap[curr] < this.heap[rightChild]
		) {
			curr = rightChild;
		}
		// console.log(curr, i)
		if (curr != i) {
			[this.heap[i], this.heap[curr]] = [this.heap[curr], this.heap[i]];
			this.heapifyDown(curr);
		}
	}
	delete() {
		let last = this.heap.pop();
		if (this.heap.length <= 1) return this.heap;

		this.heap[0] = last;
		this.heapifyDown(0);
		return last;
	}

	heapifyDownTill(i, till = this.heap.length) {
		let curr = i;
		let leftChild = this.getLeftChild(curr);
		let rightChild = this.getRightChild(curr);
		// console.log(curr, leftChild, rightChild)

		if (leftChild < till && this.heap[curr] < this.heap[leftChild]) {
			curr = leftChild;
		}
		if (rightChild < till && this.heap[curr] < this.heap[rightChild]) {
			curr = rightChild;
		}
		// console.log(curr, i)
		if (curr != i) {
			[this.heap[i], this.heap[curr]] = [this.heap[curr], this.heap[i]];
			this.heapifyDownTill(curr, till);
		}
	}

	getMaxim() {
        //n/2 to n-1 are leaf node so no need to do this
		let n = this.heap.length;
		for (let i = Math.floor(n/2)-1; i >= 0; i--) {
			// console.log(i)
			this.heapifyDownTill(i);
		}
	}

	heapSort() {
		let n = this.heap.length - 1;
		while (n > 0) {
			let curr = this.heap[n];
			this.heap[n] = this.heap[0];
			this.heap[0] = curr;

			this.heapifyDownTill(0, n);
			n--;
		}
	}
}

let myheap = new MyHeap();

// myheap.insert(3);
// myheap.insert(8);
// myheap.insert(2);
// myheap.insert(10);
// myheap.insert(5);
// myheap.insert(6);
// myheap.insert(12)
// myheap.delete()

console.log(myheap.heap);

myheap.getMaxim();
console.log(myheap.heap);
myheap.heapSort();
console.log(myheap.heap);
