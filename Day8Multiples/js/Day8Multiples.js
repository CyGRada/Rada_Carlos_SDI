
 /*
Carlos Rada
Section 00
Date: 3-24-15
Assignment Name:Day 8 Multiples
 */

//alert("Just Testing");

 //Create multiple function using information from the user

 // Calculate the perimeter and area of a rectangle

 function periRect(w,h){
     //perimeter = 2 * width + 2 * height
     var p = 2*w + 2*h;
     return p;
 }

 // Create an anon function for the area
 var areaRect = function(w,h){
     var area = w*h;
     return area;
 };


 //prompt the user for width x height
 var width = prompt("Lets figure out the perimeter and area of a rectangle. \n What us the width.");

 //Validation
 while(width === "" || isNaN(width)){
     //Re prompt the user
     width = prompt("Please do not leave blank and only use numbers. What is your width");
 }

 //Parse Int
 width=parseInt(width);

 var height = prompt("What is the height of the rectangle")

 //Validation

 while (height === "" || isNaN(height)){
     height = prompt("Please do not leave blank and only use numbers. \n What is the height.");
 }

 //parse int
 height = parseInt(height);



 //Function calls
 var resultPeri = periRect(width,height);
 var resultArea = areaRect(width,height);

 //Combine console.log
 console.log("The perimeter of your rectangle is "+resultPeri+" and the area is "+resultArea+".")



//Combine function
 function combineRect(w,h){
     //first calculate the perimeter
     var p = 2*w + 2*h;

     //Calc Area
     var a= w*h;

     //Return both values
     return [p,a];
 };



 //Function call combined the array
 var combinedResults = combineRect(width,height);

 console.log(combinedResults);

 console.log("The perimeter of your rectangle is "+combinedResults[0]+" and the area is "+combinedResults[1]);



































