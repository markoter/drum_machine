import React from "react";

const Pad = (props) => {
    const { sample, selectedPad, changeSelectedPad, handlePad, testerConsole, index } = props

    const ref = React.useRef();
    const playAudio = () => {
        ref.current.play();
    }
    return (
        <div id={sample.name} className="drum-pad" onClick={playAudio}>
            <p>{sample.keyName}</p>
            <audio ref={ref} src={sample.src} id={sample.keyName} className="clip" />
        </div>
    )
}
export default Pad  