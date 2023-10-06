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
                        <a id="name" target="_blank" href="https://lilianzlettuce.github.io/thing/">lilian zhao</a>
                        <canvas className="canvas" width="70" height="60"></canvas>
                    </div>
                    <div id="menu">
                        <a className="faded" id="projects-link" href="https://lilianzlettuce.github.io/#projects">Work</a>
                        <a className="faded" id="fun-link" href="https://lilianzlettuce.github.io/stuff">Fun</a>
                        <a className="faded" id="about-link" href="https://lilianzlettuce.github.io/about">About</a>
                    </div>
                </div>
            </div>
        )
    }
}

const domContainer = document.querySelector('#top-bar-container')
ReactDOM.render(<TopBar />, domContainer)