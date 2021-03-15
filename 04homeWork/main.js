const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"]
const marks = [4, 5, 5, 3, 4, 5]

function getPairs(students) {
    const pairsOfStudents = [[students[0], students[2]], [students[1], students[3]], [students[4], students[5]]]
    return pairsOfStudents
}
const pairsOfStudents = getPairs(students)
console.log(pairsOfStudents)

function getPairsAndThemes(pairs, themes) {
    const pairsAndThemes = []
    for (let i = 0; i < pairs.length; i++) {
        let pair = pairsOfStudents[i]
        pairsAndThemes[i] = [pair.join(' і '), themes[i]]
    }
    return pairsAndThemes
}
const pairsAndThemes = getPairsAndThemes(pairsOfStudents, themes)
console.log(pairsAndThemes)

function getStudentsAndMarks(students, marks) {
    const studentsAndMarks = []
    for (let i = 0; i < students.length; i++) {
        studentsAndMarks[i] = [students[i], marks[i]]
    }
    return studentsAndMarks
}
const studentsAndMarks = getStudentsAndMarks(students, marks)
console.log(studentsAndMarks)


function getPairsAndRandomMark(pairs, themes) {
    const pairsAndRandomMark = []
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    for (let i = 0; i < pairs.length; i++) {
        let pair = pairsOfStudents[i]
        pairsAndRandomMark[i] = [pair.join(' і '), themes[i], getRandomInt(1, 6)]
    }
    return pairsAndRandomMark
}
const pairsAndRandomMark = getPairsAndRandomMark (pairsOfStudents, themes)
console.log(pairsAndRandomMark)