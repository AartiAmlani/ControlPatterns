const oInput = require("readline-sync");

let nGrade = oInput.question("enter your grade");
//let nGrade =89;
if(nGrade < 55)
{
    console.log("you failed");
}
else if (nGrade < 60)
{
    console.log("you d!");
}
else if (nGrade <70)
{
    console.log("you c!");
}
else if (nGrade <80)
{
    console.log("you b");
}
else if (nGrade <90)
{
    console.log("you A+!");
}
else
{
    console.log("you got A+");
}