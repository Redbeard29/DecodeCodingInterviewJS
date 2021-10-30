//The problems in this chapter are all related to content displaying functionality, and how it can be optimized - this is obviously a major goal for a 
//content-streaming service like Netflix. Primarily, we’ll focus on problems related to the search and recommendation functionality.

//1: Group titles - Let the user see relevant search results in spite of minor typos. This requires grouping similar titles

function groupTitles(titles){
    let results = {}
    for(let word of titles){
        let count = new Array(26).fill(0);
        for (let char of word){
            idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
            count[idx] ++;
        }
        let key = count;
        if (key in results){
            results[key].push(word);
        }
        else{
            results[key] = [word];
        }
    }
    let wordList = [];
    for(let key in results){
        wordList.push(results[key]);
    }
    return wordList;
}

let titles = ["duel", "dule", "speed", "spede", "duel", "cars", "cheese", "chesee", "cehese", "toes", "tose"];
let groupedTitlesList = groupTitles(titles);
// console.log(groupedTitlesList);
let query = "tose";

for(let group of groupedTitlesList){
    if(group.includes(query)){
        console.log(group);
    }
}

