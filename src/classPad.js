import React from "react";

class Pad extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id={sample.name} className="drum-pad" onClick={handlePad}>
                <p>{sample.keyName}</p>
                <audio src={sample.src} id={sample.keyName} className="clip" />
            </div>
        )
    }

}
export default Pad  