document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    });


 
/** Function that reacts when the user chooses an answer */
function chooseAnAnswer() {
    let choices = document.querySelectorAll(".choices");

    choices.forEach(choice => {
      choice.addEventListener("click", function() {
        // Remove the 'chosen' class from all choices
        choices.forEach(otherChoice => {
          otherChoice.classList.remove("chosen");
        });
    
        // Add the 'chosen' class to the clicked choice
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
