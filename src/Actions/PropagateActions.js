/**
 * Created by aru on 11/20/2015.
 */
import alt from '../alt';

class PropagateActions
{
    propagateStatistics(clicks)
    {
        this.dispatch(clicks);
    }
}

export default alt.createActions(PropagateActions)
