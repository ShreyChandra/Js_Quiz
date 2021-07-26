let startQuiz = document.querySelector("#startQuiz"),
  highScoreButton = document.querySelector("#highScoreClickable");

startQuiz.addEventListener("click", () => {
  location.assign("questions.html");
});

highScoreButton.addEventListener("click", () =>
  location.assign("highScore.html")
);
