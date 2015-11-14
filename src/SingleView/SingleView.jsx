import './SingleView.less';
import React from 'react';

export class SingleView extends React.Component
{

    render()
    {
        return (<div>Hello from Single View about {this.props.params.id}!</div>)
    }
}

