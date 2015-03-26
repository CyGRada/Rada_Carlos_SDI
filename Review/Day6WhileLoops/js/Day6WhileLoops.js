
 /*
Carlos Rada
Section 00
Date: 3-14-15
Assignment Name: Day 6 While Loops
 */

//alert("Just Testing");

 //Basic While Loop

 //Start  a counter variable
 var counter = 0;

 //Start while loop
 //Condition to test goes inside of ()
 while(counter<200){
     console.log("somethings never end");
     console.log(counter);

     //make a change to the counting variable
     counter+=50;

 }


 //Do While Loop
 //This Loop will run the code first then check a condition!!

 /*
   do{
    //Code to run
 } while(condition to test);
  */

 //Declare  a counting variable
 var i = 20;

 do{
     console.log("The number is "+i);

     //change the counting variable
     i++;
 } while(i < 10);