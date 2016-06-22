import React from 'react';

//创建一个继承至Component的子类
export default class Show extends React.Component{
    render(){
        return (
            <div>head:{this.props.data}:tail</div>
        )
    }
}