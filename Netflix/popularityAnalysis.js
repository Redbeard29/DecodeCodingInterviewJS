//4 - Popularity Analysis:

/* Netflix maintains a popularity score for each of its titles. This popularity score is derived from customer feedback, likes, dislikes, etc. This score is updated weekly and added to the end of the list containing previous scores for the same title. 
This score list helps Netflix identify titles that may be increasing or decreasing in popularity over time. Some titles may be steady in popularity, increasing, decreasing, and fluctuating. We want to identify and separate a title if it is gaining or losing popularity.
We’ll be provided with a list of integers representing the popularity scores of a movie collected over a number of weeks. We need to identify only those titles that are either increasing or decreasing in popularity, so we can separate them from the fluctuating ones for better analysis.
A list is increasing if the expression list[i] <= list[i + 1] evaluates to true for every element at index i. Similarly, a list is decreasing if the expression list[i] >= list[i + 1] evaluates to true for every element at index i. */

function popularityAnalysis(scores){
    let increasing = true;
    let decreasing = true;

    for(let x = 0; x < scores.length; x++){
        if(scores[x] > scores[x + 1]) increasing = false;
        if(scores[x] < scores[x + 1]) decreasing = false;
    }

    return (increasing || decreasing);
}

const movieRatings = [
    [1, 2, 2, 3],
    [4, 5, 6, 3, 4],
    [8, 8, 7, 6, 5, 4, 4, 1]
];

for(const listIdx in movieRatings) {
    const ratingsList = movieRatings[listIdx];
    if(popularityAnalysis(ratingsList)) console.log("Rating scrictly increasing or decreasing");
    else console.log("Ratings fluctuate");
}