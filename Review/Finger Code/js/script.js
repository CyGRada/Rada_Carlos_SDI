alert("Text that the user will see.");

function getFinger(chooseNumber) {
    chooseNumber = parseInt(chooseNumber);

    var chooseNumberMinus1 = chooseNumber - 1;
    var chooseNumberDivided8 = chooseNumberMinus1 / 8;
    var leftover = chooseNumberDivided8 % 1;
    var newNumber =chooseNumberDivided8 - leftover;
    var nextNumber = newNumber * 8;
    var outcome = chooseNumber - nextNumber;

    alert("The outcome is " + outcome + "\n\n" + "If the outcome is 1 it will land on the thumb" +
    "\nIf the outcome is 2 or 8 it will land on the index finger" +
    "\nIf the outcome is 3 or 7 it will land on the middle finger" +
    "\nIf the outcome is 4 or 6 it will land on the ring finger" +
    "\nIf the outcome is 5 it will land on the pinky finger");
}










