var readlineSync = require("readline-sync");
var userName = readlineSync.question("May I know your name ? ");
var welcomeMsg = readlineSync.question("Welcome " + userName + " !");
var score = 0;
var highScore = [{name: "Anup",score: 3}]
var questionOne = {
  question: "Do you know Anup ? ",
  answer: "yes"
}

var questionTwo = {
  question: "Who is my favorite superhero ? ",
  answer: "superman"
}

var questionThree = {
  question: "Which series do I like the most ? ",
  answer: "suites"
}

var questions = [questionOne, questionTwo, questionThree]
function que(questionf,answerf){
  answer = readlineSync.question(questionf) 
  if(answer === answerf){
    console.log()
    score++
  }
  else{
    score--
  }
  console.log(score)
}

for(i=0; i<questions.length; i++){
  var result = que(questions[i].question,questions[i].answer)
}
console.log("Your Score is : ", score)
for(i=0;i<highScore.length;i++){
  console.log("Highest Score of " + highScore[i].name + " that is "+ highScore[i].score)
}