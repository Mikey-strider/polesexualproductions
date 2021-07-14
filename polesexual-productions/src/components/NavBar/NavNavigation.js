import React, {Component} from 'react';

class NavNavigation extends Component {
    updateShow(show) {
        const { changePage } = this.props;
        changePage(show);
    }

    render() {
        return (<>
            <button onClick={() => this.updateShow("about")}>About</button>
            <button onClick={() => this.updateShow("contact")}>Contact Us</button>
            <button onClick={() => this.updateShow("sister")}>Sister Parties</button>
            <button onClick={() => this.updateShow("sponsor")}>Sponsors</button>
        </>)
    }
}

export default NavNavigation; 