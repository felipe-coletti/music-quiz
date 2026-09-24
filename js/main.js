const questionCounter = document.getElementById('question-counter')
const progressBar = document.getElementById('progress-bar')
const form = document.getElementById('form')
const question = document.getElementById('question')
const options = document.getElementById('options')

let currentQuestionIndex = 0

const questions = [
    {
        question: 'Qual é a letra correspondente ao Dó?',
        options: ['A', 'B', 'C', 'D'],
        answer: 'C'
    },
    {
        question: 'Qual nota é representada pela letra F?',
        options: ['Dó', 'Ré', 'Mi', 'Fá'],
        answer: 'Fá'
    }
]

function showQuestion(questionData) {
    question.textContent = questionData.question

    options.innerHTML = ''

    questionData.options.forEach((option, index) => {
        const label = document.createElement('label')
        const input = document.createElement('input')

        input.type = 'radio'
        input.name = 'answer'
        input.value = option
        input.id = `option-${index}`

        label.htmlFor = input.id
        label.append(input, ` ${option}`)

        options.appendChild(label)
    })

    questionCounter.textContent =
        `${currentQuestionIndex + 1}/${questions.length}`

    progressBar.value = currentQuestionIndex + 1
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const selectedAnswer = form.querySelector(
        'input[name="answer"]:checked'
    )

    if (!selectedAnswer) {
        return
    }

    const currentQuestion = questions[currentQuestionIndex]

    if (selectedAnswer.value === currentQuestion.answer) {
        console.log('Resposta correta!')
    } else {
        console.log('Resposta incorreta!')
    }
})

showQuestion(questions[currentQuestionIndex])