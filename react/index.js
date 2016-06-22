import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input.js'
import Show from './components/Show.js'

//创建一个继承至Component的子类
class App extends React.Component{
    /**
     * 1. 需要得到最新的文本框的值
     * 2. 转成大写,赋给app 的data状态 this.state.data
     * 3. 传递给Show
     */
    appChange(){

    }

    render(){
        return (
            <div>
                <Input inputChange={this.appChange}  />
                <Show data={this.state.data}/>
            </div>
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
