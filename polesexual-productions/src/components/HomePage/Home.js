import React, {Component} from 'react';
import ShowNavigation from './ShowNavigation';
import UpcomingShow from './UpcomingShow';
import Nav from '../NavBar/Nav';
import Contact from '../NavBarContents/ContactUs'


class Home extends Component {
    render() {
        const { changePage } = this.props;

        return (<>
            <Nav />
            <UpcomingShow />
            <ShowNavigation changePage={changePage} />
            <Contact />
        </>)
    }
}

export default Home;