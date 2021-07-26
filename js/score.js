let scoreScreen = document.querySelector("#score"),
  submitButton = document.querySelector("#submitButton"),
  user = [],
  highScoreButton = document.querySelector("#highScoreClickable"),
  score = window.location.search.split("=")[1];

scoreScreen.innerText = `Your Score is ${score} !!`;

highScoreButton.addEventListener("click", () =>
  location.assign("/Js_Quiz/html/highScore.html")
);

submitButton.addEventListener("click", () => {
  let previousUsers = JSON.parse(localStorage.getItem("users")) || [];
  user = [...previousUsers];
  let player = document.querySelector("#playerName").value;
  let temp = {};
  temp.name = player;
  temp.score = score;
  user.push(temp);
  localStorage.setItem("users", JSON.stringify(user));
  location.assign("/Js_Quiz/html/highScore.html");
});
