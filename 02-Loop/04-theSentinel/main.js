// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง 
// จนกว่าจะเจอคำว่า stop ถึงหยุด   
// และให้นำค่าเหล่านั้นมาสร้าง Object 
// หลังจากนั้น log object นั้นออกมา

const TERMINATE = 'stop';
const students = {};

let key;
let value;

do {
    key = prompt('Enter your name');
    value = +prompt('Enter your age');

        if (key != 'stop' && value != 'stop') {
            students[key] = value;
        }

} while (key != TERMINATE && value != TERMINATE);

console.log(students);