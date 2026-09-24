const questions = [
    {
        category: "Alfabeto musical",
        question: "Qual é a letra correspondente ao Dó?",
        options: ["A", "B", "C", "D"],
        answer: "C"
    },
    {
        category: "Alfabeto musical",
        question: "Qual é a letra correspondente ao Ré?",
        options: ["C", "D", "E", "F"],
        answer: "D"
    },
    {
        category: "Alfabeto musical",
        question: "Qual é a letra correspondente ao Mi?",
        options: ["D", "E", "F", "G"],
        answer: "E"
    },
    {
        category: "Alfabeto musical",
        question: "Qual é a letra correspondente ao Fá?",
        options: ["E", "F", "G", "A"],
        answer: "F"
    },
    {
        category: "Alfabeto musical",
        question: "Qual é a letra correspondente ao Sol?",
        options: ["F", "G", "A", "B"],
        answer: "G"
    },
    {
        category: "Alfabeto musical",
        question: "Qual é a letra correspondente ao Lá?",
        options: ["G", "A", "B", "C"],
        answer: "A"
    },
    {
        category: "Alfabeto musical",
        question: "Qual é a letra correspondente ao Si?",
        options: ["A", "B", "C", "D"],
        answer: "B"
    },
    {
        category: "Alfabeto musical",
        question: "Qual nota é representada pela letra C?",
        options: ["Dó", "Ré", "Mi", "Si"],
        answer: "Dó"
    },
    {
        category: "Alfabeto musical",
        question: "Qual nota é representada pela letra F?",
        options: ["Mi", "Fá", "Sol", "Lá"],
        answer: "Fá"
    },
    {
        category: "Alfabeto musical",
        question: "Qual nota é representada pela letra A?",
        options: ["Sol", "Lá", "Si", "Dó"],
        answer: "Lá"
    }
]

function checkAnswer(selectedAnswer, correctAnswer) {
    return selectedAnswer === correctAnswer;
}