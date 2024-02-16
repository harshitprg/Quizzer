const quiz = [
    {
        question:"Question: Which Team won the U-19 Mens Cricket World Cup?",
        answer1:"India",
        answer2:"Australia",
        answer3:"Pakistan",
        answer4: "Afghanistan",
        correctAns:"Australia",
    },
    {
        question:"Question: Which Formula-1 Team won the Abu Dhabi Grand Prix? ",
        answer1:"Mercedes",
        answer2:"Aston Martin",
        answer3:"Red Bull",
        answer4: "HAAS",
        correctAns:"Red Bull",
    },
    {
        question:"Question: Name the new Formula-1 driver for ferrari in 2025? ",
        answer1:"Pierre Gasly",
        answer2:"Lewis Hamilton",
        answer3:"Daniel Riccardo",
        answer4: "Max Verstappen",
        correctAns:"Lewis Hamilton",
    },
    {
        question:"Question: DOM stands for  ",
        answer1:"Pierre Gasly",
        answer2:"Lewis Hamilton",
        answer3:"Daniel Riccardo",
        answer4: "Max Verstappen",
        correctAns:"Lewis Hamilton",
    },
]

const question = document.getElementById("quest");
console.log(question);
//console.log(question.textContent);
const option = document.getElementById("opt-1");
const option2 = document.getElementById("opt-2");
const option3 = document.getElementById("opt-3"); 
const option4 = document.getElementById("opt-4");
const answersEl = document.querySelectorAll(".answer")

console.log(option);
console.log(option2);
console.log(option3);
console.log(option4);
console.log(option.textContent);
console.log(option2.textContent);
console.log(option3.textContent);
console.log(option4.textContent);
let currQuest = 0;
let score = 0;


    question.textContent = quiz[currQuest].question;

    option.textContent = quiz[currQuest].answer1;
    option2.textContent = quiz[currQuest].answer2;
    option3.textContent = quiz[currQuest].answer3;
    option4.textContent = quiz[currQuest].answer4;

