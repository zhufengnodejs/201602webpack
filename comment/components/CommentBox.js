import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import $ from 'jquery';
/**
 * 1. getDefaultProps
 * 2. getInitialState
 * 3. componentWillMount
 * 4. render
 * 5. componentDidMount
 * 6. shouldComponentUpdate
 * 7. componentWillUpdate
 * 8. render
 * 9. componentDidUpdate
 */
export default class CommentBox extends React.Component{
    //读取url地址，并把读到的数组赋给
    constructor(props){
        super(props);
        this.state = {data:[]};//此写法只能在constructor里用
        this.getComment();
        //setInterval(this.getComment.bind(this),3000);
    }
    addMsg(message){
        this.setState({data:this.state.data.concat(message)});//只能用setState
    }
    //当此组件将要被加载到界面上时使用
    componentWillMount(){

    }

    getComment(){
        $.get(this.props.url).then((data)=>{
            this.setState({data:data});//只能用setState
        });
    }

    render(){
        return (
                <div className="panel panel-success">
                    <div className="panel-heading text-center">
                        <h3>欢迎留言</h3>
                    </div>
                    <div className="panel-body">
                        <CommentList data={this.state.data}/>
                    </div>
                    <div className="panel-footer">
                        <CommentForm addMsg={this.addMsg.bind(this)}/>
                    </div>
                </div>
        )
    }
}