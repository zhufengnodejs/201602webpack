import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import $ from 'jquery';
import helper from '../helper';
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
        this.state  = {data:helper.list()};
    }
    addMsg(message){
        helper.add(message);
        this.setState({data:helper.list()});
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