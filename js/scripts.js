const form = document.querySelector("form");
let userOutput = document.getElementById("final-result");

let finalAnswer;




form.onsubmit = function(e){
    e.preventDefault();
    const userInput1 = document.getElementById("person1Input").value;
    
    if (userInput1 === "yes") {
        finalAnswer = "Great, we can move on to the next question" ;
    } else if ("no") {
        finalAnswer = "I'm sorry, i have nothing to offer you";
    } else {
        finalAnswer = "you need to answer with yes or no only";
    }

    console.log(finalAnswer);
    userOutput.innerText = finalAnswer;
}


// const userInput2 = document.getElementById("person2Input").value;
// const userInput3 = document.getElementById("person3Input").value;
// const userInput4 = document.getElementById("person4Input").value;
// const userInput5 = document.getElementById("person5Input").value;

