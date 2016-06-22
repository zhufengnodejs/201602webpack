import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class CommentBox extends React.Component{
    render(){
        return (
                <div className="panel panel-success">
                    <div className="panel-heading text-center">
                        <h3>欢迎留言</h3>
                    </div>
                    <div className="panel-body">
                        <CommentList data={this.props.data}/>
                    </div>
                    <div className="panel-footer">
                        <CommentForm/>
                    </div>
                </div>
        )
    }
}