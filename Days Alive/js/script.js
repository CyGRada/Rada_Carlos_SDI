alert("Text that the user will see.");

//Months & Days & Weeks
var january = 0;        var jan = 1;
var february = 31;      var feb = 2;
var march = 59;         var mar = 3;
var april = 90;         var apr = 4;
var may = 120;          var ma = 5;
var june = 151;         var jun = 6;
var july = 181;         var jul = 7;
var august= 212;        var aug = 8;
var september = 243;    var sep = 9;
var october = 273;      var oct = 10;
var november = 304;     var nov = 11;
var december = 334;     var dec = 12;
var daysInYear = 365;   var monthsInYear = 12;


//Enter date.
var currentYear = 2015;         var hourNow = 13;
var currentMonth= march;        var minuteNow =14;
var monthNumber = mar;
var currentDay = 7;

//Enter Birthday
var birthYear = 1984;           var birthHour =  12;
var birthMonth = january;         var birthMinute = 36;
var birthMonthNumber = jan;
var birthDay= 7;



//Code
var daysPassedCurrentYear = currentMonth + currentDay;
var daysPassedBirthYear = birthMonth + birthDay;
var daysLeft = daysInYear - daysPassedBirthYear;
var yearsLived = (currentYear - birthYear) - 1;
var mostDays = yearsLived * daysInYear;
var amountOfLeapYearsSinceBirth = yearsLived / 4;
var moduloLeapYear = amountOfLeapYearsSinceBirth % 1;
var extraDays= amountOfLeapYearsSinceBirth - moduloLeapYear;
var remainderMonth = monthsInYear - birthMonthNumber;


//Days Lived
var totalDays =  mostDays + daysLeft + extraDays + daysPassedCurrentYear;
//Hours Lived
var hoursLived = totalDays * 24 + hourNow - birthHour;
//Minutes Lived
var minutesLived = hoursLived * 60 + minuteNow - birthMinute;
//Seconds Lived
var secondsLived = minutesLived * 60;
//Months Lived
var monthsLived = yearsLived * 12 + remainderMonth + monthNumber;

//More Code
var weeksLived = totalDays / 7;
var moduloWeeks = weeksLived % 1 ;

//Months Lived
var actualWeeks = weeksLived - moduloWeeks;

//More Code
var exactYears = totalDays / 365.242;
var moduloYear = exactYears % 1;

//Years Lived
var age =  exactYears - moduloYear;
console.log(age);

//Answer

console.log("You have lived "+age+" years");
console.log("You have lived "+monthsLived+" months");
console.log("You have lived "+actualWeeks+" weeks");
console.log("You have lived "+totalDays+" days");
console.log("You have lived "+hoursLived+" hours");
console.log("You have lived "+minutesLived+" minutes");
console.log("You have lived "+secondsLived+" seconds");



var Answer = []





















