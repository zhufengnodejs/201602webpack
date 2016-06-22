import React from 'react';

export default class CommentBox extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-xs-12">
                    <form>
                        <div className="form-group">
                            <textarea className="form-control" name="message" cols="30" rows="10"></textarea>
                            <button className="btn btn-primary">发表</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}