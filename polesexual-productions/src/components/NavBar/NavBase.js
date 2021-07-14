import React, {Component} from 'react';
import About from '../NavBarContents/About';
import Contact from '../NavBarContents/ContactUs';
import SisterParties from '../NavBarContents/SisterParties';
import Sponsors from '../NavBarContents/Sponsors';
// import NavNavigation from './NavNavigation';
import Home from './HomePage/Home';
// import Nav from '../NavBar/Nav';

class NavBase extends Component {
    constructor() {
        super();
        this.state = {
            page: 'home',
        };
    }

    changePage = (page) => {
        this.setState({
            page,
        });
    }

    render() {
        const { page } = this.state;

        if (page === "home") {
            return <Home changePage={this.changePage} />
        } else if (page === "about") {
            return <About />
        } else if (page === "contact") {
            return <Contact />
        } else if (page === "sister") {
            return <SisterParties />
        } else if (page === "sponsor") {
            return <Sponsors />
        } else {
            return "Oops something went wrong!";
        }
    }
}

export default NavBase;