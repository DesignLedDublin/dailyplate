document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
});

let finalScore = 0;
let chosenAnswer;

/** Function that reacts when the user chooses an answer */
function chooseAnAnswer() {
  let choices = document.querySelectorAll(".choices");

  choices.forEach((choice) => {
    choice.addEventListener("click", function () {
      choices.forEach((otherChoice) => {
        otherChoice.classList.remove("chosen");
      });
      choice.classList.add("chosen");
      chosenAnswer = choice;
    });
  });

}

chooseAnAnswer();

/** Function that decides which is the correct answer and increments the final score */
function decideIfCorrectIncrementScore() {
  let correctAnswer = document.querySelector(".correct-answer");

  if (chosenAnswer == correctAnswer) {
    finalScore++;
    console.log("Correct!");
  } else {
    console.log("Incorrect!");
  }
}

/** Function that takes use to next page and calls decideIfCorrect function */
function goToNextPage() {
  document.addEventListener("click", function () {
    decideIfCorrectIncrementScore();
    document.getElementById("quiz-next-page").style.backgroundColor = "#FA5F22";
  });
}

/** Function that shows the user their score */
function showScore() {
  
  if (finalScore <= 4) {
    document.getElementById("score-text").innerHTML = "Oh dear you only scored " + finalScore
  } else if (finalScore >= 5){
    document.getElementById("score-text").innerHTML = "Yay! You scored " + finalScore;
  } else {
    document.getElementById("score-text").innerHTML = "Oh dear, there has been an error."
  };
};


  // finalScores.forEach(finalScore) => {
  //  document.write("/assets/images/broccoli_happy");
  // };
