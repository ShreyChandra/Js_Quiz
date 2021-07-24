let startQuiz = document.querySelector("#startQuiz"),
  highScoreButton = document.querySelector("#highScoreClickable");

startQuiz.addEventListener("click", () => {
  location.assign("/html/questions.html");
});

highScoreButton.addEventListener("click", () =>
  location.assign("/html/highScore.html")
);
