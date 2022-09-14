import React from "react";

const Pad = (props) => {
    const {id, sampleSrc, keySelect} = props
    return (
        <div id={id} className="drum-pad">
            <p>{keySelect}</p>
        </div>
    )
}
export default Pad