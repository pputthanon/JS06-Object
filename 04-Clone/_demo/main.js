const log = console.log;

log("Object Clone")

let todo = {
    task : 'Do HW',
    complete : false,
    due_date : '13-08-2023'
};

// Clone
// เอาต้นแบบมา loop แล้ว assign ทีละ key : value แล้วให้ object ใหม่

// const newTodo = todo;

// for (let key in todo) {
//     // assign ทีละ key:value ให้ newTodo
//     newTodo[key] = todo[key];
//     // newTodo ['task'] = todo['task'] => 'Do HW'
//     // newTodo ['complete'] = todo['complete'] => 'false'
//     // newTodo ['due_date'] = todo['due_date'] => '13-08-2023'
    
// }

// log(newTodo);
// newTodo.complete = true;
// log(newTodo.complete);
// log(todo.complete);



// 2. Object.assign
// const newTodo = {} (dst, [src, src2, .., srcn])
// Merge / Override Direction Right -> Left : ตัวขวาทับตัวซ้าย *******


// #2A
// const newTodo = {};
// Object.assign(newTodo,todo); // return address ของ destination (param1)

// #2B
const newTodo = Object.assign({}, todo);
log(newTodo);