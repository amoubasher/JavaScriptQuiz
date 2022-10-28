var qs = function(tag){
    return document.querySelector(tag);
};

var quiz = document.getElementById("quiz");

var timerEl = qs(".timer-count");

var timeLeft = 120;


var questions = [
    {
        title: "Which character(s) means strict quality?",
        answers: [
            {
                answer: "=",
                correct: false
            },
            {
                answer: "==",
                correct: false
            },
            {
                answer: "===",
                correct: true
            },
            {
                answer: "-=-=-",
                correct: false
            }
        ]
    },
    {
        title: "After writing out a function, how will the page know to execute it?",
        answers: [
            {
                answer: "The page will automatically know",
                correct: false
            },
            {
                answer: "The user must call the function in the console",
                correct: false
            },
            {
                answer: "The function must be called after the function is written out",
                correct: true
            },
            {
                answer: "The user must call the function in a separate JS file and add it to the page",
                correct: false
            }
        ]
    },
    {
        title: "Which shows the correct syntax for setting a style attribute to an element",
        answers: [
            {
                answer: "document.setStyle('setAttribute'('style', ...)",
                correct: false
            },
            {
                answer: "stlye.document('varName', 'style' ...)",
                correct: false
            },
            {
                answer: "varName.setAttribute('style', ...);",
                correct: true
            },
            {
                answer: "varName.setStyle('attribute', ...)",
                correct: false
            }
        ]
    },
    {
        title: "What is the correct syntax for declaring a function?",
        answers: [
            {
                answer: "var = function() {...}",
                correct: false
            },
            {
                answer: "function = funcName() {...}",
                correct: false
            },
            {
                answer: "function funcName(){...}",
                correct: true
            },
            {
                answer: "function{...}",
                correct: false
            }
        ]
    }
]

var currentQuestion = 0;
var state = {
    
}

function homePage(){
    quiz.innerHTML = `
        <h1> Coding Quiz! </h1>
        <h2> Are You Ready? </h2>
        <button id="startQuiz"> Start Quiz </button>
    `

    document.getElementById('startQuiz').addEventListener('click', function(){
        questionPage(questions[currentQuestion]);
        startTimer();
    })
}

var startTimer = function() {
    interval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = timeLeft;
        if(timeLeft === 0) {
            gameOver();
        }
    }, 1000)
}


function questionPage(question) {
    quiz.innerHTML = `
        <h1>${question.title}</h1>
        <ul>
            <li><button id="answerOne" data-correct="${question.answers[0].correct}">${question.answers[0].answer}</button></li>
            <li><button id="answerTwo" data-correct="${question.answers[1].correct}">${question.answers[1].answer}</button></li>
            <li><button id="answerThree" data-correct="${question.answers[2].correct}">${question.answers[2].answer}</button></li>
            <li><button id="answerFour" data-correct="${question.answers[3].correct}">${question.answers[3].answer}</button></li>
        </ul>
    `
    document.getElementById('answerOne').addEventListener('click', function(event){
        if (event.currentTarget.dataset.correct === "true"){
            alert('Nice work!')
        } else {
            alert('False!')
            // Take off time!
        }
        currentQuestion++
        questionPage(questions[currentQuestion])
    })

    document.getElementById('answerTwo').addEventListener('click', function(event){
        if (event.currentTarget.dataset.correct === "true"){
            alert('Nice work!')
        } else {
            alert('False!')
            // Take off time!
        }
        currentQuestion++
        questionPage(questions[currentQuestion])
    })

    document.getElementById('answerThree').addEventListener('click', function(event){
        if (event.currentTarget.dataset.correct === "true"){
            alert('Nice work!')
        } else {
            alert('False!')
            // Take off time!
        }
        currentQuestion++
        questionPage(questions[currentQuestion])
    })

    document.getElementById('answerFour').addEventListener('click', function(event){
        if (event.currentTarget.dataset.correct === "true"){
            alert('Nice work!')
        } else {
            alert('False!')
            // Take off time!
        }
        currentQuestion++
        if (questions.length === currentQuestion){
            gameOver();
        }
        questionPage(questions[currentQuestion])
    })

    // currentQuestion++
    // if (questions.length === currentQuestion){
    //     gameOver();
    // }
}

function gameOver() {
    quiz.innerHTML = `
        <h1>Quiz Complete!</h1>
        <form>
            <div>
                <label for="example">Enter your initials!</label>
                <input id="example" type="text" name="text" />
            </div>
            <div>
                <input type="submit" value="Send" />
            </div>
        </form>
    `
}

homePage()