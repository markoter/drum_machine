import React from "react";

const Pad = (props) => {
    const { sample, selectedPad, changeSelectedPad, handlePad } = props
    
    //window.addEventListener("keyup", (event) => handleKey(event.key))

    return (
        <div id={sample.name} className="drum-pad" onClick={handlePad}>
            <p>{sample.keyName}</p>
            <audio src={sample.src} id={sample.keyName} className="clip" />
        </div>
    )
}
export default Pad  