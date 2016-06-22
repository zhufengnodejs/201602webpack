import React from 'react';

//创建一个继承至Component的子类
export default class Input extends React.Component{

    render(){
        return (
            <div>
                <input type="text" ref="myinput"
 onChange={()=>{this.props.inputChange(this.refs.myinput.value)}}/>
            </div>
        )
    }
}
