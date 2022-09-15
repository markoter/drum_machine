import React from "react";

const Pad = (props) => {
    const { id, sampleSrc, keySelect } = props
    const activateButton = (button) => {
        button.classList.toggle("clicked")

    }
    const handleClick = () => {
        const sound = document.querySelector(`#${keySelect}`)
        const button = document.querySelector(`#${id}`)
        sound.play()
        activateButton(button)
        setTimeout(() => activateButton(button), 100)
    }
    const handleKey = (key) => {
        const keyPressed = '#' + key.toString().toUpperCase()
        const sound = document.querySelector(keyPressed)
        const button = document.querySelector(`#${id}`)
        sound.play()
        activateButton(button)
        setTimeout(() => activateButton(button), 100)
    }
    window.addEventListener("keyup", (event) => handleKey(event.key))

    return (
        <div id={id} className="drum-pad" onClick={handleClick}>
            <p>{keySelect}</p>
            <audio src={sampleSrc} id={keySelect} className="clip" />
        </div>
    )
}
export default Pad  