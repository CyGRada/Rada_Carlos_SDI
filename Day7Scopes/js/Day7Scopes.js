
 /*
Carlos Rada
Section 00
Date: 3-17-15
Assignment Name: Day 7 Scopes
 */

//alert("Just Testing");


 //Variable Scope
 //Variables inside and outside of a function

 //Try not use the same variable names,But
 //In big files this is going to be impossible

 //Create a variable for width in our main code
 //Scoped outside of the main function - "Main Code"
 var width = 5;

 //Function that calculates the perimeter of a rectangle
 function calcPeri(){

     //Create a variable called width inside of the function
     //Scoped to the function calcPeri
     var width = 10;

     //Create a variable for height and perimeter
     var height= 20;
     var perimeter  = width *2 + height *2;

     console.log("Inside of the function, the perimeter is "+perimeter);

       //Variable created inside of a function cannot be created cannot be accessed outside the function.
        // Variables created outside of the function can be accessed , but usually will not be




 }


 console.log("before the function call, width = "+width);

 //Function call the calcPeri
 calcPeri();
 console.log("After the function call, width = "+width);




//Console.log the answer
 //This does not work - vegas
 // console.log("Outside of the the function, the perimeter is "+perimeter";
 // )


























