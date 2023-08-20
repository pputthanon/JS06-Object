// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

function Calculator (x,y) {
    this.read = function() {
        console.log(`Inputs are ${x} , ${y}`)
    },
    this.sum = function () {
        console.log(`Summary is ${x+y}`)
    },
    this.mul = function () {
        console.log(`Summary is ${x*y}`)
    }
}

const input1 = new Calculator (4,5);
input1.read();
input1.sum();
input1.mul();

