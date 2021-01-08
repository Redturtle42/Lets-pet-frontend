import React from 'react';

function Body() {
    return (
        <a className="up-arrow" onClick={() => window.scrollTo(0, 0)}></a>
    )
}

export default Body;