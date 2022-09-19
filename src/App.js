import React, { useEffect, useState } from "react";
import DrumMachine from "./DrumMachine";


function App() {
  const samples = [
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

  //pass info which pad is selected with mouse or with key as state
  const [selectedPad, changeSelectedPad] = useState(0)


  const togglePadClass = (pad) => {
    pad.classList.toggle('clicked')

  }
  //make pad "blink" after clicked



  

  //play audio (find by audioId (Q, W, E...))
  const playAudio = (audioId) => {
    const audio = document.getElementById(audioId)

    if (audio) {
      audio.play()
    }
  }

  //blink pad (find by padIndex (0, 1, 2... ))
  const blinkSelectedPad = (padId) => {
    const pad = document.getElementById(padId)
    //activate pad and deactivate after time
    togglePadClass(pad)
    setTimeout(() => togglePadClass(pad), 100)
  }

  //handle pad full behavior (audio and blink)
  const handlePad = (padId, audioId) => {
    blinkSelectedPad(padId)
    playAudio(audioId)
  }

  //handle using keyboard ui
  const handleKeyPress = (e) => {
    const audioId = e.key.toUpperCase()
    for (let i = 0; i<9; i++) {
      if (audioId === samples[i].keyName) {
        const padId = samples[i].name
        handlePad(padId, audioId)
      }
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress)
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }

  }, [handleKeyPress]
  )




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
