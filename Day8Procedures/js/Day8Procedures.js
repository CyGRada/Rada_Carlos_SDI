
 /*
Carlos Rada
Section 00
Date:3-24-15
Assignment Name:
 */

//alert("Just Testing");



 //This is a basic function
 function calcArea(w,h){
     var area = w*h;
     return area;
 }

 //Function Call
 var area = calcArea(6,8);
 console.log("The area of the rect is  "+area);

 //This is a procedure
 //A list of steps to do

 function calcAreaP(w,h){
     var area =w*h;
     // Do not return this value
     console.log("Inside the procedure the area is "+area)
 }

 //function call for the procedure ?
 //Just the function name No variable to catch it
 calcAreaP(12, 16);
 