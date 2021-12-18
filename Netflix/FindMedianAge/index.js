import { MinHeap } from "./minHeap.js";
import { MaxHeap } from "./maxHeap.js";

let minHeap = new MinHeap();
let maxHeap = new MaxHeap();

minHeap.buildHeap([12, 10, -10, 100]);
console.log(minHeap.getMin());

maxHeap.buildHeap([12, 10, -10, 100]);
console.log(maxHeap.getMax());