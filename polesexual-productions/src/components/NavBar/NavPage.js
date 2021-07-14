import React from 'react';

const NavPage = props => {
    const navPageInfo = `${props.name}`;

    return <>
        {/* <h3>{props.className}</h3> */}
        {/* <img>{props.showImage}</img> */}
        <p>{navPageInfo}</p>
    </>;
}

export default NavPage;