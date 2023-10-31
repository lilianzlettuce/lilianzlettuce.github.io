'use strict';

const things = [
  {
    title: 'acryllic scene 2',
    img: '/img/things/acr-2.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: 'acryllic scene 3',
    img: '/img/things/acr-3.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: 'face 2',
    img: '/img/things/face-a1.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: 'hell plant 1',
    img: '/img/things/hellplant-face-1.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  /*{
    title: 'hell plant 1',
    img: '/img/things/hellplant-1.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },*/
  {
    title: 'hell plant 1',
    img: '/img/things/hellplant-5.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  /*{
    title: 'hell plant 1',
    img: '/img/things/hellplant-3.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },*/
  {
    title: 'face 1',
    img: '/img/things/face-b1.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: 'Potty Simulator 1000',
    img: '/img/things/ps-2.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: 'Potty Simulator 1000',
    img: '/img/things/ps-1.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: 'Atrophy - An Artificial World',
    img: '/img/things/purple3.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: 'Atrophy - An Artificial World',
    img: '/img/things/purple1.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  /*{
    title: 'Atrophy - An Artificial World',
    img: '/img/things/purple4.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },*/
  {
    title: 'Japan Street View',
    img: '/img/things/p3.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: 'Japan Street View - Shaded',
    img: '/img/things/japan1.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: 'Unity Experiments - Toiletception',
    img: '/img/things/p5.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: 'what yellow\'s supposed to look like',
    img: '/img/things/p2.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: '',
    img: '/img/things/eye/yellow-red2.png',
    link: 'https://lilianzlettuce.github.io/ad417',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: '',
    img: '/img/things/eye/rgby.png',
    link: 'https://lilianzlettuce.github.io/ad417',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: '',
    img: '/img/things/eye/v3-cym.png',
    link: 'https://lilianzlettuce.github.io/ad417',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: '',
    img: '/img/things/eye/v3-pastel-by.png',
    link: 'https://lilianzlettuce.github.io/ad417',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: '',
    img: '/img/things/eye/v3-py-2.png',
    link: 'https://lilianzlettuce.github.io/ad417',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
      title: 'Saber - Golden',
      img: '/img/things/p1.png',
      link: 'https://lilianzlettuce.github.io/ad417/',
      categories: ['dev', 'design'],
      descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: 'Saber - Double Rainbow',
    img: '/img/things/double-rainbow.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: 'Leaf of Absence',
    img: '/img/things/laa-poster.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: 'Banana Model',
    img: '/img/things/banana-1.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: 'Tree Model',
    img: '/img/things/3d-tree-1.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: 'Lynn',
    img: '/img/things/lynn.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: 'Kinoko',
    img: '/img/things/kinoko.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: 'Shadow Boi Droy',
    img: '/img/things/droy.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: 'Shiloh',
    img: '/img/things/shiloh.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self.',
  },
  {
    title: 'Ren',
    img: '/img/things/ren-bg.png',
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
              <img src={thing.img} loading="lazy" />
            </div>
          )}
        </div>
      </div>
    )
  }
}

const domContainer = document.querySelector('#things')
ReactDOM.render(<Thing/>, domContainer)