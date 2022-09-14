import React from "react";
import Display from "./Display";
import Pad from "./Pad";

const DrumMachine = () => {
    const samples = [
        {
            name: "Heater_1",
            src: "./samples/Heater-1.mp3",
            key: "Q"
        },
        {
            name: "Heater_2",
            src: "./samples/Heater-2.mp3",
            key: "W"
        },
        {
            name: "Heater_3",
            src: "./samples/Heater-3.mp3",
            key: "E"
        },
        {
            name: "Heater_4",
            src: "./samples/Heater-4_1.mp3",
            key: "A"
        },
        {
            name: "Clap",
            src: "./samples/Heater-6.mp3",
            key: "S"
        },
        {
            name: "Open-HH",
            src: "./samples/Dsc_Oh.mp3",
            key: "D"
        },
        {
            name: "Kick-n'-Hat",
            src: "./samples/Kick_n_Hat.mp3",
            key: "Z"
        },
        {
            name: "Kick",
            src: "./samples/RP4_KICK_1.mp3",
            key: "X"
        },
        {
            name: "Closed-HH",
            src: "./samples/Cev_H2.mp3",
            key: "C"
        }
    ]


    return (
        <div id="drum-machine">
            and this is drum machine
            {    
                samples.map((sample) => (
                    <Pad key={sample.name} id={sample.name} sampleSrc={sample.src} keySelect={sample.key}/>
                ))
            }
            <Display />
        </div>
    )
}

export default DrumMachine