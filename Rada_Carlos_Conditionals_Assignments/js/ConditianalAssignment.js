
 /*
Carlos Rada
Section 00
Date:
Assignment Name: Conditianal Assignment
 */

//alert("Just Testing");


 // Original Idea -  winning the lottery

 //Random Generator

 var howManyGot = 0;

 var random0 = Math.random() * 40 +1;
 random0 = Math.round(random0);

 console.log(random0);

 var random1 = Math.random() * 40 +1;
 random1 = Math.round(random1);
 console.log(random1);

 var random2 = Math.random() * 40 +1;
 random2 = Math.round(random2);
 console.log(random2);

 var random3 = Math.random() * 40 +1;
 random3 = Math.round(random3);
 console.log(random3);

 var random4 = Math.random() * 40 +1;
 random4 = Math.round(random4);
 console.log(random4);

//Probability

 var p1 = 5/40;
 var p2 = 4/39;
 var p3 = 3/38;
 var p4 = 2/37;
 var p5 = 1/36;

 var probability = 1 /(p1 * p2 * p3 * p4 * p5);
console.log(probability);

var percentage = parseInt(prompt("Enter %"));
 percentage = percentage * .01;
console.log(percentage);

 var ticketsNeeded = probability * percentage;
 ticketsNeeded = Math.round(ticketsNeeded);
 console.log(ticketsNeeded);


 var ticketsBought =  parseInt(prompt("Enter tickets bought"));
 var percentageWin = ticketsBought * 100 / probability;
console.log(percentageWin);

 var lotteryNumbers = [];

 lotteryNumbers[0] = parseInt(prompt("Enter a number 1 - 40"));

 if(lotteryNumbers[0] === ""){
     //This code will run if the user types in nothing
     // Re prompt the user
     lotteryNumbers[0] = prompt("Please do not leave this blank it is required. \n Enter a number 1 - 40.");
 }
 if(isNaN(lotteryNumbers[0])) {
     //This code will run if is Not number
     //re prompt the user for information
     //Give the user a 2 chance
     lotteryNumbers[0] = prompt("Please only type in a number 1 - 40 \n No words");
 }
 if (lotteryNumbers[0] > 40){
     lotteryNumbers[0] = prompt("Do not pick a number 41 or higher. \n Enter a number 1 - 40");
 }

console.log(lotteryNumbers[0]);

 lotteryNumbers[1] = prompt("Enter a number 1 - 40");

 if(lotteryNumbers[1] === ""){
     //This code will run if the user types in nothing
     // Re prompt the user
     lotteryNumbers[1] = prompt("Please do not leave this blank it is required. \n Enter a number 1 - 40.");
 }
 if(isNaN(lotteryNumbers[1])) {
     //This code will run if is Not number
     //re prompt the user for information
     //Give the user a 2 chance
     lotteryNumbers[1] = prompt("Please only type in a number 1 - 40 \n No words");
 }
 if (lotteryNumbers[1] > 40){
     lotteryNumbers[1] = prompt("Do not pick a number 41 or higher. \n Enter a number 1 - 40");
 }
 console.log(lotteryNumbers[1]);


 lotteryNumbers[2] = prompt("Enter a number 1 - 40");

 if(lotteryNumbers[2] === ""){
     //This code will run if the user types in nothing
     // Re prompt the user
     lotteryNumbers[2] = prompt("Please do not leave this blank it is required. \n Enter a number 1 - 40.");
 }
 if(isNaN(lotteryNumbers[2])) {
     //This code will run if is Not number
     //re prompt the user for information
     //Give the user a 2 chance
     lotteryNumbers[2] = prompt("Please only type in a number 1 - 40 \n No words");
 }
 if (lotteryNumbers[2] > 40){
     lotteryNumbers[2] = prompt("Do not pick a number 41 or higher. \n Enter a number 1 - 40");
 }
 console.log(lotteryNumbers[2]);


 lotteryNumbers[3] = prompt("Enter a number 1 - 40");

 if(lotteryNumbers[3] === ""){
     //This code will run if the user types in nothing
     // Re prompt the user
     lotteryNumbers[3] = prompt("Please do not leave this blank it is required. \n Enter a number 1 - 40.");
 }
 if(isNaN(lotteryNumbers[3])) {
     //This code will run if is Not number
     //re prompt the user for information
     //Give the user a 2 chance
     lotteryNumbers[3] = prompt("Please only type in a number 1 - 40 \n No words");
 }
 if (lotteryNumbers[3] > 40){
     lotteryNumbers[3] = prompt("Do not pick a number 41 or higher. \n Enter a number 1 - 40");
 }
 console.log(lotteryNumbers[3]);


 lotteryNumbers[4] = prompt("Enter a number 1 - 40");

 if(lotteryNumbers[4] === ""){
     //This code will run if the user types in nothing
     // Re prompt the user
     lotteryNumbers[4] = prompt("Please do not leave this blank it is required. \n Enter a number 1 - 40.");
 }
 if(isNaN(lotteryNumbers[4])) {
     //This code will run if is Not number
     //re prompt the user for information
     //Give the user a 2 chance
     lotteryNumbers[4] = prompt("Please only type in a number 1 - 40 \n No words");
 }
 if (lotteryNumbers[4] > 40){
     lotteryNumbers[4] = prompt("Do not pick a number 41 or higher. \n Enter a number 1 - 40");
 }
 console.log(lotteryNumbers[4]);




