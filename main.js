var myName = "Derek";
var myAge = 41;
// booleans can only be true or false
var canVote = true;
// A variable marked as any is a dynamic type
var anything = "dog";
anything = 2;
// You can print in the defined element
document.getElementById("tsStuff").innerHTML = "My Name is " + myName;
// typeof returns the data type
document.write("my Name is a " + typeof (myName) + "<br />");
document.write("my Age is a " + typeof (myAge) + "<br />");
document.write("can Vote is a " + typeof (canVote) + "<br />");
document.write("anything is a " + typeof (anything) + "<br /><br /><br />");
// We can convert strings to numbers
var strToNum = parseInt("5");
document.write("strToNum is a " + typeof (strToNum) + "<br />");
// toString() converts anything into a string
var numToStr = 5;
document.write("numToStr is a " + typeof (numToStr.toString()) + "<br /><br /><br />");
var superman = {
    realName: "Clark Kent",
    superName: "Superman"
};
// It is best to always separate with +
document.write(superman.realName + " is " + superman.superName + "<br />");
