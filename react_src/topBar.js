'use strict';

class TopBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="top-bar">
                    <div className="name">
                        <a id="name" href="https://lilianzlettuce.github.io/">lilian zhao</a>
                        <div id="toilet-model-container">
                            <model-viewer id="toilet-model" 
                                src="assets/toilet-open-3.glb" 
                                alt="Toilet" 
                                interaction-prompt="none" 
                                camera-controls disable-pan disable-tap disable-zoom
                                auto-rotate auto-rotate-delay="1000"
                                rotation-per-second="10deg" 
                                camera-orbit="30deg 75deg 0deg"
                                ios-src="assets/toilet-open-3.glb"></model-viewer>
                        </div>
                    </div>
                    <div id="menu">
                        <a className="faded menu-link" id="projects-link" href="https://lilianzlettuce.github.io/work">Work</a>
                        <a className="faded menu-link" id="fun-link" href="https://lilianzlettuce.github.io/stuff">Misc</a>
                        <a className="faded menu-link" id="about-link" href="https://lilianzlettuce.github.io/about">About</a>
                    </div>
                </div>
            </div>
        )
    }
}

const domContainer = document.querySelector('#top-bar-container')
ReactDOM.render(<TopBar />, domContainer)