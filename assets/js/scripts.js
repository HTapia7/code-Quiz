// Psuedo Code
// Set timer
// questions
// scoreboard

var questions = [
    {
    question: "What does HTML stand for?",
    answers: "Hyper Text Markup Language",
    options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language"
    ]
    },
    {
    question: "What does CSS stand for?",
    answers: "Cascading Style Sheet",
    options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet"
    ]
    },
    {

    question: "Which do you use for an array ?",
    answers: "brackets",
    options: [
        "commas",
        "paranthesis",
        "curly braces",
        "brackets"
    ]
    },
    {

    question: "What does SQL stand for?",
    answers: "Structured Query Language",
    options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language"
    ]
    },
    {

    question: "Strings can be stored in _____ ?",
    answers: "quotes",
    options: [
        "commas",
        "paranthesis",
        "curly braces",
        "quotes"
    ]
    }]

var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainer = document.getElementById('question-container')
var question = document.getElementById('question')
var answers = document.getElementById('answer-buttons')


addEventListener('click' , startGame)

function startGame(){
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
};

function showQuestion(question) {
    question.innerText = question[0].question
}
