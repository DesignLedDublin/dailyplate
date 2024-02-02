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

};

chooseAnAnswer();

/** Function that decides which is the correct answer */
function decideIfCorrect() {

    let correctAnswer = document.querySelectorAll(".correct-answer");
    
    if (chooseAnAnswer == correctAnswer) {
        finalScore++;
    } else {
        finalScore;
    };
};

decideIfCorrect();

// function addToScore() {

// };

// function moveToNextPage() {

// };
