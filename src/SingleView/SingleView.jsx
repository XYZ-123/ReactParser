import './SingleView.less';
import React from 'react';
import Position from './Position/Position';
import PropagateActions from '../Actions/PropagateActions';
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
        //PropagateActions.propagateStatistics({name:lang,clicksNumber:1});
        this.updateState(lang);
    }
    componentWillReceiveProps(nextProps)
    {
        if(nextProps && nextProps.location && nextProps.location.action === "POP") {
            let {lang} = nextProps.params;
            console.log('received props', nextProps);
            PropagateActions.propagateStatistics({name: lang, clicksNumber: 1});
            this.updateState(lang);
        }
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

