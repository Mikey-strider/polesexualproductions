import React, {Component} from 'react';
import ShowNavigation from './ShowNavigation';
import UpcomingShow from './UpcomingShow';
import NavNavigation from '../NavBar/NavNavigation';
// import Contact from '../NavBarContents/ContactUs'


class Home extends Component {
    render() {
        const { changePage } = this.props;

        return (<>
            <NavNavigation changePage={changePage} />
            <UpcomingShow />
            <ShowNavigation changePage={changePage} />
            {/* <Contact /> */}
        </>)
    }
}

export default Home;