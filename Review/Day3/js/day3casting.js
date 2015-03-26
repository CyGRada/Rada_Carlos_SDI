
 /*
Carlos Rada
Section 00
Date: 3-7-15
Assignment Name:
 */

alert("Just Testing");

 //Casting variables means treating one data type like another... If possible

 var stringVar = "6";
 var results = 7 + stringVar;
 console.log(results);

 //Number() - treats whatever is inside like a number if possible
 var castingResults = 7 + Number(stringVar);
 console.log(castingResults);

 //Cast numbers to be a text string
 // String() - treat whatever is inside as a text string
 var areaCode = 407;
 var prefix = 555;
 var lineNumber = 1234;

 var phoneNumber = String(areaCode)+String(prefix)+String(lineNumber);
 console.log(phoneNumber);

 console.log("("+areaCode+")-"+prefix+"-"+lineNumber);

 //Parsing Integers
 // parallel() - looks through a text and returns an integer
 // Only the first number in the string is returned!
 // If the first character in the text string canNot be converted into a number , then it returns NaN = Not a Number

 var a = parseInt("40 years old");
 console.log(a);

 var b = Number("40 Years Old");
 console.log(b);

 var c = parseInt("He was 40");
 console.log(c);




 // Prompts ONLY returns text strings!!!

 var tshirtsOwned = prompt("How many t-shits do you currently own?");
 var tshirtsBought = prompt("How many t-shirts did you buy today?");

 //calculate
 var totalShirts = parseInt(tshirtsOwned)
     //+ parseInt(tshirtsBought);
 console.log("You currently own "+totalShirts+" shirts.");













