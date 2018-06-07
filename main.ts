var myName: string = "Derek";
var myAge: number = 41;
// booleans can only be true or false
var canVote: boolean = true;
// A variable marked as any is a dynamic type
var anything: any = "dog";
anything = 2;
// You can print in the defined element
document.getElementById("tsStuff").innerHTML = "My Name is " + myName;

// typeof returns the data type
document.write("my Name is a " + typeof (myName) + "<br />");
document.write("my Age is a " + typeof (myAge) + "<br />");
document.write("can Vote is a " + typeof (canVote) + "<br />");
document.write("anything is a " + typeof (anything) + "<br /><br /><br />");

// We can convert strings to numbers
var strToNum: number = parseInt("5");
document.write("strToNum is a " + typeof (strToNum) + "<br />");

// toString() converts anything into a string
var numToStr: number = 5;
document.write("numToStr is a " + typeof (numToStr.toString()) + "<br /><br /><br />");

// ---------- INTERFACES ----------
// An interface can be used to describe complex
// types

interface SuperHero {
 realName: String;
 superName: String;
}

var superman: SuperHero = {
 realName: "Clark Kent",
 superName: "Superman"
}

// It is best to always separate with +
document.write(superman.realName + " is " + superman.superName + "<br />");
