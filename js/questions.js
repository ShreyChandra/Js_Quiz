let timer = document.querySelector("#timer");
let time = 60;
let looper;
timer.innerText = "60"; //setting the initial value of timer as 60 seconds

//Countdown timer function reduces 1 sec from the counter every second
const timeCountdown = () => {
  time -= 1;
  timer.innerText = time;
  if (time <= 0) {
    // if time reaches below 1, the timer stops/clears and final-
    //screen with score is shown, with space to enter player's name
    clearInterval(looper);
    timer.innerText = "0";
    removeElements(document.querySelectorAll(".buttons"));
    finalScreen();
  }
};

looper = setInterval(timeCountdown, 1000);

//question array with objects which have key:values (questions & answers)
let quizQuestions = [
  {
    question: `What is length of "ROVER" string ?`,
    answers: [
      {
        value: "a. 3",
        isCorrect: false,
      },
      {
        value: "b. 4",
        isCorrect: false,
      },
      {
        value: "c. 5",
        isCorrect: true,
      },
      {
        value: "d. 7",
        isCorrect: false,
      },
    ],
  },
  {
    question: `Promises were brought in ______ ?`,
    answers: [
      {
        value: "a. ES3",
        isCorrect: false,
      },
      {
        value: "b. ES6",
        isCorrect: true,
      },
      {
        value: "c. ES7",
        isCorrect: false,
      },
      {
        value: "d. ES2",
        isCorrect: false,
      },
    ],
  },
  {
    question: `What is not a position in CSS?`,
    answers: [
      {
        value: "a. DOM",
        isCorrect: true,
      },
      {
        value: "b. Static",
        isCorrect: false,
      },
      {
        value: "c. Absolute",
        isCorrect: false,
      },
      {
        value: "d. Relative",
        isCorrect: false,
      },
    ],
  },
];

let question = document.querySelector(".display_box"),
  ulEle = document.querySelector("#answerWrapper"),
  resultText = document.querySelector("#resultP"),
  score = 0,
  currentQuestionNumber = 0; //tracks current question number

const loadQuestion = (questionNumber) => {
  currentQuestionNumber = questionNumber;
  question.innerText = quizQuestions[currentQuestionNumber].question;

  //iterating overs answer choices for each question and making buttons for them.
  for (i = 0; i < quizQuestions[currentQuestionNumber].answers.length; i++) {
    const currOption = quizQuestions[currentQuestionNumber].answers[i];
    let liEle = document.createElement("li");
    liEle.textContent = currOption.value;
    liEle.setAttribute("data-correct", currOption.isCorrect);
    liEle.setAttribute("class", "buttons");
    ulEle.appendChild(liEle);
  }
};

loadQuestion(0);

//for removing elements with same class (example: .buttons)
const removeElements = (elms) => elms.forEach((el) => el.remove());

//when clicking options for a question
ulEle.addEventListener("click", (e) => {
  if (e.target.nodeName === "LI") {
    if (e.target.dataset.correct === "true") {
      resultText.innerText = "Right";
      setTimeout(() => {
        resultText.remove();
      }, 500);
      removeElements(document.querySelectorAll(".buttons"));
      score += 10;
      if (currentQuestionNumber === quizQuestions.length - 1) {
        location.assign("/html/score.html");
        // finalScreen();
      } else {
        currentQuestionNumber++;
        loadQuestion(currentQuestionNumber);
      }
    } else {
      resultText.innerText = "Wrong";
      score -= 5; //penalty of 5 points
      time -= 15; //penalty of 15 seconds
    }
  }
});
