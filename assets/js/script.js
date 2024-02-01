document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    });


 
/** Function that reacts when the user chooses an answer */
function chooseAnAnswer() {
    let choices = document.querySelectorAll(".choices");

    choices.forEach(choice => {
      choice.addEventListener("click", function() {
        choices.forEach(otherChoice => {
          otherChoice.classList.remove("chosen");
        });
        choice.classList.add("chosen");
      });
    });
};

chooseAnAnswer();



// function decideIfCorrect() {


// };

// function addToScore() {

// };

// function moveToNextPage() {

// };
