'use strict';
import { things, things2D } from "../utils/data.js"

const host = window.location.host;
const pathname = window.location.pathname;
const url = host + pathname;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const sort = urlParams.get('sort')

// determine which things to show based on sort parameter
let listedThings = things;
if (sort == '2d') {
  listedThings = things2D
}

class Thing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stuff-container">
        <div>
          <a className="sort-link">2D</a> - 
          <a className="sort-link">3D</a> - 
          <a className="sort-link">interactive</a>
        </div>
        <div class="grid">
          <div className="grid-sizer"></div>
          {listedThings.map((thing, i) =>
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