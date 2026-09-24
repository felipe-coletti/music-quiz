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

export function generateQuestions() {
    return [
        generateNoteToLetterQuestion(notes[0], notes),
        generateLetterToNoteQuestion(notes[3], notes),
        generateNextNoteQuestion(notes[2], notes),
        generatePreviousNoteQuestion(notes[5], notes),
        generateSequenceQuestion(notes)
    ]
}