if (random0 === lotteryNumbers[0] ){
    console.log("number "+lotteryNumbers[0]+" is correct");
    howManyGot++;
} else if(random0 === lotteryNumbers[1]){
    console.log("number "+lotteryNumbers[1]+" is correct");
} else if(random0 === lotteryNumbers[2]){
    console.log("number "+lotteryNumbers[2]+" is correct");
} else if(random0 === lotteryNumbers[3]){
    console.log("number "+lotteryNumbers[3]+" is correct");
} else if(random0 === lotteryNumbers[4]){
    console.log("number "+lotteryNumbers[4]+" is correct");
}

 if (random1 === lotteryNumbers[0] ){
     console.log("number "+lotteryNumbers[0]+" is correct");
 } else if(random1 === lotteryNumbers[1]){
     console.log("number "+lotteryNumbers[1]+" is correct");
 } else if(random1 === lotteryNumbers[2]){
     console.log("number "+lotteryNumbers[2]+" is correct");
 } else if(random1 === lotteryNumbers[3]){
     console.log("number "+lotteryNumbers[3]+" is correct");
 } else if(random1 === lotteryNumbers[4]){
     console.log("number "+lotteryNumbers[4]+" is correct");
 }

 if (random2 === lotteryNumbers[0] ){
     console.log("number "+lotteryNumbers[0]+" is correct");
 } else if(random2 === lotteryNumbers[1]){
     console.log("number "+lotteryNumbers[1]+" is correct");
 } else if(random2 === lotteryNumbers[2]){
     console.log("number "+lotteryNumbers[2]+" is correct");
 } else if(random2 === lotteryNumbers[3]){
     console.log("number "+lotteryNumbers[3]+" is correct");
 } else if(random2 === lotteryNumbers[4]){
     console.log("number "+lotteryNumbers[4]+" is correct");
 }

 if (random3 === lotteryNumbers[0] ){
     console.log("number "+lotteryNumbers[0]+" is correct");
 } else if(random3 === lotteryNumbers[1]){
     console.log("number "+lotteryNumbers[1]+" is correct");
 } else if(random3 === lotteryNumbers[2]){
     console.log("number "+lotteryNumbers[2]+" is correct");
 } else if(random3 === lotteryNumbers[3]){
     console.log("number "+lotteryNumbers[3]+" is correct");
 } else if(random3 === lotteryNumbers[4]){
     console.log("number "+lotteryNumbers[4]+" is correct");
 }

 if (random4 === lotteryNumbers[0] ){
     console.log("number "+lotteryNumbers[0]+" is correct");
 } else if(random4 === lotteryNumbers[1]){
     console.log("number "+lotteryNumbers[1]+" is correct");
 } else if(random4 === lotteryNumbers[2]){
     console.log("number "+lotteryNumbers[2]+" is correct");
 } else if(random4 === lotteryNumbers[3]){
     console.log("number "+lotteryNumbers[3]+" is correct");
 } else if(random4 === lotteryNumbers[4]){
     console.log("number "+lotteryNumbers[4]+" is correct");
 }























