import React from 'react';

export default class CommentList extends React.Component{
    delete(id){
      this.props.boxDel(id);
    }

    render(){
        return (
            <div className="row">
                <div className="col-xs-12">
                    <ul className="list-group">
                        {
                            this.props.data.map((item,index)=>{
                                return <li key={index} className="list-group-item">
                                        {item.author}:{item.date}:{item.msg} <span onClick={()=>this.delete(item.id)}  className="glyphicon glyphicon-remove"></span>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}