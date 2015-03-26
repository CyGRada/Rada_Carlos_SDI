
 /*
Carlos Rada
Section 00
Date: 3-18-15
Assignment Name: Day 4 Logical
 */

//alert("Just Testing");

 //Basic conditional, if we have enough money to buy a car

 // Create a  few variables
 var budget = prompt("Enter budget");
 while(isNaN(budget) || budget === ""){
     //Re prompt the user
     if(budget === ""){
         //The user left it blank
         budget = prompt("Please do not leave blank");

     } else if(isNaN(budget)){
         budget = prompt("Please enter only type in numbers. \n Enter a number.");
     }

 }
 var carPrice = prompt("Enter car price");
 while(isNaN(carPrice) || carPrice === ""){
     //Re prompt the user
     if(carPrice === ""){
         //The user left it blank
         carPrice = prompt("Please do not leave blank");

     } else if(isNaN(carPrice)){
         carPrice = prompt("Please enter only type in numbers. \n Enter a number.");
     }

 }
 var payCheck = prompt("Enter paycheck");
 while(isNaN(payCheck) || payCheck === ""){
     //Re prompt the user
     if(payCheck === ""){
         //The user left it blank
         payCheck = prompt("Please do not leave blank");

     } else if(isNaN(payCheck)){
         payCheck = prompt("Please enter only type in numbers. \n Enter a number.");
     }

 }

 if(budget>=carPrice){
     console.log("You can afford your car");
 } else{
     console.log("You are broke! Take the bus!");
 }


 // We can buy the car if out budget is greater than or equal to the car price OR our paycheck is more than 1500

 if(budget>=carPrice || payCheck>1500){
     console.log("you can buy the car");
 } else{
     console.log("You don't make enough money and your budget is to low");
 }

 /*
 True Table for || "Or
 t || t = t
 t || f = t
 f || t = t
 f || f = f
  */

 /*True table for && "and"
 t && t = t
 t && f = f
 f && f = f
 f && f = f
  */

 //You can buy car if the budget is greater than or equal to  the car price AND your paycheck is over 1500

 if(budget >= carPrice && payCheck > 1500){
     console.log("You can buy the car!");
 } else {
     console.log("Pick a cheaper car!");
 }
















































