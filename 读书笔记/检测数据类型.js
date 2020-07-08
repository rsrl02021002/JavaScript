let arr = [1,2,3];
console.log(arr instanceof Array);
console.log(arr instanceof Object);
// 所有引用类型的值都是 Object 的实例。因此，在检测一个引用类型值和 Object 构造 函数时，instanceof 操作符始终会返回 true