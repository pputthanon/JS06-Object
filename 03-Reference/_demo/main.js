const log = console.log;
log("Learning Reference");

// Copied by Value : เอาแค่ค่ามันมาเก็บ
// Copied by Reference


//Primitive
let message = "Hello";
let word = message;
log(message); // "Hello"
log(word); // "Hello"

// copied by Value
message = "Hi";
log(message);// "Hi"
log(word); // "Hello" : อ้างอิงแค่ตอนแรกตอนเดียว ไม่ได้มีผลเมื่อเปลี่ยน value = copied by value


// Object / Non-Primitive
// user เก็บ address ของ Literal Object
let user = {
    name : 'John',
};

// copied by reference
// assign address ของ user ให้ employee
let employee = user;
log(employee); // John


user.name = "Jane";
log(user); // Jane
log(employee); // Jane