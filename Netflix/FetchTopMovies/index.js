//The problems in this chapter are all related to content displaying functionality, and how it can be optimized - this is obviously a major goal for a 
//content-streaming service like Netflix. Primarily, we’ll focus on problems related to the search and recommendation functionality.

//2: Fetch Top Movies - Now, we need to build a criterion so the top movies from multiple countries will combine into a single list of top-rated movies. 
//In order to scale, the content search is performed in a distributed fashion. Search results for each country are produced in separate lists. Each member of a 
//given list is ranked by popularity, with 1 being most popular and popularity decreasing as the rank number increases. We’ll be given n lists that are all sorted 
//in ascending order of popularity rank. We have to combine these lists into a single list that will be sorted by rank in ascending order, meaning from best to worst. 
//Keep in mind that the ranks are unique to individual movies and a single rank can be in multiple lists.

import { SinglyLinkedList, Node } from "./linkedList.js";

function mergeTwoCountries(firstListHead, secondListHead){

    if(!firstListHead){
        return secondListHead;
    }
    else if(!secondListHead){
        return firstListHead;
    }
    
    let dummyPointer = new Node(-1);

    let p1 = firstListHead;
    let p2 = secondListHead;
    let prev = dummyPointer;

    while(p1 && p2){

        if(p1.data <= p2.data){
            prev.next = p1;
            p1 = p1.next;
        }
        else{
            prev.next = p2;
            p2 = p2.next;
        }
        prev = prev.next;   
    }

    if(p1 != null){
        prev.next = p1;
    }
    else{
        prev.next = p2;
    }
    return dummyPointer.next;
}

function mergeAllLists(lists){
    if(lists.length > 0){
        let result = lists[0]
        for(let x = 1; x < lists.length; x++){
            result = mergeTwoCountries(result, lists[x]);
        }
        return result;
    }
    return("No lists to merge");
}


let myFirstList = new SinglyLinkedList();
let mySecondList = new SinglyLinkedList();
let myThirdList = new SinglyLinkedList();
myFirstList.createLinkedList([11, 41, 51, 62, 78, 81, 82, 93]);
myFirstList.push(98);
myFirstList.push(300);
mySecondList.createLinkedList([21, 23, 42, 53, 55, 67, 69, 72, 308]);
mySecondList.push(3005);
myThirdList.createLinkedList([25, 56, 66, 72, 81, 82, 83, 84, 85, 86, 95, 99]);

mergeAllLists([myFirstList.head, mySecondList.head, myThirdList.head]);

myFirstList.printLinkedList();