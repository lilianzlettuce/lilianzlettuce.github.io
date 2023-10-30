'use strict';

class Contact extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <div id="footer-container">
                    <div className="section-title" id="footer-title">Contact <a href="#top" id="contactBtn2">↑</a></div>
                    <div className="section" id="footer">
                        <a className="contact-bottom" target="_blank" href="mailto:zhao1268@purdue.edu">—Email</a> 
                        <a className="contact-bottom" target="_blank" href="https://github.com/lilianzlettuce">—Github</a> 
                        <a className="contact-bottom" target="_blank" href="https://www.linkedin.com/in/lilian-zhao/">—LinkedIn</a>
                        <a className="contact-bottom lettuce" id="lettuce-bottom" target="_blank" href="https://lilianzlettuce.github.io/lettuce">🥬</a>
                        <p id="bottom-text">Made with the blood of a thousand snails | 3202</p>
                    </div>
                </div>

                <div id="svg-container">
                    <svg className="scribbles" id="scribble2" width="50vw" height="70vh">
                        <path id="scribble-path2" stroke="var(--cyan)" strokeLinecap="round" strokeWidth="1" fill="transparent" d=""/>
                    </svg>
                    <svg className="scribbles" id="scribble3" width="50vw" height="70vh">
                        <path id="scribble-path3" stroke="var(--yellow)" strokeLinecap="round" strokeWidth="1" fill="transparent" d=""/>
                    </svg>
                    <svg className="scribbles" id="scribble" width="60vw" height="70vh">
                        <path id="scribble-path" stroke="var(--lettuce)" strokeLinecap="round" strokeWidth="1" fill="transparent" d=""/>
                    </svg>
                    <svg className="scribbles" id="scribble4" width="50vw" height="70vh">
                        <path id="scribble-path4" stroke="var(--magenta)" strokeLinecap="round" strokeWidth="1" fill="transparent" d=""/>
                    </svg>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Contact />, document.querySelector('#contact-container'))