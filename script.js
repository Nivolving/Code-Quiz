var quizBeginEl = document.getElementById("quizBegin");
var startButtonEl = document.getElementById("quiz-start")
var quizEl = document.getElementById('quiz');
var quizEndEl = document.getElementById('quizEnd');
var questionEl = document.getElementById("question");
var timeEl = document.getElementById("timer");
var submitDivEl = document.getElementById("submit-initials");
var answerLabeEl0 = document.getElementById("option0");
var answerLabeEl1 = document.getElementById("option1");
var answerLabeEl2 = document.getElementById("option2");
var answerLabeEl3 = document.getElementById("option3");
var highScoreView = document.getElementById("highscore");
var index = 0;
var quizTime = 75;
var elapsedTime = 0;
var score = 0;
var timerInterval = 0;
var result = document.createElement("p");
result.setAttribute('style', 'font-family:Impact,Charcoal,sans-serif')

/* function to begin the quiz : adding EventListener:"Click" to get the event started */

startButtonEl.addEventListener('click', function () {
  quizBeginEl.setAttribute("class", 'd-none');
  quizEl.setAttribute("class", "container");
  setTime();
  startQuiz(index);

  answerLabeEl0.addEventListener("click", function () {
    validateInput(answerLabeEl0);
  });
  answerLabeEl1.addEventListener("click", function () {
    validateInput(answerLabeEl1);
  });
  answerLabeEl2.addEventListener("click", function () {
    validateInput(answerLabeEl2);
  });
  answerLabeEl3.addEventListener("click", function () {
    validateInput(answerLabeEl3);
  });

  document.getElementById("nextbutton").addEventListener('click', function () {
    ["option0", "option1", "option2", "option3"].forEach(function (id) {
      document.getElementById(id).checked = false;
    });
    index++;
    if(index >= gameQuestions.length){
      clearInterval(timerInterval);
      quizEl.setAttribute("class", "d-none");
      submitDivEl.setAttribute("class", "container");
      //console.log(quizTime);
     //console.log(timeEl.value);
      score = parseInt(timeEl.value) + score;
      document.getElementById("final-score").setAttribute("value",score);
      timeEl.value = " ";
      

    }
    else{
      startQuiz(index);
    }
    result.innerHTML = " ";
    quizEl.append(result);
  
  });
});

highScoreView.addEventListener("click", function(){

  submitDivEl.setAttribute("class", "d-none");
  quizBeginEl.setAttribute("class", 'd-none');
  document.getElementById("Nav-Container").setAttribute("class", 'd-none');
  quizEl.setAttribute("class","d-none");
  quizEndEl.setAttribute("class", "container");
  timeEl.setAttribute("type","hidden");
  
});
  
/* As i have created an array of game questions and answers as an nested array inside my gamequestions
created the below for loop to get the elements for my list option*/
function startQuiz(qnIndex) {
  questionEl.innerHTML = gameQuestions[qnIndex].question;
  for (var i = 0; i < gameQuestions[qnIndex].answerChoices.length; i++) /**runs the length of my answerChoices array*/ {
    //console.log(gameQuestions[qnIndex].answerChoices);
    document.getElementById('option' + i).setAttribute("value", gameQuestions[qnIndex].answerChoices[i]);
    document.getElementById('answerchoices' + i).innerHTML = gameQuestions[qnIndex].answerChoices[i];
    //console.log(gameQuestions[qnIndex].answerChoices[i]);

  }
}

function validateInput(ansIndex) {
  var userInput = ansIndex.getAttribute("value");
  if (userInput === gameQuestions[index].correctAnswer) {
    //var hrTag = document.createElement("hr");
    result.innerHTML = "Correct";
    score = score + 5;
    elapsedTime = quizTime - timeEl.value;
    score = elapsedTime + score;
    quizEl.append(result);
    //var x = timeEl.getAttribute("value");
    
  }
  else {
    result.innerHTML = "Incorrect";
    quizTime = quizTime - 10;
    quizEl.append(result);
  }
}


function setTime() {
  timerInterval = setInterval(function () {
    quizTime--;
    timeEl.value = quizTime;
    //console.log(quizTime)

    if (quizTime === 0) {
      clearInterval(timerInterval);
      timeEl.value =+ score;
      document.getElementById("final-score").setAttribute("value",timeEl.value);
      timeEl.value = " ";
      quizEl.setAttribute("class", "d-none");
      submitDivEl.setAttribute("class", "container");
    }

  }, 1000);
}



document.getElementById('submit-id').addEventListener('click', function(){


var initials = document.getElementById("input-initial").value;
localStorage.setItem("highScore",JSON.stringify([initials,score]));
var exsistingScore = JSON.parse(localStorage.getItem("highScore"));
if(exsistingScore == null) exisitngScore = [];
exsistingScore.push("highScore");
var array = JSON.parse(localStorage.getItem("highScore"));
var obj = JSON.stringify(array);
//console.log(localStorage.getItem("highScore"));
console.log(obj);
var newElement = document.createElement("p");
newElement.innerHTML = obj;
document.getElementById("chart").append(newElement);



})

