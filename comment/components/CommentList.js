import React from 'react';

export default class CommentList extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-xs-12">
                    <ul className="list-group">
                        <li className="list-group-item">
                            张三:10分钟前:今天天气真好啊
                        </li>
                        <li className="list-group-item">
                            李四:5分钟前:是啊，这冰雹比鹅蛋还大
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}