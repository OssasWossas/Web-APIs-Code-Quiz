var quiz_div = document.getElementById("Quiz");
var start_menu = document.getElementById("Start");
var startbutton = document.getElementById("btn");
var current_question = document.getElementById("question");
var input_answer = document.getElementById("answer_state");
var counter = 0;
var current_key = 0;
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
var correct_answer = The_Questions[counter].actual_answer;

function main(){
    if (counter <= length){
    UL.innerHTML = "";
    display_question()
    display_answers()
    }
    

};


function display_question() {
    
    if (The_Questions[counter] == undefined){
        setTimeout(function(){ quiz_div.style.visibility = "hidden"; }, 500);
    }
    else{
        current_question.textContent = The_Questions[counter].Question;
    }
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
    counter++
};

function right_answer(){
    div = document.createElement("div");
    div.classList.add("alert", "alert-success");
    input_answer.append(div)
    div.textContent = "Correct Answer";
    setTimeout(function(){ input_answer.innerHTML = ""; }, 500);
};

function wrong_answer(){
    div = document.createElement("div");
    div.classList.add("alert", "alert-danger");
    input_answer.append(div)
    div.textContent = "Wrong Answer";
    setTimeout(function(){ input_answer.innerHTML = ""; }, 500);
};

startbutton.addEventListener('click', function () {
    start_menu.style.visibility = "hidden";
    quiz_div.style.visibility = "visible";
    main()
});

$(UL).click(function(event){
    
    if (event.target.id === correct_answer) {
        right_answer()
    }
    else{
        wrong_answer()
    }

    if ($.isNumeric(event.target.id)) {
        main()
    }
});