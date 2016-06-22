import React from 'react';
var style = require('./style.css');
//创建一个继承至Component的子类
export default class Show extends React.Component{
    render(){
        return (
            <div className={style.base}>head111:{this.props.data}:tail</div>
        )
    }
}