class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(value) {
        this.heap.push(value);
        this._heapifyUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return min;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;
            let smallest = index;

            if (leftChildIdx < length && this.heap[leftChildIdx] < this.heap[smallest]) {
                smallest = leftChildIdx;
            }
            if (rightChildIdx < length && this.heap[rightChildIdx] < this.heap[smallest]) {
                smallest = rightChildIdx;
            }
            if (smallest === index) break;
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
    }
}

function solution(scoville, K) {
    let heap = new MinHeap();
    let mixCount = 0;

    for (let num of scoville) {
        heap.push(num);
    }

    while (heap.size() > 1 && heap.peek() < K) {
        let first = heap.pop();
        let second = heap.pop();
        let newFood = first + second * 2;
        heap.push(newFood);
        mixCount++;
    }

    return heap.peek() >= K ? mixCount : -1;
}
