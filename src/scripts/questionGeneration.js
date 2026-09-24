import { shuffle, getRandomItems } from './utils.js'

function getNoteIndex(note, notes) {
    return notes.findIndex(
        (item) => item.name === note.name
    )
}

function getNextNote(note, notes) {
    const index = getNoteIndex(note, notes)
    return notes[(index + 1) % notes.length]
}

function getPreviousNote(note, notes) {
    const index = getNoteIndex(note, notes)
    return notes[
        (index - 1 + notes.length) % notes.length
    ]
}

export function generateNoteToLetterQuestion(note, notes) {
    const incorrectOptions = notes
        .filter((item) => item.letter !== note.letter)
        .map((item) => item.letter)

    const options = shuffle([
        note.letter,
        ...getRandomItems(incorrectOptions, 3)
    ])

    return {
        question: `Qual é a letra correspondente ao ${note.name}?`,
        options,
        answer: note.letter,
        explanation:
            `O ${note.name} corresponde à letra ${note.letter} ` +
            "na notação musical."
    }
}

export function generateLetterToNoteQuestion(note, notes) {
    const incorrectOptions = notes
        .filter((item) => item.name !== note.name)
        .map((item) => item.name)

    const options = shuffle([
        note.name,
        ...getRandomItems(incorrectOptions, 3)
    ])

    return {
        question: `Qual nota é representada pela letra ${note.letter}?`,
        options,
        answer: note.name,
        explanation:
            `A letra ${note.letter} representa a nota ${note.name}.`
    }
}

export function generateNextNoteQuestion(note, notes) {
    const correctNote = getNextNote(note, notes)

    const incorrectOptions = notes
        .filter((item) => item.name !== correctNote.name)
        .map((item) => item.name)

    const options = shuffle([
        correctNote.name,
        ...getRandomItems(incorrectOptions, 3)
    ])

    return {
        question: `Qual nota vem depois do ${note.name}?`,
        options,
        answer: correctNote.name,
        explanation:
            `A sequência é ${note.name} → ${correctNote.name}.`
    }
}

export function generatePreviousNoteQuestion(note, notes) {
    const correctNote = getPreviousNote(note, notes)

    const incorrectOptions = notes
        .filter((item) => item.name !== correctNote.name)
        .map((item) => item.name)

    const options = shuffle([
        correctNote.name,
        ...getRandomItems(incorrectOptions, 3)
    ])

    return {
        question: `Qual nota vem antes do ${note.name}?`,
        options,
        answer: correctNote.name,
        explanation:
            `A sequência é ${correctNote.name} → ${note.name}.`
    }
}

export function generateSequenceQuestion(notes) {
    const startIndex = Math.floor(
        Math.random() * (notes.length - 3)
    )

    const sequence = notes.slice(startIndex, startIndex + 4)
    const missingIndex = 2

    const correctNote = sequence[missingIndex]

    const displayedSequence = sequence.map((note, index) => {
        return index === missingIndex ? "?" : note.name
    })

    const incorrectOptions = notes
        .filter((note) => note.name !== correctNote.name)
        .map((note) => note.name)

    const options = shuffle([
        correctNote.name,
        ...getRandomItems(incorrectOptions, 3)
    ])

    return {
        question:
            `Qual nota completa a sequência ` +
            `${displayedSequence.join(", ")}?`,
        options,
        answer: correctNote.name,
        explanation:
            `A sequência correta é ${sequence
                .map((note) => note.name)
                .join(", ")}.`
    }
}