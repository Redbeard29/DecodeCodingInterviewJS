class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }
    
    push(val){
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
        }

        else{
            let currentNode = this.head;

            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = newNode;
        }

        this.length++;
        return this;
    }

    createLinkedList(list){
        for(let x = 0; x < list.length; x++){
            this.push(list[x]);
        }
    }

    printLinkedList(){
        let listHolder = [];

        let currentNode = this.head;
        while(currentNode){
            listHolder.push(currentNode.data);
            currentNode = currentNode.next;
        }

        console.log(listHolder);
    }

}

export { SinglyLinkedList };