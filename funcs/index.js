/*
let add = (a,b)=> a+b;

console.log(add(1,2));
*/

/*
var number =2;
let minus = (num)=> num-number;
console.log(minus(3));


const sum = (x, y) => x + y;
const calculate = (fn, x, y) => fn(x, y);
console.log(calculate(sum, 2, 2));

let students =[
    {name:'zfpx1',age:16},
    {name:'zfpx2',age:18},
    {name:'zfpx3',age:20}
]

let isGrownUp = student => student.age>=18;
let byName = student => student.name;
console.log(students.filter(isGrownUp).map(byName));

*/
/*var compose = function(f,g){
    return function(x){
        return f(g(x))
    }
}*/
//组合函合 f(g(x)) = ?
let compose = (f,g) => (x) => f(g(x));
let upper = (x) => x.toUpperCase();
let addSuffix = (x) => x+'!!!';

console.log(compose(addSuffix,upper)('hello'));

var add = x => y=> x+y;
var add1 = add(1);
console.log(add1(5));
