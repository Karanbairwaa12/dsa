
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Return true if a should come before b
    compare(a, b) {
        if (a[0] !== b[0]) {
            return a[0] < b[0];
        }

        return a[1] < b[1];
    }

    // Add element
    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // Remove and return smallest element
    pop() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const result = this.heap[0];

        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return result;
    }

    // Move element up
    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (this.compare(this.heap[parent], this.heap[index])) {
                break;
            }

            // Swap
            [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    // Move element down
    heapifyDown() {
        let index = 0;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            let smallest = index;

            if (
                left < this.heap.length &&
                this.compare(this.heap[left], this.heap[smallest])
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.compare(this.heap[right], this.heap[smallest])
            ) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            // Swap
            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }

    // Look at smallest without removing
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    // Check if empty
    isEmpty() {
        return this.heap.length === 0;
    }
}

```javascript
topView(root) {

    let map = {};

    let minAxis = 0;
    let maxAxis = 0;

    function findout(root, axis) {

        if (!root) return;

        // Store only the first node at this axis
        if (map[axis] === undefined) {
            map[axis] = root.data;
        }

        minAxis = Math.min(minAxis, axis);
        maxAxis = Math.max(maxAxis, axis);

        // Keep searching even if axis already exists
        findout(root.left, axis - 1);
        findout(root.right, axis + 1);
    }

    findout(root, 0);

    let list = [];

    for (let axis = minAxis; axis <= maxAxis; axis++) {
        list.push(map[axis]);
    }

    return list;
}
```
