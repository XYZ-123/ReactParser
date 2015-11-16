import './SingleView.less';
import React from 'react';
import Position from './Position/Position';
window.$ = require('jquery');

export class SingleView extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {data:[], lang: this.props.params};
    }
    componentDidMount()
    {
        let {lang} = this.props.params;
        this.updateState(lang);
    }
    componentWillReceiveProps(nextProps)
    {
        debugger;
        let {lang} = nextProps.params;
        this.updateState(lang);
    }
    updateState(lang)
    {
        this.state.data = [];
        $.ajax({
            url:'https://jobs.github.com/positions.json?search='+lang,
            callback:'updateData', dataType:'jsonp',
            success:(response)=> {this.setState({data:response})}
        });
    }
    render()
    {
        let vacanciesNodes = this.state.data.map((item)=>{
            return <Position data={item} />
        });
        return (<div>Hello from Single View about {this.props.params.lang}!
            {vacanciesNodes.length > 0 ? vacanciesNodes : <div><b>Loading..</b></div>}
        </div>)
    }
}

