/*Set of questions*/
var gameQuestions = [
 {question: "What are JavaScript Data Types?",
  answerChoices:['Boolean','Integer','String','All of the above'],
  corretAnswer:"All of the above"
},
{question: "What is === operator?",
answerChoices:['equality operator','not equality','addition','none of the above'],
corretAnswer:"equality operator"
},
{question: "What are all the types of Pop up boxes available in JavaScript?",
answerChoices:['Alert','change','hello','printf'],
corretAnswer:'Alert'
},
{question: "What should appear at the very end of your JavaScript?",
answerChoices:['The </script>','The <script>','The END statement','None of the above'],
corretAnswer:'The </script>'
},
{question: "Inside which HTML element do we put the JavaScript?",
answerChoices:['<javascript>','<script>','<scripting>','<js>'],
corretAnswer:'<script>'
}];

document.getElementById("button-start").addEventListener('click', function(){

  startQuiz();
  


});


function startQuiz(gameQuestions)
{
  var element = document.createElement('p');
  element.textContent(gameQuestions[0]);
  

}


function startTimer(){

}

function quizScore(){

}
