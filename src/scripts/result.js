const correctAnswersElement = document.getElementById("correct-answers")
const totalQuestionsElement = document.getElementById("total-questions")
const percentageElement = document.getElementById("percentage")

const correctAnswers = Number(params.get("correct"))
const totalQuestions = Number(params.get("total"))

const percentage = Math.round(
    (correctAnswers / totalQuestions) * 100
)

correctAnswersElement.textContent = correctAnswers
totalQuestionsElement.textContent = totalQuestions
percentageElement.textContent = `${percentage}%`