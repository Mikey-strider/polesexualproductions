import React, {Component} from 'react';
import CockTailGate from './Shows/CockTailGate';
import PoleSexual from './Shows/PoleSexual';
import Power from './Shows/Power';
import Divas from './Shows/DivasLanding'
import Home from './HomePage/Home';
// import Nav from '../NavBar/Nav';

class Base extends Component {
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
        } else if (page === "pole") {
            return <PoleSexual />
        } else if (page === "ctg") {
            return <CockTailGate />
        } else if (page === "power") {
            return <Power />
        } else if (page === "divas") {
            return <Divas />
        }   else {
            return "Oops something went wrong!";
        }
    }
}

export default Base;