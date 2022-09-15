import React from "react";
import Display from "./Display";
import Pad from "./Pad";

const DrumMachine = () => {
    const samples = [
        {
            name: "Heater_1",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
            key: "Q"
        },
        {
            name: "Heater_2",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
            key: "W"
        },
        {
            name: "Heater_3",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
            key: "E"
        },
        {
            name: "Heater_4",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
            key: "A"
        },
        {
            name: "Clap",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
            key: "S"
        },
        {
            name: "Open-HH",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
            key: "D"
        },
        {
            name: "Kick-n-Hat",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
            key: "Z"
        },
        {
            name: "Kick",
            src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
            key: "X"
        },
        {
            name: "Closed-HH",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
            key: "C"
        }
    ]


    return (
        <div id="drum-machine">
            <div id="pads-grid" className="machine-part">
                {
                    samples.map((sample) => (
                        <Pad key={sample.name} id={sample.name} sampleSrc={sample.src} keySelect={sample.key} />
                    ))
                }
            </div>

            <Display />
        </div>
    )
}

export default DrumMachine