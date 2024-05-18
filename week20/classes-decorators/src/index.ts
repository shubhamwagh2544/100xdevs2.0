class DateClass {
    private timeZone: string
    constructor(timeZone: string) {
        this.timeZone = timeZone
    }
    getTime() {
        return new Date().toDateString()
    }
    getMonth() {
        return new Date().getMonth()
    }
    getYear() {
        return new Date().getFullYear()
    }

    expensiveOperation() {
        const startTime = new Date().getTime()
        let cntr = 0;
        for (let i = 0; i < 10000000000; i++) {
            cntr++;
        }
        // total time taken
        const endTime = new Date().getTime()
        console.log('time taken: ', (endTime - startTime), " ms")       // 8 sec

        return cntr;
    }
}

const dateObject = new DateClass("IND")
console.log(dateObject.getTime())
dateObject.expensiveOperation()