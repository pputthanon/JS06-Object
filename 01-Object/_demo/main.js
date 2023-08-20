console.log("Learning Object");

//Data Type
// Primitive : Boolean, Number, String, ect
// Non-Primitive : Object

//####################################################################
//                          Object Decalration
//####################################################################
// {} == stand for object / scope สิ่งที่อยู่เป็นกลุ่มก้อนเดียวกัน
// { record_1, record_2, record_3,...}
// ในแต่ละ record => <key_name>:<value>
// สามารถเก็บ data type อะไรก็ได้ (<value> any data type)
// <key_name> data type : string (only) ok with "" or without string "" 
// record === property (คุณสมบัติ / สิ่งที่มี) == key-value pairs

let user = {
    firstName : "Pawinee",
    lastname : "Putthanon",
    age : 24,
    isAdmin: false,
    'is beautiful': true,
};

console.log(user);



//#####################################################################
//                         Access, Modify, Delete
//#####################################################################

// Every action needs <key_name> !!
// Dot Notation <obj>.<key_name> == <value>
// ******** ข้อจำกัด : เข้าถึง key ที่มี space ไม่ได้ ********
// ชื่อ key ไม่มีอยู่ใน record => return undefined 

//////////Get, poll, read////////////
console.log(user);
console.log(user.firstName);
console.log(user.firstName === 'Pawinee');
console.log(user.lastname); 
console.log(user.age);
console.log(user.isAdmin);
console.log(user.salary); // undefined เพราไม่ได้ประกาศไว้
// console.log(user.is beautiful);

/////////// Modify, Update ////////////////
// Syntax : <obj>.<key_name> = newValue
//  มีอยู่แล้ว = เขียนทับ
user.firstName = 'Pravit';
user.age = 23;
user.age += 2;
user.age++;
console.log(user.age);


///////////// Add ////////////////
// Syntax : <obj>.<key_name> = newValue
// ไม่มี = เพิ่มให้ใหม่
user.address = 'Ratchaburi'
console.log(user);


////////////// Delete //////////////
// Syntax : Delete <obj>.<key_name>

delete user.isAdmin;
console.log(user);



//####################################################################
//                           Nested Object
//####################################################################

const employee = {
    fullName : "John Doe",
    salary : 500_000,
    address : {
        district : "Phaya Thai",
        province : "Bangkok",
        country : "Thailand",
    }
}

// Access
console.log(employee.salary);
console.log(employee.address);
console.log(employee.address.province);
console.log(employee.address.district);
console.log(employee.address.village);

employee.address.province = "Chantaburi"
delete employee.address.country;

// !!!!!!!!!!!!!!!!!!!  Prevent Crash !!!!!!!!!!!!!!!!!!!! //

// Dot ใช้กัับ Object เท่านั้น !! >> <obj>.<key>
// dot ห้ามใช้กับ undefied >> <undefined>.<key>
// วิธีแก้ปัญหา (Optional Chaining) => <undefined>?.<key> >> ช่วยเช็คว่าข้างหน้าสามารถ dot ต่อได้ไหม
console.log(employee.addr); // undefined
// console.log(employee.addr.province); // undefined.province = error!!!!
console.log(employee.addr?.province); // undefined โดยมีเครื่องหมาย ? ช่วยเช็คว่าข้างหน้าสามารถ dot ต่อได้ไหม
console.log(employee.address?.province); // log "Bangkok"
console.log(employee.address?.village); // dot ต่อ แต่ undefined



//####################################################################
//                              Key Check
//####################################################################

const product = {
    id : 227,
    name : "Iphone",
    price : 50_000,
    // discount : 0.05,
}

console.log(product.discount); // undefined


//IN operator
// Syntax : <key_name_string> in <obj> => Boolean

// 'name' in product // => return True/False
console.log('name' in product);
console.log ('discount' in product);

// method hasOwnProperty
// Syntax : <obj>.hasOwnProperty (<key_name>) => Boolean
console.log(product.hasOwnProperty('name'));
console.log(product.hasOwnProperty('discount'));



//####################################################################
//                        Bracket Notation []
//####################################################################

// Syntax : <obj> [<key_name_string>]
// **** 1. ใช้ bracket เมื่อไร ชื่อ key ข้างในก็ต้องเป็น string
// **** 2. ถ้าไม่ใช่ string ต้องเป็นตัวแปรที่เก็บ string // called Computed Key *****
// เมื่อชื่อ key ถูกเก็บไว้ในตัวแปร ต้อง access ผ่าน []
// ใช้กับ key ที่เป็น string / ตัวแปรที่เก็บ string
// for (<key> in <obj>) จะ auto reassign key ใหม่ให้ทุกรอบ (string)
// obj[key] = obj[key] + new => container = value + new
// Access key-value ผ่านชื่อตัวแปร
console.log(product.id);
console.log (product['id']);

// console.log(product.is mobile); => crash
console.log(product['is mobile']);

product['name'] = "Iphone_15"; // changed name
console.log(product);

let aaaaa = 'name';

console.log(product[aaaaa]);
console.log(product['name']);
console.log(product.aaaaa); // undefined => product.aaaaa === product['aaaaa']



// Property Shorthand ก็สามารถทำได้เหมือนกันจ้า

// let username = prompt("Username");
// let email = prompt("Email");
// let password = prompt("Password");

// let user = { username, email, password} ;

// console.log(user)



// FN Declaration 
function add (x,y) {
    return x + y;
}

// FN Expression
const minus = function (x,y) {
    return x - y;
}

// FN Expression (Arrow)
const multiply = (x,y) => x * y;
// const log = console.log; // => log = FN
const log = console.log(); // => log = undefined (FN result)

// log(add(5,3)); // undefined()
console.log(multiply(5,3)); // 15

