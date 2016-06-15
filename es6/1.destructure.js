var obj = {
    name:'zfpx',
    age:8
}
//var name = obj.name;
//var age = obj.age;
//解析赋值
var {name,age} = obj;

var name;
var age;
name = obj.name;
age = obj.age;
console.log(name,age);
