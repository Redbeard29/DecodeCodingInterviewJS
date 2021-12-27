import { MinHeap } from "./minHeap.js";
import { MaxHeap } from "./maxHeap.js";

class MedianAges{
    constructor(){
        this.maxHeap = new MaxHeap();
        this.minHeap = new MinHeap();
    }

    insertAge(age){
        if(this.maxHeap.getMax() === null || this.maxHeap.getMax() >= age){
            this.maxHeap.insert(age);
        }
        else{
            this.minHeap.insert(age);
        }

        //balance the heaps so that they are even, or so the maxHeap has 1 more if there's an odd number
        if(this.maxHeap.heap.length > (this.minHeap.heap.length) + 1){
            this.minHeap.insert(this.maxHeap.removeMax());
        }
        else if(this.minHeap.heap.length > this.maxHeap.heap.length){
            this.maxHeap.insert(this.minHeap.removeMin());
        }
    }

    findMedian(){
        //If we have an even number, the average will be the top num from both heaps added together and divided by 2. Otherwise, it will just be the top num in the maxHeap.
        if(this.minHeap.heap.length === this.maxHeap.heap.length){
            let avg = (this.minHeap.getMin() + this.maxHeap.getMax()) / 2 ;
            return avg;
        }
        else{
            return this.maxHeap.getMax();
        }
    }

}

let medianAge = new MedianAges();
medianAge.insertAge(22);
medianAge.insertAge(35);
medianAge.insertAge(15);
console.log("Median age for recommended content is: " + medianAge.findMedian());
medianAge.insertAge(20);
medianAge.insertAge(55);
medianAge.insertAge(30);
console.log("Median age for recommended content is: " + medianAge.findMedian());