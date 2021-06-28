var quiz_div = document.getElementById("Quiz");
var start_menu = document.getElementById("Start");
var startbutton = document.getElementById("btn");
var play_again = document.getElementById('play_again');
var current_question = document.getElementById("question");
var input_answer = document.getElementById("answer_state");
var highscore_div = document.getElementById("endgame");
var The_Score = document.getElementById('new_score');
var UL = document.getElementById("answers");

var counter = 0;
var current_key = 0;
var timeleft = 100;
var score = "";


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
var correct_answer = The_Questions[counter].actual_answer;;
var i = 100;

function main(){
    if (counter <= length){
    UL.innerHTML = "";
    display_question()
    display_answers()
    }
    

};

function Progress_Timer(){
    

    var Progresscountdown =setInterval(function(){
        i--;
        timeleft--;
        if (i > 0){
            $('.progress-bar').css('width', i+'%');
        }
        else{
            clearInterval(Progresscountdown);
            Highschore()
            console.log('appples are blue')
            score = 0;
            return;
        }

    }, timeleft);
    
};

function display_question() {
    
    if (The_Questions[counter] == undefined){
        
        score = i;
        console.log(score)
        setTimeout(function(){ Highschore() }, 500);
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
    correct_answer = The_Questions[counter].actual_answer;
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

function Highschore(){
    The_Score.textContent = score;
    quiz_div.style.visibility = 'hidden';
    highscore_div.style.visibility = 'visible';
};

startbutton.addEventListener('click', function () {
    i = 100;
    timeleft = 100;
    start_menu.style.visibility = "hidden";
    quiz_div.style.visibility = "visible";
    highscore_div.style.visibility = 'hidden';
    main()
    Progress_Timer()
});

$(UL).click(function(event){
    
    if (event.target.id === correct_answer) {
        right_answer()
    }
    else{
        wrong_answer()
        i -= 20;
    }

    if ($.isNumeric(event.target.id)) {
        main()
    }
});

play_again.addEventListener('click', function(){
    counter = 0;
    i = 100;
    timeleft = 100;
    $('.progress-bar').css('width', i+'%')
    start_menu.style.visibility = "hidden";
    quiz_div.style.visibility = "visible";
    highscore_div.style.visibility = 'hidden';
    main()
    Progress_Timer()
});