import './Statistics.less';
import connectToStores from 'alt/utils/connectToStores';
import StatisticsStore from '../Stores/StatisticsStore';
import React from 'react';


class Statistics extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    static getStores()
    {
        return [StatisticsStore];
    }
    static getPropsFromStores()
    {
        return StatisticsStore.getState();
    }
    render()
    {
        debugger;
        var clicksNodes = this.props.clicks.map((item) =>{return <div>Name:{item.name} Number of clicks:{item.clicksNumber}</div>});
        return (<div>Hello from Statistics!<br/>{clicksNodes}</div>)
    }
}

export default connectToStores(Statistics);
