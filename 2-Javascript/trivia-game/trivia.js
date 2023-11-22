const questionDiv = document.getElementById("question");
const answerDiv = document.getElementsById("answer");
const feedbackDiv = document.getElementById("feedback");

function getTriviaQuestion() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = Math.floor(Math.random() * questions.length);
      const question = questions[index];

      if (index > questions.length) {
        reject("An error occurred while fetching the trivia question.");
      } else {
        resolve(question);
      }
    }, 1000);
  });
}

function displayQuestion(triviaQuestion) {
  questionDiv.textContent = triviaQuestion.question;
  answerDiv.value = "";
  feedbackDiv.textContent = "";
}

document.querySelector("#questionBtn").addEventListener("click", () => {
  getTriviaQuestion()
    .then((question) => {
      displayQuestion(question);
    })
    .catch((error) => {
      console.log(error);
    });
});

document.querySelector("#answerBtn").addEventListener("click", () => {
  let feedbackMessage;
  const userAnswer = answerDiv.value.trim().toLowerCase();
  console.log(userAnswer, currentQuestion.answer);
  if (currentQuestion && userAnswer === currentQuestion.answer.toLowerCase()) {
    feedbackDiv.style.color = "green";
    feedbackMessage = "Great Job! Your answer is correct.";
  } else {
    feedbackDiv.style.color = "red";
    feedbackMessage = `Sorry, this is incorrect. The correct answer is "${currentQuestion.answer}". Try another question!`;
  }
  feedbackDiv.textContent = feedbackMessage;
});
