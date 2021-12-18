class MaxHeap{
    constructor(){
        this.heap = [];
    }

    insert(val){
        this.heap.push(val);
        this.percolateUp(this.heap.length - 1)
    }

    getMax(){
        if(this.heap){
            return this.heap[0];
        }
        return null;
    }

    removeMax(){
        if(this.heap.length > 1){
            let max = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.maxHeapify(0);
            return max;
        }
        else if(this.heap.length === 1){
            let max = this.heap.pop();
            return max;
        }
        else{
            return null;
        }
    }

    percolateUp(idx){
        let parent = Math.floor((idx - 1) / 2);
        if(idx <= 0){
            return;
        }
        else if(this.heap[parent] < this.heap[idx]){
            let temp = this.heap[parent];
            this.heap[parent] = this.heap[idx];
            this.heap[idx] = temp;
            this.percolateUp(parent);
        }
    }

    maxHeapify(idx){
        let left = (idx * 2) + 1;
        let right = (idx * 2) + 2;
        let largest = idx;
        if(this.heap.length > left && this.heap[largest] < this.heap[left]){
            largest = left;
        }
        if(this.heap.length > right && this.heap[largest] < this.heap[right]){
            largest = right;
        }
        if(largest != idx){
            let temp = this.heap[largest];
            this.heap[largest] = this.heap[idx];
            this.heap[idx] = temp;
            this.maxHeapify(largest);
        }
    }

    buildHeap(arr){
        this.heap = arr;
        for(let x = arr.length - 1; x >= 0; x--){
            this.maxHeapify(x);
        }
    }

}

let heap = new MaxHeap();
heap.insert(12);
heap.insert(10);
heap.insert(-10);
heap.insert(100);

console.log(heap.getMax());