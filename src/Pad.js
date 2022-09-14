import React from "react";

const Pad = (props) => {
    const { id, sampleSrc, keySelect } = props
    const handleClick = () => {
        const sound = document.querySelector(`#${keySelect}`)
        const button = document.querySelector(`#${id}`)
        sound.play()
        button.classList.toggle("clicked")

    }
    return (
        <div id={id} className="drum-pad" onClick={handleClick}>
            <p>{keySelect} {id}</p>
            <audio src={sampleSrc} id={keySelect} className="audio" />
        </div>
    )
}
export default Pad