'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var things = [{
  title: 'acryllic scene 2',
  img: '/img/things/acr-2.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'acryllic scene 3',
  img: '/img/things/acr-3.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'face 1',
  img: '/img/things/face-a1.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'face 1',
  img: '/img/things/face-b2.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'hell plant 1',
  img: '/img/things/hellplant-1.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'hell plant 1',
  img: '/img/things/hellplant-5.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'hell plant 1',
  img: '/img/things/hellplant-3.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'hell plant 1',
  img: '/img/things/hellplant-4.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'hell plant 1',
  img: '/img/things/hellplant-face-1.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'Potty Simulator 1000',
  img: '/img/things/ps-1.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'Potty Simulator 1000',
  img: '/img/things/ps-2.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'Atrophy - An Artificial World',
  img: '/img/things/purple1.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'Atrophy - An Artificial World',
  img: '/img/things/purple3.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'Atrophy - An Artificial World',
  img: '/img/things/purple4.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'what yellow\'s supposed to look like',
  img: '/img/things/p2.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'Japan Street View',
  img: '/img/things/p3.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'Japan Street View - Shaded',
  img: '/img/things/p4.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'Unity Experiments - Toiletception',
  img: '/img/things/p5.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: '',
  img: '/img/things/eye/yellow-red2.png',
  link: 'https://lilianzlettuce.github.io/ad417',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: '',
  img: '/img/things/eye/rgby.png',
  link: 'https://lilianzlettuce.github.io/ad417',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: '',
  img: '/img/things/eye/v2-pg.png',
  link: 'https://lilianzlettuce.github.io/ad417',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: '',
  img: '/img/things/eye/v3-cym.png',
  link: 'https://lilianzlettuce.github.io/ad417',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: '',
  img: '/img/things/eye/v3-pastel-by.png',
  link: 'https://lilianzlettuce.github.io/ad417',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: '',
  img: '/img/things/eye/v3-py-2.png',
  link: 'https://lilianzlettuce.github.io/ad417',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'Saber - Golden',
  img: '/img/things/p1.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'Saber - Double Rainbow',
  img: '/img/things/double-rainbow.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'Leaf of Absence',
  img: '/img/things/laa-poster.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'Banana Model',
  img: '/img/things/banana-1.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'Tree Model',
  img: '/img/things/3d-tree-1.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}];

var numThings = 6;
var imgs = [];
for (var i = 1; i <= numThings; i++) {
  imgs.push('img/things/p' + i + '.png');
}

var Thing = function (_React$Component) {
  _inherits(Thing, _React$Component);

  function Thing(props) {
    _classCallCheck(this, Thing);

    return _possibleConstructorReturn(this, (Thing.__proto__ || Object.getPrototypeOf(Thing)).call(this, props));
  }

  _createClass(Thing, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'stuff-container' },
        React.createElement(
          'div',
          { 'class': 'grid' },
          React.createElement('div', { className: 'grid-sizer' }),
          things.map(function (thing) {
            return React.createElement(
              'div',
              { 'class': 'grid-item' },
              React.createElement('img', { src: thing.img })
            );
          })
        )
      );
    }
  }]);

  return Thing;
}(React.Component);

var domContainer = document.querySelector('#things');
ReactDOM.render(React.createElement(Thing, null), domContainer);