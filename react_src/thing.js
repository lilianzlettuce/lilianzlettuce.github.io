'use strict';
import { things } from "../utils/data.js"
//import { motion } from "framer-motion"

const numThings = 6
const imgs = [];
for (let i = 1; i <= numThings; i++) {
    imgs.push(`img/things/p${i}.png`);
}

class Thing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stuff-container">
        <div class="grid">
          <div className="grid-sizer"></div>
          {things.map((thing, i) =>
            <div class="grid-item img-container">
              <div className="">
                <img src={thing.img} id={`thing-img-${i}`} loading="lazy" />
              </div>
              <div class="img-text" id={`thing-img-text-${i}`}>
                {thing.title}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

const domContainer = document.querySelector('#things')
ReactDOM.render(<Thing/>, domContainer)