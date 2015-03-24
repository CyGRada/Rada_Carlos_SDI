
 /*
Carlos Rada
Section 00
Date:3-17-15
Assignment Name: Function Worksheet
 */
var radius = 1;

//alert("Just Testing");

 //The circumference of a circle
 function circleCircumference(r){
     //calc radius * 2
     var circumference =  (2 * Math.PI) * r;
     //Return the value
     return circumference;

 }

 // Catch the circumference
 var circleCircumference = circleCircumference(radius);

 //Console.log the results
 console.log("The circumference of the circle is "+circleCircumference);




 // Amount stings to kill
//Variable

 var weightPound = prompt("Enter weight in pounds");

 var stingsPound = 8.66666667;



//Stings to kill a person

 function stingsKill(w,s){

          var amountStings = w * s;

     return amountStings;
 }


var killed = stingsKill(weightPound, stingsPound);

 console.log("You died with "+killed+" stings.");
