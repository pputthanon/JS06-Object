const log = console.log

// P1 : Input
let name = prompt ('Enter Product Name');
let quantity = +prompt ('Enter Quantity');
let price = Number(prompt ('Enter price'));
let discount = prompt ('Enter Discount') * 1;

// P2 : CreateObject
// const products = {
//     name : name, // name : 'Hermes'
//     quantity : quantity, // quantity : 20
//     price : price, // price : 500_000
//     discount : discount // discount : 0.1
// }
// ** เมื่อชื่อ key ตรงกับชื่อตัวแปรที่เก็บ value ** สามารถยุบ Syntax ได้ (Property shorthand)
const products = {
    name,
    quantity,
    price,
    discount,
}

// P3 : Calculate price

// price, quantity, discount => totalPrice
// function calcPrice (price, quantity, discount) {
//     let totalPrice = price * quantity * (1 - discount); // เราต้องจ่าย
//     return totalPrice;
// }

// let result = calcPrice(product.price, product.quantity, product.discount);
// log (result);

function calcPrice(productObj) {
    let price = productObj.price
    let quantity = productObj.quantity
    let discount = productObj.discount ? productObj.discount : 0;
    return price * quantity * (1 - discount);
}

let result = calcPrice(products);

log(result);