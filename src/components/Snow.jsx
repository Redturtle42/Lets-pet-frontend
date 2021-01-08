import React from 'react';

function Snow() {
    return (
        <div className="snow-container">
            { Array.from(Array(100).keys()).map(() => <span className="snow"></span>)}
        </div>
    )
}

export default React.memo(Snow);