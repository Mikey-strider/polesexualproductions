import React, {Component} from 'react';
import ShowNavigation from './ShowNavigation';
import UpcomingShow from './UpcomingShow';

class Home extends Component {
    render() {
        return (<>
       <UpcomingShow />
       <ShowNavigation />
        </>)
    }
}

export default Home;