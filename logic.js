//sample js file
x = 10; //this is a variable
userName = "Andy"; //string

teams = new Array(); //"formal way" of creating array
teams = ["Panthers", "Seahawks", "Colts"];
wins = [8, 12, 11];  //creating and initializing an array
losses = [4, 1, 2];


console.log(teams);
console.log("Wins: " + wins);
console.log("Losses: " + losses);

console.log(teams.length);

document.write("The " + teams[0] + " had " + wins[0] + " wins. <br>");
document.write("There are " + teams.length + " teams in the league.");

for (var i=0; i<teams.length; i++) {
    console.log(teams[i]);
    //document.write("The " + teams[i] + " had " + wins[i] + " wins. <br>");
    if (wins [i] >= 10) {
    console.log(teams[i] + "is a good team");
   }  

   else {
     console.log(teams[i] + "are not great");
}
}

