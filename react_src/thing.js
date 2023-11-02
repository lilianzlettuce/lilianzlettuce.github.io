'use strict';
import { things, things2D, things3D, thingsInteractive } from "../utils/data.js"

const pathname = window.location.pathname;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const sort = urlParams.get('sort')

// determine which things to show based on sort parameter
let listedThings = things;
if (sort == '2d') {
  listedThings = things2D
} else if (sort == '3d') {
  listedThings = things3D
} else if (sort == 'i9e') {
  listedThings = thingsInteractive
}

class Thing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stuff-container">
        <div class="page-title" id="top">{sort} stuff</div>
        <div>collection of my experimental works, unfinished scraps, and miscellaneous art ↓</div>
        <div className="sort-links">
          <a className="sort-link" href={`${pathname}`}>—all </a> 
          <a className="sort-link" href={`${pathname}?sort=2d`}>—2D </a> 
          <a className="sort-link" href={`${pathname}?sort=3d`}>—3D </a> 
          <a className="sort-link" href={`${pathname}?sort=i93`}>—interactive</a>
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