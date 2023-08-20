// // init
// const fruits = {};

// // accept input
// let key = prompt('Enter Fruit');
// let value = +prompt('Enter Quantity');

// // update fruits
// // fruits['apple'] = value; // {apple : 10}

// if (value == 1) {
//     fruits[key] = value;
// } else if (value > 1) {
//     fruits [`${key}s`] = value;
// }

// console.log(fruits);



// ทำใหม่ เพราะต้องการหยุด
// อย่าเผลอไป let ข้างใน ไม่งั้นจะไม่หลุด loop
const TERMINATE = 'stop';
const fruits = {};


let key;
let value;

do {
    key = prompt('Enter Fruit');
    value = +prompt('Enter Quantity');
    
    if (value == 1) {
        fruits[key] = value;
    } else if (value > 1) {
        fruits [`${key}s`] = value;
    }
} while (key != TERMINATE && value != TERMINATE);

console.log(fruits);