'use strict';

const projects = [
    {
        title: 'Atrophy: Graveyard of My Fallen Heroes',
        img: '/img/atrophypic1.png',
        link: 'https://lilianzlettuce.github.io/ad417/',
        categories: ['dev', 'design'],
        descrip: 'Interactive VR environment simulating the decay of the self.',
    }
];

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
          {imgs.map(img =>
            <div class="grid-item">
              <img src={img} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

const domContainer = document.querySelector('#things')
ReactDOM.render(<Thing/>, domContainer)