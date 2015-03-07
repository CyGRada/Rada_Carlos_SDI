alert("Text that the user will see.");

var chooseNumber = 220;


var chooseNumberMinus1 = chooseNumber - 1;
var chooseNumberDivided8 = chooseNumberMinus1 / 8;
var leftover = chooseNumberDivided8 % 1;
var newNumber =chooseNumberDivided8 - leftover;
var nextNumber = newNumber * 8;
var outcome = chooseNumber - nextNumber;
console.log("The outcome is "+outcome+"");

console.log(" If the outcome is 1 it will land on the thumb");

console.log(" If the outcome is 2 or 8 it will land on the index finger");

console.log(" If the outcome is 3 or 7 it will land on the middle finger");

console.log(" If the outcome is 4 or 6 it will land on the ring finger");

console.log(" If the outcome is 5 it will land on the pinky finger");






