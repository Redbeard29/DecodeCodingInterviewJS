class MinHeap{
    constructor(){
        this.heap = [];
    }

    insert(val){
        this.heap.push(val);
        this.percolateUp(this.heap.length - 1)
    }

    getMin(){
        if(this.heap){
            return this.heap[0];
        }
        return null;
    }

    removeMin(){
        if(this.heap.length > 1){
            let min = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.minHeapify(0);
            return min;
        }
        else if(this.heap.length === 1){
            let min = this.heap.pop();
            return min;
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
        else if(this.heap[parent] > this.heap[idx]){
            let temp = this.heap[parent];
            this.heap[parent] = this.heap[idx];
            this.heap[idx] = temp;
            this.percolateUp(parent);
        }
    }

    minHeapify(idx){
        let left = (idx * 2) + 1;
        let right = (idx * 2) + 2;
        let smallest = idx;
        if(this.heap.length > left && this.heap[smallest] > this.heap[left]){
            smallest = left;
        }
        if(this.heap.length > right && this.heap[smallest] > this.heap[right]){
            smallest = right;
        }
        if(smallest != idx){
            let temp = this.heap[smallest];
            this.heap[smallest] = this.heap[idx];
            this.heap[idx] = temp;
            this.minHeapify(smallest);
        }
    }

    buildHeap(arr){
        this.heap = arr;
        for(let x = arr.length - 1; x >= 0; x--){
            this.minHeapify(x);
        }
    }

}

export { MinHeap };