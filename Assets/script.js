// utility function to select an element based on tag
var qs = function(tag){
    return document.querySelector(tag);
};

// add all the elements that we will be interacting with
var quiz = document.getElementById("quiz");
var timerEl = qs(".timer-count");
var timeLeft = 120;
var interval;
var correct = 0;
var wrong = 0;
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


// Start the functions that will run the logic of the page
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


// Code a timer
var startTimer = function() {
    interval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = timeLeft;
        if(timeLeft === 0) {
            gameOver();
        }
    }, 1000)
}

// Add the questions & answers for the user to answer. The 3rd answer will be the correct one for now
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
        // Let them know if they got it right & make the correct counter go up
        if (event.currentTarget.dataset.correct === "true"){
            alert('Nice work!')
            correct++;
        // Let them know if they got it wrong & make the wrong counter go up
        } else {
            alert('False!')
            wrong++;
            // Take off time!
            timeLeft = timeLeft - 30;
        }
        // Make the page change to the next question, add logic if the quiz is done
        currentQuestion++
        if (questions.length === currentQuestion){
            gameOver();
        }
        questionPage(questions[currentQuestion])
    })

    document.getElementById('answerTwo').addEventListener('click', function(event){
        if (event.currentTarget.dataset.correct === "true"){
        // Let them know if they got it right & make the correct counter go up
            alert('Nice work!')
            correct++;
        } else {
        // Let them know if they got it wrong & make the wrong counter go up
            alert('False!')
            wrong++;
            // Take off time!
            timeLeft = timeLeft -30;
        }
        // Make the page change to the next question, add logic if the quiz is done
        currentQuestion++
        if (questions.length === currentQuestion){
            gameOver();
        }
        questionPage(questions[currentQuestion])
    })

    document.getElementById('answerThree').addEventListener('click', function(event){
        if (event.currentTarget.dataset.correct === "true"){
        // Let them know if they got it right & make the correct counter go up
            alert('Nice work!')
            correct++;
        // Let them know if they got it wrong & make the wrong counter go up
        } else {
            alert('False!')
            wrong++;
            // Take off time!
            timeLeft = timeLeft - 30;
        }
        // Make the page change to the next question, add logic if the quiz is done
        currentQuestion++
        if (questions.length === currentQuestion){
            gameOver();
        }
        questionPage(questions[currentQuestion])
    })

    document.getElementById('answerFour').addEventListener('click', function(event){
        if (event.currentTarget.dataset.correct === "true"){
        // Let them know if they got it right & make the correct counter go up
            alert('Nice work!')
            correct++;
        // Let them know if they got it wrong & make the wrong counter go up
        } else {
            alert('False!')
            wrong++;
            // Take off time!
            timeLeft = timeLeft - 30;
        }
        // Make the page change to the next question, add logic if the quiz is done
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


// If the timer runs out or the user answers the last question, run a function that stops the timer, shows them how many are correct/wrong
// Lets them add their initials and lets them record it in local storage
function gameOver() {
    // stop timer
    clearInterval(interval);
    quiz.innerHTML = `
        <h1>Quiz Complete!</h1>
        <form>
            <div>
            <h3 class='correct'>Correct: ${correct}</h3>
            <h3 class='wrong'>Wrong: ${wrong}</h3>
                <label for="example">Enter your initials!</label>
                <input id="example" type="text" name="text" />
            </div>
            <div>
                <input type="submit" value="Send" />
            </div>
        </form>
    `
}


// Write a function for localStorage for the correct/wrong & the initals of the user.

homePage()