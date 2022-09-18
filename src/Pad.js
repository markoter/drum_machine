import React from "react";

const Pad = (props) => {
    const { sample, selectedPad, changeSelectedPad, handlePad, testerConsole, index } = props

    const playAudio = () => {
        handlePad(index, sample.keyName)
    }
    return (
        <div id={sample.name} className="drum-pad" onClick={playAudio}>
            <p>{sample.keyName}</p>
            <audio src={sample.src} id={sample.keyName} className="clip" />
        </div>
    )
}
export default Pad  