import React from 'react';

//创建一个继承至Component的子类
export default class Input extends React.Component{

    render(){
        return (
            <div><input type="text" onChange={this.props.inputChange}/></div>
        )
    }
}
