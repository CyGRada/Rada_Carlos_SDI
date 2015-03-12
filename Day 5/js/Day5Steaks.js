
 /*
Carlos Rada
Section 00
Date: 3-12-15
Assignment Name: Day 5 Steaks
 */

//alert("Just Testing");

 //Test a steak temperature and tell the user the done-ness level

 /*
  Extra-rare or Blue (bleu) = 	115–120 °F
  Rare (saignant) =	125–130 °F
  Medium rare (à point) = 	130–140 °F
  Medium (demi-anglais) = 	140–150 °F
  Medium well (cuit)  = 150–155 °F
  Well done (bien cuit) = 	160 °F+
  */

 // Create a variable for steak temperature
 var steakTemp = prompt("Enter steak temperature of your steak");

 // We have to test each of the cases above to see where our temp falls into.

 if(steakTemp < 115){
     console.log("Your steak is Uncooked");
 } else if (steakTemp < 125){
     console.log("Your steak is Extra Rare");
 } else if (steakTemp < 130){
     console.log("Your steak is Rare");
 } else if (steakTemp < 140){
     console.log("Your steak is medium Rare");
 } else if (steakTemp < 150){
     console.log("Your steak is Medium");
 } else if (steakTemp < 155){
     console.log("Your steak is Medium Well");
 } else if (steakTemp < 160){
     console.log("Your steak is Well Done");
 } else {
     console.log("Your steak is Burnt")
 }