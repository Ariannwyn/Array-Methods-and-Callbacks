import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

// Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

// (a) Home Team name for 2014 world cup final

let homeName = fifaData.filter((home)=>{
    return home.Year == "2014" && home.Stage=="Final";
});
console.log(homeName[0]["Home Team Name"])

// (b) Away Team name for 2014 world cup final

let awayName = fifaData.filter((away)=>{
    return away.Year == "2014" && away.Stage=="Final";
});
console.log(awayName[0]["Away Team Name"])

// (c) Home Team goals for 2014 world cup final

let homeGoals = fifaData.filter((home)=>{
    return home.Year == "2014" && home.Stage=="Final";
});
console.log(homeGoals[0]["Home Team Goals"])

// (d) Away Team goals for 2014 world cup final

let awayGoals = fifaData.filter((away)=>{
    return away.Year == "2014" && away.Stage=="Final";
});
console.log(awayGoals[0]["Away Team Goals"])

// (e) Winner of 2014 world cup final 

if (homeGoals[0]["Home Team Goals"] >= awayGoals[0]["Away Team Goals"]){
    console.log(homeName[0]["Home Team Name"])
}
else if (homeGoals[0]["Home Team Goals"] >= awayGoals[0]["Away Team Goals"]){
    console.log(awayName[0]["Away Team Name"])
}
else { console.log("Tie")}


/* Task 2: Create a function called getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(fifaData) {
    let arrayFinals = fifaData.filter((data)=>{
        return data.Stage === "Final";
    })
    return arrayFinals;
}
getFinals(fifaData)
console.log(getFinals(fifaData))


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {
    let years = [];
    let tempArray = cb(fifaData).map((data)=> {
        years.push(data.Year);
        });
    return years;   
};
getYears(getFinals);
console.log(getYears(getFinals))

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {
    let winners = [];
    cb(fifaData).filter((data)=>{
        if (data["Home Team Goals"]+data["Half-time Home Goals"] > data["Away Team Goals"]+data["Half-time Away Goals"]){
            winners.push(data["Home Team Name"])
        }
    })
    cb(fifaData).filter((data)=>{
        if (data["Home Team Goals"]+data["Half-time Home Goals"] < data["Away Team Goals"]+data["Half-time Away Goals"]){
            winners.push(data["Away Team Name"])
        }
    })
    cb(fifaData).filter((data)=>{
        if (data["Home Team Goals"]+data["Half-time Home Goals"] == data["Away Team Goals"]+data["Half-time Away Goals"]){ 
            var words = data["Win conditions"].split(" ");
            winners.push(words[0]);
            
        }
    })
    return(winners)
};
console.log(getWinners(getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback, cb) {
    let printArray = [];
    for (var i=0;i<callback.length;i++){
    printArray.push(`In ${cb[i]}, ${callback[i]} won the world cup!`)
    }
    return printArray;
};

console.log(getWinnersByYear(getWinners(getFinals), getYears(getFinals)));


/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the average number of 
home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    homeGoals = [];
    awayGoals = [];
    for (var i=0;i<data.length;i++){
    homeGoals.push(data[i]["Home Team Goals"]+data[i]["Half-time Home Goals"]);
    awayGoals.push(data[i]["Away Team Goals"]+data[i]["Half-time Away Goals"]);
    }
    let homeAverage = homeGoals.reduce((acc, value)=> acc + value, 0) / homeGoals.length;
    let awayAverage = awayGoals.reduce((acc, value)=> acc + value, 0) / awayGoals.length;
    console.log(homeAverage, awayAverage)
    return awayAverage, homeAverage;
    /* 

    take home team goals and half home goals = home goals
    take away team goals and half away goals = away goals
    home all objects = add all "home goals" in array (use reduce)
    get average 
    away all objects = add all "away goals" in array (use reduce)
    get average
    console log: home average goals + away average goals.
    
    */

};

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(fifaData) {
    let arrayFinals = fifaData.filter((data)=>{
        return data.Stage === "Final" && data.Stadium[1] === "World";
    })

    /*
    get all objects that have stage = final and stadium = world
    then use "getWinners" function to show which team had the most goals
    then calculate whether home or away had the most goals on average
    */

};

getGoals(fifaData);
console.log(getGoals(fifaData))














/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
