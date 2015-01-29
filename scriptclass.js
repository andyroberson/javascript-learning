//used for learning JS in JOMC 586
var userName="Andy";

var todaysDate = new Date(); //date is the type of object it is

function myFunction() {
    document.write("Hello ");
    document.write(userName);
    console.log(todaysDate);
}

document.getElementById("demo").innerHTML="This is the new stuff"; //have document, once you find the document, go find this id
document.getElementById("mydiv").innerHTML="I'm cold!";

myFunction();

var myNumberVariable = 5;
var myTextVariable = "My variable is a string";

console.log(myNumberVariable);
console.log(myTextVariable);