const user = {
    firstName : 'Codecamp',
    lastName : 'Software Park',
    age : 15,
};



// For IN : Loop through Object
// for (let <key> in <obj>) {}
// for in เวลาจะแก้ไข ต้องใช้ bracket ด้วยนะจ้ะ

for (let key in user) {
    console.log(key); // "firstName" "lastName"  "age" => auto dynamics assign by JS in <string>
    // 1st : let key = "firstName"
    // 2nd : let key = "lastName"
    // 3rd : let key = "age"
   
    console.log(user[key]); // 'Codecamp' 'Software Park'  15 => need to access by bracket, computed key
    // 1st : user[key] == user['firstName'] == Codecamp
    // 2nd : user[key] == user['lastName'] == Software Park
    // 3rd : user[key] == user['age'] == 15

    console.log(user.key); // เพราะว่าเราไม่มีค่า key ใน user ยังไงล่าาาาา!!
    // 1st : user.key == user['key'] ==> undefined
    // 2st : user.key == user['key'] ==> undefined
    // 3st : user.key == user['key'] ==> undefined
}