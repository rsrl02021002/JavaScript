function doAdd(arg1,arg2) {
    arguments[1]=10;
    return arg1+arg2;
}

console.log("有第二个参数")
console.log(doAdd(30,20))
console.log("没有第二个参数")
console.log(doAdd(30))  //没有传第二个参数，第二个参数是undefined


