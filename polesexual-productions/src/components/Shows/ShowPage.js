import React from 'react';

const ShowPage = props => {
    const nextShowInfo = `Come see our next show on ${props.nextDate} at ${props.barLocation}!`;

    return <>
        <h3>{props.name}</h3>
        {/* <img alt="Show Banner">{props.img}</img> */}
        <h4>{nextShowInfo}</h4>
    </>;
}

export default ShowPage;