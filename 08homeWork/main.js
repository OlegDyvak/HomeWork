class Student {
    constructor(university, course, fullName, arrMarks = [], dismiss = false) {
        this.university = university
        this.course = course
        this.fullName = fullName
        this.arrMarks = arrMarks
        this.dismiss = dismiss
    }

    get getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
    }

    get getMarks() {
        if (!this.dismiss) {
            return this.arrMarks
        } else return null
    }

    setMarks(mark) {
        if (!this.dismiss) {
            this.arrMarks = this.arrMarks.concat(mark)
            return this.arrMarks
        } else return null
    }

    get getAverageMark() {
        let sum = 0
        let averageMark = 0
        this.arrMarks.forEach((mark) => {
            sum += mark
        })
        averageMark = sum / this.arrMarks.length
        return averageMark.toFixed(3)
    }

    setDismiss() {
        this.dismiss = true
        return this.dismiss
    }

    recover() {
        this.dismiss = false
        return this.dismiss
    }
}

const oleh = new Student('KPI', 7, 'Oleh Dyvak')
console.log(oleh.getInfo)
oleh.setDismiss()
oleh.recover()
oleh.setMarks(5)
oleh.setMarks(4)
oleh.setMarks(5)
console.log(oleh.getMarks)
console.log(oleh.getAverageMark)

