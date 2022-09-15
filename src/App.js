import React, { useState } from "react";
import DrumMachine from "./DrumMachine";

function App() {
  const sampleList = [
    {
      name: "Heater_1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      keyName: "Q"
    },
    {
      name: "Heater_2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      keyName: "W"
    },
    {
      name: "Heater_3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      keyName: "E"
    },
    {
      name: "Heater_4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      keyName: "A"
    },
    {
      name: "Clap",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      keyName: "S"
    },
    {
      name: "Open-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      keyName: "D"
    },
    {
      name: "Kick-n-Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      keyName: "Z"
    },
    {
      name: "Kick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      keyName: "X"
    },
    {
      name: "Closed-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      keyName: "C"
    }
  ]
  //pass data for each pad down with state
  const [samples] = useState(sampleList)

  //pass info which pad is selected with mouse or with key
  const [selectedPad, changeSelectedPad] = useState(0)

  //music player
  const playSelectedAudio = () => {
    const audioTrack = document.querySelector(`#${samples[selectedPad].keyName}`)
    audioTrack.play()
  }
  const togglePadClass = (pad) => {
    pad.classList.toggle('clicked')

  }
  //make pad "blink" after clicked
  const blinkSelectedPad = () => {
    const pad = document.querySelector(`#${samples[selectedPad].name}`)
    //activate pad and deactivate after time
    togglePadClass(pad)
    setTimeout(() => togglePadClass, 100)
  }

  const handlePad = () => {
    console.log("handlePad works")
    blinkSelectedPad()
    playSelectedAudio()
  }


  return (
    <div className="App">
      <h1>APP here</h1>
      <DrumMachine
        samples={samples}
        selectedPad={selectedPad}
        changeSelectedPad={changeSelectedPad}
        handlePad={handlePad}
      />
    </div>
  );
}

export default App;
