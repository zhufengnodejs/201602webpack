import React from 'react';
import ReactDOM from 'react-dom';

//创建一个继承至Component的子类
class App extends React.Component{
    render(){
        return (
            <div>hello2</div>
        )
    }
}

ReactDOM.render(
    <App/>,document.querySelector('#app')
);

/*
React.createClass({
    render:function(){

    }
})*/
