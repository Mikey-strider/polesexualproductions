import React, {Component} from 'react';

class NavNavigation extends Component {
    updateNav(nav) {
        const { changePage } = this.props;
        changePage(nav);
    }

    render() {
        return (<>
            <button onClick={() => this.updateNav("about")}>About</button>
            <button onClick={() => this.updateNav("contact")}>Contact Us</button>
            <button onClick={() => this.updateNav("sister")}>Sister Parties</button>
            <button onClick={() => this.updateNav("sponsor")}>Sponsors</button>
        </>)
    }
}

export default NavNavigation; 