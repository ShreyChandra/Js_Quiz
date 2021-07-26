let allUsers = JSON.parse(localStorage.getItem("users")) || [],
  scoreTable = document.querySelector("#scoreTable"),
  restart = document.querySelector("#restartQuiz");

allUsers.forEach((element) => {
  //populating all users with their scores in a table
  let tableRow = document.createElement("tr"),
    colName = document.createElement("td"),
    colScore = document.createElement("td");
  tableRow.setAttribute("class", "tableRows");
  colName.innerText = element.name;
  colScore.innerText = element.score;
  tableRow.appendChild(colName);
  tableRow.appendChild(colScore);
  scoreTable.appendChild(tableRow);
});

restart.addEventListener("click", () => {
  location.assign("/Js_Quiz/html/front.html");
});
