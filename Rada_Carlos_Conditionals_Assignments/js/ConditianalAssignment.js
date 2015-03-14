
 /*
Carlos Rada
Section 00
Date:
Assignment Name: Conditianal Assignment
 */

//alert("Just Testing");

 alert(" Lets play the CyG Lottery! \n Choose 5 lottery numbers ranging from 1 - 40. \n Your numbers cannot repeat!");

 // Original Idea -  winning the lottery

 var lotteryNumbers = [];

 lotteryNumbers[0] = parseInt(prompt("Enter a number 1 - 40"));

 if(lotteryNumbers[0] === ""){
     //This code will run if the user types in nothing
     // Re prompt the user
     lotteryNumbers[0] = parseInt(prompt("Please do not leave this blank it is required. \n Enter a number 1 - 40."));
 }
 if(isNaN(lotteryNumbers[0])) {
     //This code will run if is Not number
     //re prompt the user for information
     //Give the user a 2 chance
     lotteryNumbers[0] = parseInt(prompt("Please only type in a number 1 - 40 \n No words"));
 }
 if (lotteryNumbers[0] > 40){
     lotteryNumbers[0] = parseInt(prompt("Do not pick a number 41 or higher. \n Enter a number 1 - 40"));
 }

 console.log(lotteryNumbers[0]);


 lotteryNumbers[1] = parseInt(prompt("Enter a number 1 - 40"));

 if(lotteryNumbers[1] === ""){
     //This code will run if the user types in nothing
     // Re prompt the user
     lotteryNumbers[1] = parseInt(prompt("Please do not leave this blank it is required. \n Enter a number 1 - 40."));
 }
 if(isNaN(lotteryNumbers[1])) {
     //This code will run if is Not number
     //re prompt the user for information
     //Give the user a 2 chance
     lotteryNumbers[1] = parseInt(prompt("Please only type in a number 1 - 40 \n No words"));
 }
 if (lotteryNumbers[1] > 40){
     lotteryNumbers[1] = parseInt(prompt("Do not pick a number 41 or higher. \n Enter a number 1 - 40"));
 }

 console.log(lotteryNumbers[1]);


 lotteryNumbers[2] = parseInt(prompt("Enter a number 1 - 40"));

 if(lotteryNumbers[2] === ""){
     //This code will run if the user types in nothing
     // Re prompt the user
     lotteryNumbers[2] = parseInt(prompt("Please do not leave this blank it is required. \n Enter a number 1 - 40."));
 }
 if(isNaN(lotteryNumbers[2])) {
     //This code will run if is Not number
     //re prompt the user for information
     //Give the user a 2 chance
     lotteryNumbers[2] = parseInt(prompt("Please only type in a number 1 - 40 \n No words"));
 }
 if (lotteryNumbers[2] > 40){
     lotteryNumbers[2] = parseInt(prompt("Do not pick a number 41 or higher. \n Enter a number 1 - 40"));
 }

 console.log(lotteryNumbers[2]);



 lotteryNumbers[3] = parseInt(prompt("Enter a number 1 - 40"));

 if(lotteryNumbers[3] === ""){
     //This code will run if the user types in nothing
     // Re prompt the user
     lotteryNumbers[3] = parseInt(prompt("Please do not leave this blank it is required. \n Enter a number 1 - 40."));
 }
 if(isNaN(lotteryNumbers[3])) {
     //This code will run if is Not number
     //re prompt the user for information
     //Give the user a 2 chance
     lotteryNumbers[3] = parseInt(prompt("Please only type in a number 1 - 40 \n No words"));
 }
 if (lotteryNumbers[3] > 40){
     lotteryNumbers[3] = parseInt(prompt("Do not pick a number 41 or higher. \n Enter a number 1 - 40"));
 }

 console.log(lotteryNumbers[3]);



 lotteryNumbers[4] = parseInt(prompt("Enter a number 1 - 40"));

 if(lotteryNumbers[4] === ""){
     //This code will run if the user types in nothing
     // Re prompt the user
     lotteryNumbers[4] = parseInt(prompt("Please do not leave this blank it is required. \n Enter a number 1 - 40."));
 }
 if(isNaN(lotteryNumbers[4])) {
     //This code will run if is Not number
     //re prompt the user for information
     //Give the user a 2 chance
     lotteryNumbers[4] = parseInt(prompt("Please only type in a number 1 - 40 \n No words"));
 }
 if (lotteryNumbers[4] > 40){
     lotteryNumbers[4] = parseInt(prompt("Do not pick a number 41 or higher. \n Enter a number 1 - 40"));
 }

 console.log(lotteryNumbers[4]);


 //Random Generator

