// this keyword

const student = {
    name : "abhishek warad",
    age : 23,
    eng : 95,
    math : 97,
    getAvg() {
        let avg = (this.eng + this.math)/2;
        console.log(avg);
    }
}

student.getAvg();