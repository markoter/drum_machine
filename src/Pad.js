import React from "react";

const Pad = (props) => {
    const {id, sampleSrc, keySelect} = props
    return (
        <div id={id} className="drum-pad">
            drum pad
            <p>{keySelect}</p>
            <p>{sampleSrc}</p>
        </div>
    )
}
export default Pad