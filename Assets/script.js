var quiz_div = document.getElementById("Quiz");
var start_menu = document.getElementById("Start");
var startbutton = document.getElementById("btn");
var current_question = document.getElementById("question");
var counter = 0;
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
var length = The_Questions.length


function main(){
    if (counter <= length){
    counter++
    UL.innerHTML = "";
    display_question()
    display_answers()
    }

};


function display_question() {
    current_question.textContent = The_Questions[counter].Question;

};

function display_answers() {
    var answers = The_Questions[counter].answers;
    for (const key in answers) {
        li = document.createElement("li");
        li.classList.add("list-group-item", "active");
        li.id = key;
        UL.append(li)
        li.textContent = key + ": " + answers[key];

    };
};


startbutton.addEventListener('click', function () {
    start_menu.style.visibility = "hidden";
    quiz_div.style.visibility = "visible";
    main()
});

$(document).click(function(event){
    //console.log(event.target);
    if ($.isNumeric(event.target.id)) {
        main()
    }
});