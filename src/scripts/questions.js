import {
    generateNoteToLetterQuestion,
    generateLetterToNoteQuestion,
    generateNextNoteQuestion,
    generatePreviousNoteQuestion,
    generateSequenceQuestion
} from "./questionGeneration.js"

export const notes = [
    { name: "Dó", letter: "C" },
    { name: "Ré", letter: "D" },
    { name: "Mi", letter: "E" },
    { name: "Fá", letter: "F" },
    { name: "Sol", letter: "G" },
    { name: "Lá", letter: "A" },
    { name: "Si", letter: "B" }
]

const questionGenerators = [
    (notes) => generateNoteToLetterQuestion(
        getRandomNote(notes),
        notes
    ),

    (notes) => generateLetterToNoteQuestion(
        getRandomNote(notes),
        notes
    ),

    (notes) => generateNextNoteQuestion(
        getRandomNote(notes),
        notes
    ),

    (notes) => generatePreviousNoteQuestion(
        getRandomNote(notes),
        notes
    ),

    (notes) => generateSequenceQuestion(notes)
]

function getRandomNote(notes) {
    const randomIndex = Math.floor(
        Math.random() * notes.length
    )

    return notes[randomIndex]
}

function getRandomGenerator() {
    const randomIndex = Math.floor(
        Math.random() * questionGenerators.length
    )

    return questionGenerators[randomIndex]
}

export function generateQuestions(amount = 10) {
    const questions = []

    for (let i = 0; i < amount; i++) {
        const generateQuestion = getRandomGenerator()

        questions.push(generateQuestion(notes))
    }

    return questions
}