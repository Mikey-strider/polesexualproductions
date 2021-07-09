import React from 'react';

const ShowPage = props => {
    const nextShowInfo = `Come see our next show on ${props.nextDate} at Powerhouse!`;

    return <>
        <h3>{props.showname}</h3>
        {/* <img>{props.showImage}</img> */}
        <h4>{nextShowInfo}</h4>
    </>;
}

export default ShowPage;