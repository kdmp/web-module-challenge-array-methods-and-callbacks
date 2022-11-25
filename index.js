const { fifaData } = require("./fifa.js");

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note. 

💡 HINT: You may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final

// First we need to isolate teams from 2014:

const teams14 = /* in this function -> */ fifaData.filter(
  /* filterEachItemInArray -> */
  (item) /*and return all items from 2014 -> */ => item.Year === 2014

  // This creates a new function called teams14 and it contains an array of objects that are all of the games played in the 2014 world cup
);

// Next we need to isolate the final game from the world cup in 2014:

const finalGame = teams14.filter((item) => item.Stage === "Final");

// Finally, we need to isolate the name of the home team that played in the final game of the 2014 woprld cup:

const homeTeamFinal14 = finalGame.map(
  (item) =>
    /* Must use bracket notation since we are isolating a string that contains spaces -> */ item[
      "Home Team Name"
    ]
);

console.log(homeTeamFinal14);

// Why do I need to use map on this last function insead of filter?

// Through these three steps we isolate the name of the home team from the final game of the 2014 world cup.

//(b) Away Team name for 2014 world cup final

// We have already isolated the teams AND the final game from the 2014 world cup. We only need to isolate the away team from the final game

const awayTeamFinal14 = finalGame.map((item) => item["Away Team Name"]);

console.log(awayTeamFinal14);

//(c) Home Team goals for 2014 world cup final

const homeGoalsFinal14 = finalGame.map((item) => item["Home Team Goals"]);

console.log(homeGoalsFinal14);

//(d) Away Team goals for 2014 world cup final

const awayGoalsFinal14 = finalGame.map((item) => item["Away Team Goals"]);

console.log(awayGoalsFinal14);

//(e) Winner of 2014 world cup final */

const winnerFinal14 = finalGame.map((item) => item["Win conditions"]);

console.log(winnerFinal14);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive an array as a parameter that will take the fifa data as its argument
2. Return an array of objects with the data of the teams that made it to the final stage

💡 HINT - you should be looking at the stage key inside of the objects
*/

function getFinals(array) {
  return array.filter((item) => item.Stage === "Final");
}

console.log(getFinals(fifaData));

const finalGames = fifaData.filter((item) => item.Stage === "Final");

console.log(finalGames);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Return an array called years containing all of the years in the getFinals data set*/

// FIRST OFF we want to create a function that returns and array. We are going to call that array years. That (new) array will contain only the years data from all the objects in the array returned by the getFinals function. So, the function called getYears will be an array containing a  list of years of all the final games played in every world cup.

// THEN we need to first go into our getFinals function (from task 2) in order to access all of the final games played in every world cup. Because, the function getFinals returns an array of only THAT info: Only the final games played in every world cup. AND getFinals uses the array fifaData as a parameter because the only way to get the info from just the finals games is to go into the fifaData array and filter out the finals games. All of this happens in the line of code immidiately after the function declaration getYears. Once that info is accessed it it assigned to the variable finalsGames.

// NEXT we create a new variable called years. The value assigned to years is going to be an array of all the years in the getFinals data set. In order to make this happen we access our new array called finalsGames, which is just getFinals(fifaData). So, we call finalsGames.map and write an arrow function: finalsGames.map((item) => item.Year). This says go into finalsGames, filter through that data set of objects and for every object in that data set return the value for the 'Year' key. So, if a finals game was played in the year 1930 then this function will return the number 1930.

// AFTER THAT return the array called years that we created: return years. We return the array years because that is ultimetly what this task is telling us to do: Return an array called years containing all of the years in the getFinals data set

/* THEN we could log getYears to the console and input fifaData and getFinals as arguments to our parameters, like this -> console.log(getYears(fifaData, getFinals)); But that looks complicated and a bit confusing. 
In order to simplify what we log to the console we can create a new variable and assign it the value of the function getYears with our arguments, 
like this -> const finalsYears = getYears(fifaData, getFinals);
*/

// FINALLY we console.log(finalsYears);

function getYears(array, callback) {
  const finalsGames = /* getFinals(fifaData) -> */ callback(array);
  const years = finalsGames.map((item) => item.Year);
  return years;
}

const finalsYears = getYears(fifaData, getFinals);

console.log(finalsYears);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Determines the winner (home or away) of each `finals` game. 
💡 HINT: Don't worry about ties for now (Please see the README file for info on ties for a stretch goal.)
4. Returns the names of all winning countries in an array called `winners` */

function getWinners(array, callback) {
  const finalsGames2 = /* getFinals(fifaData) -> */ callback(array);
  const winners = finalsGames2.map((item) => {
    if (item["Home Team Goals"] > item["Away Team Goals"]) {
      return item["Home Team Name"];
    } else item["Home Team Goals"] < item["Away Team Goals"];
    return item["Away Team Name"];
  });

  return winners;
}

const finalsWinners = getWinners(fifaData, getFinals);

console.log(finalsWinners);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Receive a callback function as the third parameter that will take getYears from task 3 as an argument
4. Receive a callback function as the fourth parameter that will take getWinners from task 4 as an argument
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

💡 HINT: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, _getFinals, _getYears, _getWinners) {
  // get years for finals
  const years = _getYears(array, _getFinals);
  // get winners for finals
  const winners = _getWinners(array, _getFinals);

  // initialize array for strings to be pushed to
  const strs = [];

  for (let i = 0; i < years.length; i++) {
    // push each string to strs
    strs.push(`In ${years[i]}, ${winners[i]} won the world cup!`);
  }

  return strs;
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function `getAverageGoals` to do the following: 
 1. Receive a callback function as a parameter that will take `getFinals` (from task 2) as an argument; ensure you pass in `fifaData` as its argument
 
 💡 HINT: Example of invocation: `getAverageGoals(getFinals(fifaData));`

 2. Calculate the AVERAGE number of the TOTAL home team goals AND TOTAL away team goals scored PER MATCH

 3. Round to the second decimal place and return the value
 
 💡 HINT: use .reduce, .toFixed (refer to MDN for syntax), and do this in 2 steps) 
 
*/

function getAverageGoals(array) {
  // use reduce to sum up home team goals and away team goals
  const goalSum = array.reduce((total, eachItemInArray) => {
    return (
      total +
      eachItemInArray["Home Team Goals"] +
      eachItemInArray["Away Team Goals"]
    );
  }, 0);
  // isolate out number of games
  const numGames = array.length;
  // average the sum and round to two decimal places
  const avg = goalSum / numGames;
  // return home and away goal averages
  return avg.toFixed(2);
}

/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo() {
  console.log("its working");
  return "bar";
}
foo();
module.exports = {
  foo,
  getFinals,
  getYears,
  getWinners,
  getWinnersByYear,
  getAverageGoals,
};
