
 /*
Carlos Rada
Section 00
Date:3-14-15
Assignment Name: Day 6 Validation
 */

//alert("Just Testing");




 // Ask the user fot a number
 var num1 = prompt("Please enter a number");

 //Validate user type in a number and didn't leave blank

 //Validate using a while loop
 while(isNaN(num1) || num1 === ""){
     //Re prompt the user
     if(num1 === ""){
         //The user left it blank
         num1 = prompt("Please do not leave blank");

     } else if(isNaN(num1)){
         num1 = prompt("Please enter only type in numbers. \n Enter a number.");
     }

 }


 //Ask the user a yes or no question
 var userInput = prompt("Please enter yes or no.");
 //convert
 userInput.toLowerCase();
 //Validate
 while (userInput !="yes" && userInput !="no"){
     //Re prompt
     userInput = prompt("Please only enter in yes or no. \n Please type in yes or no.");
 }































