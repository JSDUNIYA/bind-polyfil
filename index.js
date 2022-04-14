// Writing my first plyfil for bind method

Function.prototype.myOwnBindMethod = function(...args1){
    let obj = this;
    let param = args1.slice(1);
    return function(...args2) {
      obj.apply(args1[0], [...param, ...args2]);
    }
}


let name = {
    fname:"Siddesh",
    lname:"Bhalke"
}

function printName(city, countr){
    console.log(this.fname + " " + this.lname , city, country)
}

let print = printName.myOwnBindMethod(name, "bidar", "India");
print();


