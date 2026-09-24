import { generateQuestions } from "./questions.js"

const questionCounter = document.getElementById('question-counter')
const progressBar = document.getElementById('progress-bar')
const form = document.getElementById('form')
const question = document.getElementById('question')
const options = document.getElementById('options')
const primaryButton = document.getElementById("lesson-button")
const feedback = document.getElementById("feedback")

const questions = generateQuestions()

let currentQuestionIndex = 0
let correctAnswers = 0
let questionChecked = false

progressBar.max = questions.length

function showQuestion(questionData) {
    question.textContent = questionData.question

    options.innerHTML = ""
    feedback.textContent = ""
    feedback.hidden = true

    primaryButton.textContent = "Verificar"

    questionChecked = false

    questionData.options.forEach((option, index) => {
        const label = document.createElement("label")
        const input = document.createElement("input")

        input.type = "radio"
        input.name = "answer"
        input.value = option
        input.id = `option-${index}`

        label.className = "option"
        label.htmlFor = input.id
        label.append(input, ` ${option}`)

        options.appendChild(label)
    })

    questionCounter.textContent =
        `${currentQuestionIndex + 1}/${questions.length}`

    progressBar.value = currentQuestionIndex + 1
}

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const currentQuestion = questions[currentQuestionIndex]

    if (!questionChecked) {
        const selectedAnswer = form.querySelector(
            'input[name="answer"]:checked'
        )

        feedback.hidden = false

        if (!selectedAnswer) {
            feedback.textContent = "Selecione uma resposta."
            return
        }

        const isCorrect =
            selectedAnswer.value === currentQuestion.answer

        if (isCorrect) {
            correctAnswers++

            feedback.textContent =
                `Correto! ${currentQuestion.explanation}`
        } else {
            feedback.textContent =
                `Incorreto! A resposta correta é ${currentQuestion.answer}. ` +
                currentQuestion.explanation
        }

        const answerInputs = form.querySelectorAll(
            'input[name="answer"]'
        )

        answerInputs.forEach((input) => {
            input.disabled = true
        })

        questionChecked = true
        primaryButton.textContent = "Próxima pergunta"

        return
    }

    currentQuestionIndex++

    if (currentQuestionIndex >= questions.length) {
        const totalQuestions = questions.length

        const params = new URLSearchParams({
            correct: correctAnswers,
            total: totalQuestions
        })

        window.location.href = `result.html?${params}`

        return
    }

    showQuestion(questions[currentQuestionIndex])
})

showQuestion(questions[currentQuestionIndex])