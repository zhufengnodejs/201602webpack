import React from 'react';

export default class CommentList extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-xs-12">
                    <ul className="list-group">
                        {
                            this.props.data.map((item,index)=>{
                                return <li key={index} className="list-group-item">
                                        {item.author}:{item.date}:{item.msg}
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}