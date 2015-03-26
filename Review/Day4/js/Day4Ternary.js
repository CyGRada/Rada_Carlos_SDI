
 /*
Carlos Rada
Section 00
Date: 3-10-15
Assignment Name: Ternary
 */

//alert("Just Testing");

 //if your GPA is over 2.0 then you can graduate

 //Create a variable for GPA
 var gpa = prompt("Enter GPA");
 while(isNaN(gpa) || gpa === ""){
     //Re prompt the user
     if(gpa === ""){
         //The user left it blank
         gpa = prompt("Please do not leave blank");

     } else if(isNaN(gpa)){
         gpa = prompt("Please enter only type in numbers. \n Enter a number.");
     }

 }

 //Basic Conditional
 if(gpa >2.0){
     console.log("You can graduate");
 } else {
     console.log("You cant graduate");
 }

 //(condition to test) ? code to run if true : code to run if false;

 // Create a basic ternary function for our gpa
 (gpa > 2.0) ? console.log ("You can graduate") : console.log("You cant graduate");

 //If a child is under 10 then they must read Green eggs & Ham otherwise they can read the time machine

 //Create a variable for child age and for the book
 var age = 16;
 var book;

 // Use a ternary to define the book

 book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";

 console.log("The kid should read "+book+".");

 // Value of book if basic conditional

 var bookBasic;

 if(age < 10){
   bookBasic = "Green Eggs and Ham";
 } else {
     bookBasic = "The Time Machine";
 }
 console.log(bookBasic);
