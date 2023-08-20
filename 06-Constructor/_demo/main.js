const log = console.log;

log("construnctor Function");

// FN ที่เอาไว้สร้าง Object


const dev1 = {
    name : 'John',
    age : 32,
    role : "dev",
    salary : 40_000,
    dev : function (){
        console.log (`I'm develop some feature`);
    },
};

// Object Creators == Constructor Function

function Developer (name, age) {
    // [1] Implicit create this = {}
    this.name = name; // {this:"Bee"}
    this.age = age; // {this : "Bee", age : 25}
    this.role = "dev" // {this : "Bee", age : 25, role : "dev"}
    this.salary = 40_000; //{this : "Bee", age : 25, role : "dev", salary : 40_000}
    this.dev = function () {
const dev3 = new Developer("Jane", 36);
        console.log (`${this.name} develop features`);
    } // {name..., dev : fn()}

    // [2] Implicit Return This
    // Return {name...,dev : fn()}
}


// this == dev2
// [3] this === Instance
const dev2 = new Developer("Bee", 24);
// log(dev2);
dev2.dev();

const dev3 = new Developer("Jane", 36);
// log(dev3);
dev3.dev();
