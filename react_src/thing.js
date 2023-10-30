'use strict';

const things = [
    {
        title: 'Atrophy: Graveyard of My Fallen Heroes',
        img: '/img/things/p1.png',
        link: 'https://lilianzlettuce.github.io/ad417/',
        categories: ['dev', 'design'],
        descrip: 'Interactive VR environment simulating the decay of the self.',
    },
    {
      title: 'Atrophy: Graveyard of My Fallen Heroes',
      img: '/img/things/p2.png',
      link: 'https://lilianzlettuce.github.io/ad417/',
      categories: ['dev', 'design'],
      descrip: 'Interactive VR environment simulating the decay of the self.',
    },
    {
      title: 'Atrophy: Graveyard of My Fallen Heroes',
      img: '/img/things/p3.png',
      link: 'https://lilianzlettuce.github.io/ad417/',
      categories: ['dev', 'design'],
      descrip: 'Interactive VR environment simulating the decay of the self.',
    },
    {
      title: 'Atrophy: Graveyard of My Fallen Heroes',
      img: '/img/things/p4.png',
      link: 'https://lilianzlettuce.github.io/ad417/',
      categories: ['dev', 'design'],
      descrip: 'Interactive VR environment simulating the decay of the self.',
    },
    {
      title: 'Atrophy: Graveyard of My Fallen Heroes',
      img: '/img/things/p5.png',
      link: 'https://lilianzlettuce.github.io/ad417/',
      categories: ['dev', 'design'],
      descrip: 'Interactive VR environment simulating the decay of the self.',
    },
    {
      title: 'Atrophy: Graveyard of My Fallen Heroes',
      img: '/img/things/p6.png',
      link: 'https://lilianzlettuce.github.io/ad417/',
      categories: ['dev', 'design'],
      descrip: 'Interactive VR environment simulating the decay of the self.',
    },
    {
      title: 'Atrophy: Graveyard of My Fallen Heroes',
      img: '/img/things/p2.png',
      link: 'https://lilianzlettuce.github.io/ad417/',
      categories: ['dev', 'design'],
      descrip: 'Interactive VR environment simulating the decay of the self.',
    },
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
          {things.map(thing =>
            <div class="grid-item">
              <img src={thing.img} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

const domContainer = document.querySelector('#things')
ReactDOM.render(<Thing/>, domContainer)