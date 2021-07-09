import React, {Component} from 'react';
import ShowNavigation from './ShowNavigation';
import UpcomingShow from './UpcomingShow';

class Home extends Component {
    render() {
        const { changePage } = this.props;

        return (<>
            <UpcomingShow />
            <ShowNavigation changePage={changePage} />
        </>)
    }
}

export default Home;