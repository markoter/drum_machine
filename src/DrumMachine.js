import React from "react";
import Display from "./Display";
import Pad from "./Pad";

const DrumMachine = (props) => {
    const { samples, selectedPad, changeSelectedPad, handlePad } = props

    return (
        <div id="drum-machine">
            <div id="pads-grid" className="machine-part">
                {
                    samples.map((sample, index) => (
                        <Pad
                            key={index}
                            sample={sample}
                            selectedPad={selectedPad}
                            changeSelectedPad={changeSelectedPad}
                            handePad={handlePad}
                        />
                    ))
                }
            </div>

            <Display />
        </div>
    )
}

export default DrumMachine