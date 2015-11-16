import './Position.less';
import React from 'react';

class Position extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        let data = this.props.data;
        return (<div>
                    <div>{data.title}</div>
                    <aside><img src={data.company_logo}/></aside>
                    <div>{data.location}</div>
                    <div>{data.type}</div>
                    <div>{data.created_at}</div>
                    <div dangerouslySetInnerHTML={{__html:data.description}} ></div>
                    <div dangerouslySetInnerHTML={{__html:data.how_to_apply}}></div>
                </div>)
    }
}
export default Position;