var random = [];

 random[0] = Math.random() * 40 +1;
 random[0] = Math.round(random[0]);

 console.log(random[0]);

 random[1] = Math.random() * 40 +1;
 random[1] = Math.round(random[1]);
 console.log(random[1]);

 random[2] = Math.random() * 40 +1;
 random[2] = Math.round(random[2]);
 console.log(random[2]);

 random[3] = Math.random() * 40 +1;
 random[3] = Math.round(random[3]);
 console.log(random[3]);

 random[4] = Math.random() * 40 +1;
 random[4] = Math.round(random[4]);
 console.log(random[4]);

 //Numbers Correct

 if (random[0] === lotteryNumbers[0] ){
     console.log("number "+lotteryNumbers[0]+" is correct");
 } else if(random[0] === lotteryNumbers[1]){
     console.log("number "+lotteryNumbers[1]+" is correct");
 } else if(random[0] === lotteryNumbers[2]){
     console.log("number "+lotteryNumbers[2]+" is correct");
 } else if(random[0] === lotteryNumbers[3]){
     console.log("number "+lotteryNumbers[3]+" is correct");
 } else if(random[0] === lotteryNumbers[4]){
     console.log("number "+lotteryNumbers[4]+" is correct");
 }

 if (random[1] === lotteryNumbers[0] ){
     console.log("number "+lotteryNumbers[0]+" is correct");
 } else if(random[1] === lotteryNumbers[1]){
     console.log("number "+lotteryNumbers[1]+" is correct");
 } else if(random[1] === lotteryNumbers[2]){
     console.log("number "+lotteryNumbers[2]+" is correct");
 } else if(random[1] === lotteryNumbers[3]){
     console.log("number "+lotteryNumbers[3]+" is correct");
 } else if(random[1] === lotteryNumbers[4]){
     console.log("number "+lotteryNumbers[4]+" is correct");
 }

 if (random[2] === lotteryNumbers[0] ){
     console.log("number "+lotteryNumbers[0]+" is correct");
 } else if(random[2] === lotteryNumbers[1]){
     console.log("number "+lotteryNumbers[1]+" is correct");
 } else if(random[2] === lotteryNumbers[2]){
     console.log("number "+lotteryNumbers[2]+" is correct");
 } else if(random[2] === lotteryNumbers[3]){
     console.log("number "+lotteryNumbers[3]+" is correct");
 } else if(random[2] === lotteryNumbers[4]){
     console.log("number "+lotteryNumbers[4]+" is correct");
 }

 if (random[3] === lotteryNumbers[0] ){
     console.log("number "+lotteryNumbers[0]+" is correct");
 } else if(random[3] === lotteryNumbers[1]){
     console.log("number "+lotteryNumbers[1]+" is correct");
 } else if(random[3] === lotteryNumbers[2]){
     console.log("number "+lotteryNumbers[2]+" is correct");
 } else if(random[3] === lotteryNumbers[3]){
     console.log("number "+lotteryNumbers[3]+" is correct");
 } else if(random[3] === lotteryNumbers[4]){
     console.log("number "+lotteryNumbers[4]+" is correct");
 }

 if (random[4] === lotteryNumbers[0] ){
     console.log("number "+lotteryNumbers[0]+" is correct");
 } else if(random[4] === lotteryNumbers[1]){
     console.log("number "+lotteryNumbers[1]+" is correct");
 } else if(random[4] === lotteryNumbers[2]){
     console.log("number "+lotteryNumbers[2]+" is correct");
 } else if(random[4] === lotteryNumbers[3]){
     console.log("number "+lotteryNumbers[3]+" is correct");
 } else if(random[4] === lotteryNumbers[4]){
     console.log("number "+lotteryNumbers[4]+" is correct");
 }


 alert("Your lottery numbers where \n \n "+lotteryNumbers+" \n \n The winning numbers where \n \n "+random);





//Probability

 var p1 = 5/40;
 var p2 = 4/39;
 var p3 = 3/38;
 var p4 = 2/37;
 var p5 = 1/36;

 var probability = 1 /(p1 * p2 * p3 * p4 * p5);

var percentage = parseInt(prompt("Enter %"));
 percentage = percentage * .01;
console.log(percentage);

 var ticketsNeeded = probability * percentage;
 ticketsNeeded = Math.round(ticketsNeeded);
 console.log(ticketsNeeded);


 var ticketsBought =  parseInt(prompt("Enter tickets bought"));
 var percentageWin = ticketsBought * 100 / probability;
console.log(percentageWin);






























