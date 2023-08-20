let calculator = {
    x: null,
    y : null,
    read (){
        this.x = +prompt("Enter Num1"); // calculator.x
        this.y = +prompt("Enter Num2"); // calculator.y
    },
    sum (){
        return this.x + this.y;
    },
    mul (){
        return this.x * this.y;
    },
  };
  
  calculator.read();
  alert(calculator.sum());
  alert(calculator.mul());