import React from 'react';
import ReactDOM from 'react-dom';
import {Statistics} from "./Statistics/statistics";
import {SingleView} from "./SingleView/SingleView";

class MainPage extends React.Component
{
    render()
    {
        return (<div><Statistics /><SingleView /></div>);
    }
}

ReactDOM.render(<MainPage/>, document.getElementById("content"));


