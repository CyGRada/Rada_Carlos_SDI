
 /*
Carlos Rada
Section 00
Date: 3-27-15
Assignment Name: Rada_Carlos_Final Exam
 */

//alert("Just Testing");

 var itemCost = prompt("What is the cost of your Item");
 while(isNaN(itemCost) || itemCost === "") {
     //Re prompt the user
     if (itemCost === "") {
         //The user left it blank
         itemCost = prompt("Please do not leave blank");

     } else if (isNaN(itemCost)) {
         itemCost = prompt("Please enter only type in numbers. \n Enter a number.");
     }

 }


 var discountPercentage = prompt("Please enter your discount percentage 0 - 99");
 while(isNaN(discountPercentage) || discountPercentage === "" || discountPercentage >= 100 || discountPercentage < 0) {
     //Re prompt the user
     if (discountPercentage === "") {
         //The user left it blank
         discountPercentage = prompt("Please do not leave blank");

     } if (isNaN(discountPercentage)) {
         discountPercentage = prompt("Please enter only type in numbers. \n Enter a number.");

     } if (discountPercentage >= 100) {
         discountPercentage = prompt("Please do not enter a number higher 99");

     } if (discountPercentage < 0){
         discountPercentage = prompt("Please do not enter a negative number");
     }

 }


 function thePrice(c,d){
     var itemDiscountAmount = d / 100;
     var result = c * itemDiscountAmount;
     var answer = c - result;
     return answer;
 };

thePrice(itemCost,discountPercentage);




 var final = thePrice(itemCost,discountPercentage);

 console.log("The final cost of an item that cost $"+itemCost+" with a discount of "+discountPercentage+"% is $"+final+".");



/*My first tes was item cost of of 10 with a 50% discount and my answer was 5 Dollars
My second test was with an item cost price of 20 with a 25% discount my answer was 15 dollars.


*/










