const log = console.log;
log('Method and this keyword');

// ####################################################################
//                              Intro Method
// ####################################################################

// Object === Collection of property and Method
// each record => called Property
// each property => <key>:<value>

// some record => <key>:<FN>
// called method == ความสามารถของ Object


// const programmer = {
//     name : 'Bee',
//     age : 24,
//     dev : devWebsite,
//     meet : meeting,
//     lunch : lunch,
// };


// function devWebsite () {
//     console.log("I'm working");
// }

// function meeting () {
//     console.log ("I'm meeting")
// }

// function lunch () {
//     console.log ("Lunch Time")
// }

// // Property
// // Syntax <obj>.<key>
// log(programmer.name);
// log(programmer.age);

// // Method : ความสามารถของ Object
// // Syntax : <obj>.<method>()
// programmer.dev();
// // programmer.dev // devWebsite
// programmer.meet();
// programmer.lunch();




// ####################################################################
//                          Alternative Syntax
// ####################################################################

// const programmer = {
//     name : 'John',
//     age : 30,
//     dev : function() {
//         console.log ("I'm working");
//     },
//     meet : () => console.log ("I'm meeting"),
//     // method shorthand
//     sleep() {
//         console.log ("I'm sleeping");
//     // sleep : () => consloe.log ("I'm sleeping")
//     },
// };


// programmer.dev();
// programmer.meet();
// programmer.sleep();


// ////////////////////////////////////////////////////////////////////////
// // Mini-lab
// // สร้าง Object ของตัวเอว
// // ระบุคุณสมบัติของตัวเอง 2-3 ข้อ
// // ระบุความสามารถของตัวเอง 4 อย่าง (cover ทุก syntax)
// // key : namedFunction
// // key : anonymous FN
// // key : arrow FN
// // key : shortHand

// function playgames(game) {
//     console.log(`I'm playing ${game}`);
// }

// const myself = {
//     name : "Bee",
//     eyes : "Brown",
//     age : 24,
//     gender : "Female",
//     nationality : "Thai",
//     games : playgames,
//     brothers : function() {
//         console.log ("I have 2 brothers")
//     },
//     eat : () => console.log ("I love to eat"),
//     focus(task) { 
//         console.log (`I'm working on ${task} `)
//     }
// }


// myself.games('CSGO');
// myself.brothers();
// myself.eat();
// myself.focus('JS-Lab');



// // ####################################################################
// //                            Intro OOP
// // ####################################################################


// // OOP : Object Oriented Program

// const car = {
//     brand : "Tesla",
//     model : "X",
//     drive : () => console.log ("Driving"),
//     'auto pilot' : () => console.log ("Self Drive"),
// }

// log(car.brand, car.model);

// // Caller.Method
// car.drive ();
// car['auto pilot'] ();

// const calculator = {
//     sum : (x,y) => x + y,
//     minus : (x,y) => x - y,
// }

// let r1 = calculator.sum(5,7);
// let r2 = calculator.minus(7,3);
// log(r1,r2);



// // ####################################################################
// //                           This Keyword
// // ####################################################################

// // JS Keyword : is, else, for, while, do, switch, this
// // เอาไว้เข้าถึง, อัพเดท Property 
// // this ถูก solve ตอนเรียกใช้ Method เท่านั้น
// // solve ตาม object ที่เรียก
// // ** This == Dynamic Context / Dynamic Caller
// // **** This == Object ที่เรียกใช้ Method
// SUMMARY : This == Object Caller

// const user = {
//     name : "CODECAMP",
//     age : 15,
//     sayHi : function () {
//         console.log(`Hello ${this.name}`);
//     },
//     growOld : function () {
//         console.log(this); // this == user, this.age == user.age
//         this.age++;
//     }
// }


// // ทำอย่างไร Method ของเราจะสามารถเข้าถึง Property ของตัวเองได้
// // user.sayHi();
// // user.name = 'software park';
// // user.sayHi();


// // log(user.age);
// // user.growOld();
// // log(user.age);


// // Q : ค่าของ This ถูก solve ตั้งแต่ตอนที่เขียน function หรือเปล่า? // noooo!
// function dev () {
//     console.log (`This feature developed by ${this.name}`);
// }

// const programmer1 = {
//     name : 'John',
//     develop : dev,
// }

// const programmer2 = {
//     name : 'Jane',
//     develop : dev,
// }

// // A : this ถูก solve ตอนเรียกใช้ Method เท่านั้น
// // Caller.method => this == Caller == Object before the dot
// // This == Object ที่เรียกใช้ method
// programmer1.develop();
// programmer2.develop();





// ####################################################################
//                    Execution Context == Caller
// ####################################################################

// Global(Browser) : Window object

// window.alert ("I'm Global");
// this.alert("I'm Global this");
// alert("I'm execute in window");


// Function Declaration จะทำให้ sayHi ไปติดใน windowObj  
// Hoisting  
function sayHi() {
    console.log (this); // window
}

var a = 'm';

//Execute Context = Window
window.sayHi();
this.sayHi();
sayHi();


// Function Context
var name = "Codecamp";
function sayHello() {
    console.log(this.name);
}

sayHello();

// Window Caller
const user = {
    name : 'John',
    say : sayHello,
    scream : () => {
        console.log(`Scream by ${this.name}`);
    },
    srcm : function () {
        console.log (`Scream by ${this.name}`);
    },
}

// User Caller
user.say();

// this == Object Caller


// Arrow ไม่มีความสามารถในหารสร้าง Context
// Loose Context => Chain to window
// อย่าใช้ This with Arrow Function
user.scream(); // อย่าใช้ This with Arrow Function
user.srcm();