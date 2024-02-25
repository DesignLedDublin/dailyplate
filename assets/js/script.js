document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
});

let chosenAnswer = null;
let finalScore = localStorage.getItem("finalScore");
finalScore = finalScore ? JSON.parse(finalScore) : 0;

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
  if (chosenAnswer === correctAnswer) {
    finalScore++;
    document.getElementById("wrong-or-right").innerHTML = "Correct!";
  } else {
    document.getElementById("wrong-or-right").innerHTML = "Incorrect!";
  }
  localStorage.setItem("finalScore", JSON.stringify(finalScore));

  setTimeout(() => {
    document.getElementById("wrong-or-right").innerHTML = "";}, 3000); 
}

/** Function that takes user to the next question and calls decideIfCorrect function */
// function nextQuestion() {
//   document.getElementById("quiz-next-question").addEventListener("click", function () {
//       decideIfCorrectIncrementScore();
//     });
//   };

// nextQuestion();

// ------------------------------------


function nextQuestion(pagesMap) {
  const handleNextClick = () => {
    // Get the current page filename
    const currentPage = window.location.pathname.split('/').pop();
  
    // Get the next page URL based on the current page
    const nextPage = pagesMap[currentPage];
  
    // Ensure nextPage is defined
    if (nextPage) {
      // Show correct/incorrect message
      decideIfCorrectIncrementScore();
  
      // Disable the button and show message for 3 seconds
      document.getElementById("quiz-next-question").disabled = true;
      setTimeout(() => {
        document.getElementById("quiz-next-question").disabled = false;
      }, 3000);
  
      // Navigate to the specified next page after delay
      setTimeout(() => {
        window.location.href = nextPage;
      }, 3000);
    } else {
      console.error('Next page not found in pagesMap');
    }
  
    // Ensure to prevent default behavior and stop event propagation
    return false;
  };

  // Add event listener during initialization
  document.getElementById("quiz-next-question").addEventListener("click", handleNextClick);
}


// Define a map of pages to their corresponding URLs
const pagesMap = {
  'quiz-page-1.html': 'quiz-page-2.html',
  'quiz-page-2.html': 'quiz-page-3.html',
  'quiz-page-3.html': 'quiz-page-4.html',
  'quiz-page-4.html': 'quiz-page-5.html',
  'quiz-page-5.html': 'quiz-page-6.html',
  'quiz-page-6.html': 'quiz-page-final.html',
  'quiz-page-final.html': 'score-page.html',
  // Add mappings for all your HTML pages here
};

// Call nextQuestion with the map of pages and URLs
nextQuestion(pagesMap);

// ------------------------------------  



/** Function that shows the user their score */
function showScore() {
  if (finalScore <= 4) {
    document.getElementById("score-text").innerHTML =
      "Oh dear you only scored " + finalScore;
  } else if (finalScore >= 5) {
    document.getElementById("score-text").innerHTML =
      "Yay! You scored " + finalScore;
  } else {
    document.getElementById("score-text").innerHTML =
      "Oh dear, there has been an error.";
  }
}

// finalScores.forEach(finalScore) => {
//  document.write("/assets/images/broccoli_happy");
// };
