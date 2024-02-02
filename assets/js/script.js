document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
});

let finalScore = 0;

/** Function that reacts when the user chooses an answer */
function chooseAnAnswer() {
  let choices = document.querySelectorAll(".choices");

  choices.forEach((choice) => {
    choice.addEventListener("click", function () {
      choices.forEach((otherChoice) => {
        otherChoice.classList.remove("chosen");
      });
      choice.classList.add("chosen");
    });
  });
  return;
}

chooseAnAnswer();

/** Function that decides which is the correct answe and increments the final score */
function decideIfCorrectIncrementScore() {
  let chosenAnswer = chooseAnAnswer();
  let correctAnswer = document.querySelector(".correct-answer");

  if (chosenAnswer == correctAnswer) {
    finalScore++;
    console.log("Correct!");
  } else {
    console.log("Incorrect!");
  }
}
decideIfCorrect();

/** Function that takes use to next page and calls decideIfCorrect function */
function goToNextPage() {
  document.addEventListener("click", function () {
    decideIfCorrect();
    document.getElementById("quiz-next-page").style.backgroundColor = "#FA5F22";
  });
}

// function moveToNextPage() {

// };
