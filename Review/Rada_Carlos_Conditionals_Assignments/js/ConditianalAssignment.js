
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

 while(isNaN(lotteryNumbers[0]) || lotteryNumbers[0] === "" || lotteryNumbers[0] <= 41){
     //Re prompt the user
     if(lotteryNumbers[0] === ""){
         //The user left it blank
         lotteryNumbers[0] = prompt("Please do not leave blank");

     }
     if(isNaN(lotteryNumbers[0])){
         lotteryNumbers[0] = prompt("Please enter only type in numbers. \n Enter a number.");
     }
     if(lotteryNumbers[0]<= 41){
         lotteryNumbers[0] = prompt("Please do not pick a number higher than 41")
     }

 }

 console.log(lotteryNumbers[0]);


 lotteryNumbers[1] = parseInt(prompt("Enter a number 1 - 40"));
 while(isNaN(lotteryNumbers[1]) || lotteryNumbers[1] === "" || lotteryNumbers[1] <= 41){
     //Re prompt the user
     if(lotteryNumbers[1] === ""){
         //The user left it blank
         lotteryNumbers[1] = prompt("Please do not leave blank");

     }
     if(isNaN(lotteryNumbers[1])){
         lotteryNumbers[1] = prompt("Please enter only type in numbers. \n Enter a number.");
     }
     if(lotteryNumbers[1]<= 41){
         lotteryNumbers[1] = prompt("Please do not pick a number higher than 41")
     }

 }

 console.log(lotteryNumbers[1]);


 lotteryNumbers[2] = parseInt(prompt("Enter a number 1 - 40"));

 while(isNaN(lotteryNumbers[2]) || lotteryNumbers[2] === "" || lotteryNumbers[2] <= 41){
     //Re prompt the user
     if(lotteryNumbers[2] === ""){
         //The user left it blank
         lotteryNumbers[2] = prompt("Please do not leave blank");

     }
     if(isNaN(lotteryNumbers[2])){
         lotteryNumbers[2] = prompt("Please enter only type in numbers. \n Enter a number.");
     }
     if(lotteryNumbers[2]<= 41){
         lotteryNumbers[2] = prompt("Please do not pick a number higher than 41")
     }

 }
 console.log(lotteryNumbers[2]);



 lotteryNumbers[3] = parseInt(prompt("Enter a number 1 - 40"));

 while(isNaN(lotteryNumbers[3]) || lotteryNumbers[3] === "" || lotteryNumbers[3] <= 41){
     //Re prompt the user
     if(lotteryNumbers[3] === ""){
         //The user left it blank
         lotteryNumbers[3] = prompt("Please do not leave blank");

     }
     if(isNaN(lotteryNumbers[3])){
         lotteryNumbers[3] = prompt("Please enter only type in numbers. \n Enter a number.");
     }
     if(lotteryNumbers[3]<= 41){
         lotteryNumbers[3] = prompt("Please do not pick a number higher than 41")
     }

 }

 console.log(lotteryNumbers[3]);



 lotteryNumbers[4] = parseInt(prompt("Enter a number 1 - 40"));

 while(isNaN(lotteryNumbers[4]) || lotteryNumbers[4] === "" || lotteryNumbers[4] <= 41){
     //Re prompt the user
     if(lotteryNumbers[4] === ""){
         //The user left it blank
         lotteryNumbers[4] = prompt("Please do not leave blank");

     }
     if(isNaN(lotteryNumbers[4])){
         lotteryNumbers[4] = prompt("Please enter only type in numbers. \n Enter a number.");
     }
     if(lotteryNumbers[4]<= 41){
         lotteryNumbers[4] = prompt("Please do not pick a number higher than 41")
     }

 }

 console.log(lotteryNumbers[4]);


 //Random Generator

var random = [];

 random[0] = Math.random() * 40 +1;
 random[0] = Math.round(random[0]);

 console.log(random[0]);

 random[1] = Math.random() * 40 +1;
 random[1] = Math.round(random[1]);

