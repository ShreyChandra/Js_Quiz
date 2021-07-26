let startQuiz = document.querySelector("#startQuiz"),
  highScoreButton = document.querySelector("#highScoreClickable");

startQuiz.addEventListener("click", () => {
  location.assign("/Js_Quiz/html/questions.html");
});

highScoreButton.addEventListener("click", () =>
  location.assign("/Js_Quiz/html/highScore.html")
);
