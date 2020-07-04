const oInput =require("readline-sync");

let nRandom =Math.ceil(Math.random()* 100);
let nGuesses = 0;
console.log("game is over and under .comp pick a no between 1 to 100 .see how many guess it take u to get the no.");
while(true)
{
   
    let nInput =oInput.question("plz enter nu between 1 and 100:");
    if(isNan(nInput)){
        console.log("plz enter no");
        continue;
    }
    nGuesses++;
    if(nInput< nRandom){
        console.log("too low");
    }
    else if(nInput >nRandom){
        console.log("too high");
    }
    else{
        console.log(" you got that" + nGuesses+"tries");
        break;
    }
}