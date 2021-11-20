//The problems in this chapter are all related to content displaying functionality, and how it can be optimized - this is obviously a major goal for a 
//content-streaming service like Netflix. Primarily, we’ll focus on problems related to the search and recommendation functionality.

//7 - Browse Ratings:
//In this feature, the user will be able to randomly browse through movie titles and read their summaries and reviews. We want to 
//enable a Back button so the user can return to the previous title in the viewing history. We also want the user to immediately 
//get the title with the highest viewer rating from their viewing history. We want to implement both of these operations in constant 
//time to provide a good user experience. We’ll be provided with a sequential input of ratings to simulate the user viewing them one 
//by one. For simplicity, we’ll assume that the movie ratings are all unique.

const {MyStack} = require('./stack.js');

class RatingStacks{
    constructor() {
        this.mainStack = new MyStack();
        this.maxStack = new MyStack();
    }

    pop(){
        if(this.mainStack.getTop() === this.maxStack.getTop()){
            this.maxStack.pop();
        }
        return this.mainStack.pop();
    }

    push(rating){
        this.mainStack.push();
        if(this.maxStack.isEmpty() || this.maxStack.getTop() < rating){
            this.maxStack.push(rating);
        }
    }

    getMaxRating(){
        if(!(this.maxStack.isEmpty())) return this.maxStack.getTop();
    }
}

let ratings = new RatingStacks();

ratings.push(5);
ratings.push(0);
ratings.push(2);
ratings.push(4);
ratings.push(6);
ratings.push(3);
ratings.push(10);

console.log(ratings.mainStack.stackList);
console.log("Max Rating: " + ratings.getMaxRating());

ratings.pop();
console.log(ratings.mainStack.stackList);
console.log("Max Rating: " + ratings.getMaxRating());