if (random[1] === random[0]){
    random[1] = random[0] + 1;
}
 console.log(random[1]);

 random[2] = Math.random() * 40 +1;
 random[2] = Math.round(random[2]);

 if (random[2] === random[0]){
     random[2] = random[1] + 1;
 } else if (random[2] === random[1]){
     random[2] = random[1] + 1;
 }
 console.log(random[2]);

 random[3] = Math.random() * 40 +1;
 random[3] = Math.round(random[3]);

 if (random[3] === random[0]){
     random[3] = random[2] + 1;
 } else if (random[3] === random[1]){
     random[3] = random[2] + 1;
 } else if (random[3] === random[2]){
     random[3] = random[2] + 1;
 }
 console.log(random[3]);

 random[4] = Math.random() * 40 +1;
 random[4] = Math.round(random[4]);

 if (random[4] === random[0]){
     random[4] = random[3] + 1;
 } else if (random[4] === random[1]){
     random[3] = random[3] + 1;
 } else if (random[3] === random[2]){
     random[4] = random[3] + 1;
 } else if (random[4] === random[3]){
     random[4] = random[3] + 1;
 }

 console.log(random[4]);

 //Numbers Correct

 if (random[0] === lotteryNumbers[0] ){
     console.log("number "+lotteryNumbers[0]+" is a match");
 } else if(random[0] === lotteryNumbers[1]){
     console.log("number "+lotteryNumbers[1]+" is a match");
 } else if(random[0] === lotteryNumbers[2]){
     console.log("number "+lotteryNumbers[2]+" is a match");
 } else if(random[0] === lotteryNumbers[3]){
     console.log("number "+lotteryNumbers[3]+" is a match");
 } else if(random[0] === lotteryNumbers[4]){
     console.log("number "+lotteryNumbers[4]+" is a match");
 }

 if (random[1] === lotteryNumbers[0] ){
     console.log("number "+lotteryNumbers[0]+" is a match");
 } else if(random[1] === lotteryNumbers[1]){
     console.log("number "+lotteryNumbers[1]+" is a match");
 } else if(random[1] === lotteryNumbers[2]){
     console.log("number "+lotteryNumbers[2]+" is a match");
 } else if(random[1] === lotteryNumbers[3]){
     console.log("number "+lotteryNumbers[3]+" is a match");
 } else if(random[1] === lotteryNumbers[4]){
     console.log("number "+lotteryNumbers[4]+" is a match");
 }

 if (random[2] === lotteryNumbers[0] ){
     console.log("number "+lotteryNumbers[0]+" is a match");
 } else if(random[2] === lotteryNumbers[1]){
     console.log("number "+lotteryNumbers[1]+" is a match");
 } else if(random[2] === lotteryNumbers[2]){
     console.log("number "+lotteryNumbers[2]+" is a match");
 } else if(random[2] === lotteryNumbers[3]){
     console.log("number "+lotteryNumbers[3]+" is a match");
 } else if(random[2] === lotteryNumbers[4]){
     console.log("number "+lotteryNumbers[4]+" is a match");
 }

 if (random[3] === lotteryNumbers[0] ){
     console.log("number "+lotteryNumbers[0]+" is a match");
 } else if(random[3] === lotteryNumbers[1]){
     console.log("number "+lotteryNumbers[1]+" is a match");
 } else if(random[3] === lotteryNumbers[2]){
     console.log("number "+lotteryNumbers[2]+" is a match");
 } else if(random[3] === lotteryNumbers[3]){
     console.log("number "+lotteryNumbers[3]+" is a match");
 } else if(random[3] === lotteryNumbers[4]){
     console.log("number "+lotteryNumbers[4]+" is a match");
 }

 if (random[4] === lotteryNumbers[0] ){
     console.log("number "+lotteryNumbers[0]+" is a match");
 } else if(random[4] === lotteryNumbers[1]){
     console.log("number "+lotteryNumbers[1]+" is a match");
 } else if(random[4] === lotteryNumbers[2]){
     console.log("number "+lotteryNumbers[2]+" is a match");
 } else if(random[4] === lotteryNumbers[3]){
     console.log("number "+lotteryNumbers[3]+" is a match");
 } else if(random[4] === lotteryNumbers[4]){
     console.log("number "+lotteryNumbers[4]+" is a match");
 }

 if (random === lotteryNumbers){
     console.log("You Win the Lottery");
 }


 alert("Your lottery numbers where \n \n "+lotteryNumbers+" \n \n The winning numbers where \n \n "+random);




//Probability

 var p1 = 5/40;
 var p2 = 4/39;
 var p3 = 3/38;
 var p4 = 2/37;
 var p5 = 1/36;

 var probability = 1 /(p1 * p2 * p3 * p4 * p5);


 var ticketsBought =  parseInt(prompt("Enter the amount of tickets you think will give you a good chance of winning, \n \n so that I can tell you, your  real chances of winning the lottery!  "));

 var over = ticketsBought - probability;

 if(isNaN(ticketsBought)) {
     //This code will run if is Not number
     //re prompt the user for information
     //Give the user a 2 chance
     ticketsBought = parseInt(prompt("Please type in a number"));
 } else if (ticketsBought > probability){
     ticketsBought = parseInt(prompt("Your win percentage is over 100%. \n \n You actually over bought "+over+" tickets. \n Please subtract "+over+" over bought tickets."));
 }
 var percentageWin = ticketsBought * 100 / probability;



 alert("Your winning percentage \n with "+ticketsBought+" tickets purchased is \n \n "+percentageWin+"%");



 var percentage = parseInt(prompt("Enter the % you would like to have of winning the lottery, \n \n so that I can tell you how many tickets you would need to buy to obtain that %."));


 if(isNaN(percentage)) {
     //This code will run if is Not number
     //re prompt the user for information
     //Give the user a 2 chance
     percentage = parseInt(prompt("Please type a number"));
 }

 var percentage2 = percentage;

 percentage = percentage * .01;


 var ticketsNeeded = probability * percentage;
 ticketsNeeded = Math.round(ticketsNeeded);



alert("You will need to buy \n \n "+ticketsNeeded+" total tickets \n \n to have a "+percentage2+"% chance of winning");
























