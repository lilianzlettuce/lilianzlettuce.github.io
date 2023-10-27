'use strict';

class TopBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="section top-bar" id="top">
                    <div className="name">
                        <a id="name" href="https://lilianzlettuce.github.io/">lilian zhao</a>
                        <div id="toilet-model-container">
                            <model-viewer id="toilet-model" src="assets/toilet-open-3.glb" alt="Toilet" camera-controls ios-src="assets/toilet-open.glb"></model-viewer>
                        </div>
                    </div>
                    <div id="menu">
                        <a className="faded menu-link" id="projects-link" href="https://lilianzlettuce.github.io/#projects">Work</a>
                        <a className="faded menu-link" id="fun-link" href="https://lilianzlettuce.github.io/stuff">Stuff</a>
                        <a className="faded menu-link" id="about-link" href="https://lilianzlettuce.github.io/about">About</a>
                    </div>
                </div>
            </div>
        )
    }
}

const domContainer = document.querySelector('#top-bar-container')
ReactDOM.render(<TopBar />, domContainer)