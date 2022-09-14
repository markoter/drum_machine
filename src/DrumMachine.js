import React from "react";
import Display from "./Display";
import Pad from "./Pad";

const DrumMachine = () => {
    const padID = [0,1,2,3,4,5,6,7,8]
    const samples =  [
        {
            name: "Heater 1",
            src: "./samples/Heater-1.mp3",
            key: "Q"
        },
        
        ]


    return (
        <div id="drum-machine">
            and this is drum machine
            <Pad />
            <Pad />
            <Pad />
            <Pad />
            <Pad />
            <Pad />
            <Pad />
            <Pad />
            <Pad />
            <Display />
        </div>
    )
}

export default DrumMachine