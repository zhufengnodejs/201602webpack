import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class CommentBox extends React.Component{
    render(){
        return (
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h2>欢迎留言</h2>
                    </div>
                    <div className="panel-body">
                        <CommentList/>
                    </div>
                    <div className="panel-footer">
                        <CommentForm/>
                    </div>
                </div>
        )
    }
}