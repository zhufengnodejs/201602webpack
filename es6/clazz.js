class Person{
    constructor(){//构造函数，是实例化的调用的第一个函数
        this.name = 'zfpx';
    }
    getName(){//实例方法
        console.log(this.name);
    }
    static add(a,b){
        console.log(a,b);
    }
}
var person = new Person();
person.getName();
Person.add(1,2);