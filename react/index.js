import React from 'react';
import ReactDOM from 'react-dom';
import {Input,Show} from './components';

//创建一个继承至Component的子类
class App extends React.Component{
    constructor(props){
        super(props);
        //增加了一个默认状态
        this.state = {data:''};
    }
    /**
     * 1. 需要得到最新的文本框的值
     * 2. 转成大写,赋给app 的data状态 this.state.data
     * 3. 传递给Show
     */
    appChange(value){
        console.log(this);
        console.log(value);
        value = value.toUpperCase();
        this.setState({data:value});
    }

    render(){
        return (
            <div>
                <Input inputChange={this.appChange.bind(this)}  />
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
