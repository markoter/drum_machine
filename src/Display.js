import React from "react";

const Display = (props) => {
    const {playedSample} = props
    return (
        <div id="display" className="machine-part">
            <p>{playedSample}</p>
        </div>
    )
}
export default Display