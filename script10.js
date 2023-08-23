const questions = [
    {
        question: "Which country's flag is this particular flag shown below ?",
        answers: [
            { text: "Tunisia", correct: true},
            { text: "Morocco", correct: false},
            { text: "Turkey", correct: false},
            { text: "Azerbaijan", correct: false},
        ]
    },
    {
        question: "Which country's flag is this particular flag shown below ?",
        answers: [
            { text: "Sri Lanka", correct: false},
            { text: "Suriname", correct: false},
            { text: "Armenia", correct: false},
            { text: "Algeria", correct: true},
        ]
    },
    {
        question: "Which country's flag is this particular flag shown below ?",
        answers: [
            { text: "Japan", correct: false},
            { text: "Belarus", correct: false},
            { text: "Lybia", correct: true},
            { text: "Belgium", correct: false},
        ]
    },
    {
        question: "Which country's flag is this particular flag shown below ?",
        answers: [
            { text: "Egypt", correct: true},
            { text: "Russia", correct: false},
            { text: "Cuba", correct: false},
            { text: "Venezuela", correct: false},
        ]
    },
    {
        question: "Which country's flag is this particular flag shown below ?",
        answers: [
            { text: "Russia", correct: false},
            { text: "Mozambique", correct: false},
            { text: "South Africa", correct: false},
            { text: "Bhutan", correct: true},
        ]
    },
    {
        question: "Which country's flag is this particular flag shown below ?",
        answers: [
            { text: "United States of America", correct: false},
            { text: "Guatemala", correct: true},
            { text: "Tunisia", correct: false},
            { text: "Poland", correct: false},
        ]
    },
    {
        question: "Which country's flag is this particular flag shown below ?",
        answers: [
            { text: "Mexico", correct: false},
            { text: "Myanmar", correct: true},
            { text: "Mongolia", correct: false},
            { text: "Turkmenistan", correct: false},
        ]
    },
    {
        question: "Which country's flag is this particular flag shown below ?",
        answers: [
            { text: "Australia", correct: false},
            { text: "Indonesia", correct: false},
            { text: "Timor Leste", correct: true},
            { text: "Greece", correct: false},
        ]
    },
    {
        question: "Which country's flag is this particular flag shown below ?",
        answers: [
            { text: "New Zealand", correct: false},
            { text: "Congo", correct: true},
            { text: "Colombia", correct: false},
            { text: "Croatia", correct: false},
        ]
    },
    {
        question: "Which country's flag is this particular flag shown below ?",
        answers: [
            { text: "Honduras", correct: false},
            { text: "Morocco", correct: false},
            { text: "Finland", correct: true},
            { text: "Zimbabwe", correct: false},
        ]
    }
];

const questionElement = document.getElementById("questions");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();