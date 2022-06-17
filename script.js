
var playerName=prompt("Welcome to GC mini golf! What is your name?");
var numberOfHoles = prompt("Hello " + playerName + "! " + "Would you like to play 3 or 6 holes today?" );
        //console.log (numberOfHoles) 
var score= 0 
for (var i=1; i<= numberOfHoles; i++) {
        var putts=prompt("How many putts did you have for hole "+ i + "?")
        score += parseInt(putts)
        //console.log (putts)
}
//console.log (score)
var coursePar = 0
if (numberOfHoles == 3) {
        coursePar = 9
} else if (numberOfHoles == 6) {
        coursePar= 18
}
var totalPar = score - coursePar 
// console.log (totalPar)
if (totalPar > 0){
        console.log ("Nice try, "+ playerName + "... Your total par was: +" +totalPar) 
}
if (totalPar < 0){
        console.log ("Great job, "+ playerName + "! Your total par was: " +totalPar) 
}
if (totalPar == 0){
        console.log ("Good game, "+ playerName + ". Your total par was: 0") 
}