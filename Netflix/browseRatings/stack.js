class MyStack{
    constructor(){
        this.stackList = [];
    }

    isEmpty(){
        return this.stackList.length === 0;
    }

    getTop(){
        if(this.isEmpty()){
            return null;
        }
        return this.stackList[this.stackList.length - 1];
    }

    getSize(){
        return this.stackList.length;
    }

    push(rating){
        this.stackList.push(rating);
    }

    pop(){
        if(this.stackList.getSize() === 0){
            return null;
        }
        return this.stackList.pop();
    }
}