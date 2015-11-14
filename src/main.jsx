import './Common.less';
import React from 'react';
import ReactDOM from 'react-dom';
import {Statistics} from "./Statistics/Statistics";
import {SingleView} from "./SingleView/SingleView";
import {Router, Route, Link} from 'react-router';

class MainPage extends React.Component
{
    constructor()
    {
        super();
        this.state = {sites:["StackOverflow", "GitHub"]};
    }
    render()
    {
        let detailsLink = this.state.sites.map((item)=> {
            let link = "details/"+item;
            return(<li>
                        <Link to={link}>{item}</Link>
                    </li>);});
        return (<div>
            <Link to="stats">Stats</Link>
            <ul>
                {detailsLink}
            </ul>

            {this.props.children}
        </div>);
    }
}
let routes = (<Router>
    <Route component={MainPage} path="/">
        <Route component={Statistics} path="stats"/>
        <Route component={SingleView} path="/details/:id"/>
    </Route>
</Router>);

ReactDOM.render(routes, document.getElementById("content"));


