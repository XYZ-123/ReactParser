/**
 * Created by aru on 11/20/2015.
 */
import alt from '../alt';
import PropagateActions from '../Actions/PropagateActions';

class StatisticsStore
{
    constructor() {
        this.state={clicks:[]};
        this.bindListeners({
            handleUpdateStatistics: PropagateActions.PROPAGATE_STATISTICS
        });
    }

    handleUpdateStatistics(click)
    {
        let exists = false;
        this.state.clicks.map((item)=>{
            if(item.name == click.name)
            {
                exists = true;
                item.clicksNumber += click.clicksNumber;
            }
        });
        if(!exists)
        {
           this.state.clicks.push(click);
        }
        this.setState({clicks: this.state.clicks});
    }
}

export default alt.createStore(StatisticsStore, 'StatisticsStore');
