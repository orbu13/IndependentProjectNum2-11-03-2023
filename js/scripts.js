const form = document.querySelector("form");
let finalAnswer = document.getElementById("final-result");

form.onsubmit = function(e){
    e.preventDefault();

    const userInput1 = document.getElementById("person1Input").value;
    const userInput2 = document.getElementById("person2Input").value;
    const userInput3 = document.getElementById("person3Input").value;
    const userInput4 = document.getElementById("person4Input").value;
    const userInput5 = document.getElementById("person5Input").value;

    let userOutput = " ";

    if (userInput1 === "yes") {
        userOutput = "Stupendous! JaveScript is the programming language for you.";
    } else if (userInput2 === "yes") {
       userOutput = "Atounding! C# is the programming language for you.";
    } else if (userInput3 === "yes") {
       userOutput = "Fantastic! HTML is the programming language for you.";
    } else if (userInput4 === "yes") {
       userOutput = "Luminescence! Ruby is the programming language for you";
    } else if (userInput5 === "yes") {
       userOutput = "Miraculous! python is the programming language for you";
    } else {
        userOutput = "Miraculous! python is the programming language for you";
    }

    console.log(userOutput);
    finalAnswer.innerText = userOutput;
}