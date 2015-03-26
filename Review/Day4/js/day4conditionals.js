
 /*
Carlos Rada
Section 00
Date:3-1--15
Assignment Name: Conditionals
 */

//alert("Just Testing");

 //Basic Conditional
 /*
 If condition to test) {
 code to run if the condition is true
 }
  */

 //Create a boolean variable
 var oldEnough = false;

 // If the kid is old enough, he can ride
 if(oldEnough){
     //code to run if the kid is old enough
     console.log("The kid is old enough to ride the coaster");
 } else {
     //code to run if the kid is Not old enough
     console.log("sorry you are to young");
 }

 //Relational Operators

 //If the kid is over 48 inches tall, then he rides the coaster
 var kidHeight =  57;

 //Create a variable for the min height requirements
 var minHeight = 48;

 //Create a variable for sneaker lifts
 var sneakerLift = 2;

 //Test the kids height
 if(kidHeight > minHeight){
     console.log("Kid is tall enough to ride the coaster");
 } else if(kidHeight+sneakerLift > minHeight) {
    console.log("If you use enough napkins you can ride the coaster");
 } else {
     console.log("Sorry you are to short");
 }
