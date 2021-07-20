import React, {Component} from 'react';

class ShowNavigation extends Component {
    updateShow(show) {
        const { changePage } = this.props;
        changePage(show);
    }

    render() {
        return (<>
            <button onClick={() => this.updateShow("pole")}>PoleSexual</button>
            <button onClick={() => this.updateShow("ctg")}>CockTailGate</button>
            <button onClick={() => this.updateShow("power")}>Power</button>
            <button onClick={() => this.updateShow("divas")}>DivasLanding</button>
        </>)
    }
}

export default ShowNavigation;