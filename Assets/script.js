var quiz_div = document.getElementById("Quiz");
var start_menu = document.getElementById("Start");
var startbutton = document.getElementById("btn");
var UL = document.getElementById("answers");
const The_Questions = [
    {
        Question: "What color is the sky?",
        answers: {
            1: "Blue",
            2: "Black",
            3: "Eddie Murphey",
            4: "Green"
        },
        actual_answer: "3"
    },
    {
        Question: "Is Obama real?",
        answers: {
            1: "no",
            2: "hell no",
            3: "Dont look behind you",
            4: "Donal Trump"
        },
        actual_answer: "2"
    },
    {
        Question: "Whats the worst Framework?",
        answers: {
            1: "React",
            2: "Vue",
            3: "AngularJS a.k.a carrot farmer language",
            4: "jQuery"
        },
        actual_answer: "3"
    },
    {
        Question: "Have I run out of questions?",
        answers: {
            1: "No",
            2: "Yes",
            3: "Maybe",
            4: "Who Cares"
        },
        actual_answer: "1"
    },
    {
        Question: "Is tasmania Drifting away from Australia?",
        answers: {
            1: "Yes",
            2: "Thankfully",
            3: "No",
            4: "Uganda"
        },
        actual_answer: "1"
    },
];

function init(){


};

startbutton.addEventListener('click', function () {
    start_menu.style.visibility = "hidden";
    quiz_div.style.visibility = "visible";
    init()
});