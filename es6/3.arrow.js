// 箭头函数没有自己独立的this指针

var person = {
    start:function(){
        console.log(this);
        setTimeout(function(){
            console.log(this)
        },3000);
    }
}
person.start();
