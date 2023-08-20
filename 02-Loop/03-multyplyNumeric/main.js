let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};


const  multiplyNumeric = (object,num) => {
    for (let key in object) {
        // console.log(key);
        let value = object[key];
        if(typeof value === 'number'){
            // console.log(value,num);
            // update value
            // # 1 object[key] = object[key] * num //update key
            object[key] = value * num
            //  # 3 object[key] *= num
            // menu['width'] = 200 * 3
            // menu['height'] = 300 * 3

        }
    
    }
}



multiplyNumeric(menu, 3);
console.log(menu);

let menuObj = {
    width: 200,
};

menuObj.width = menuObj.width * 2;
menuObj['width'] = menuObj['width'] * 2;

// ในแต่ละรอบของ loop for in 
let key = 'width';
menuObj[key] = menu[key] * 2 
