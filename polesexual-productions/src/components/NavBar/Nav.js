import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (<>
            <button onClick={() => this.updateShow("home")}>Home</button>
            <button>About Us</button>
            <button>Shows</button>
            <button>Sister Parties</button>
            <button>Contact Us</button>

        </>)
    }
}

export default Nav;