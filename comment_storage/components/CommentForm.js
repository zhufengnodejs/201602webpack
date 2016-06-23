import React from 'react';
/**
 * xs extreme small
 * sm small
 * md middle
 * lg large
 */
export default class CommentForm extends React.Component{
    submit(event){
        event.preventDefault();
       var message = {author:this.refs.author.value,date:'刚刚',msg:this.refs.msg.value};
        this.props.addMsg(message);
        this.refs.author.value = '';
        this.refs.msg.value = '';
    }

    render(){
        return (
            <div className="row">
                <div className="col-xs-12">
                    <form onSubmit={this.submit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="author">姓名</label>
                            <input ref="author" type="text" className="form-control" id="author"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="msg">留言</label>
                            <textarea ref="msg" className="form-control" name="message" cols="30" id="msg" rows="10"></textarea>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-offset-5">
                                <button type="submit" className="btn btn-primary">发表</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}