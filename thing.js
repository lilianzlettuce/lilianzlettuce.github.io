'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var things = [{
  title: 'Atrophy: Graveyard of My Fallen Heroes',
  img: '/img/things/p1.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'Atrophy: Graveyard of My Fallen Heroes',
  img: '/img/things/p2.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'Atrophy: Graveyard of My Fallen Heroes',
  img: '/img/things/p3.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'Atrophy: Graveyard of My Fallen Heroes',
  img: '/img/things/p4.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'Atrophy: Graveyard of My Fallen Heroes',
  img: '/img/things/p5.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'Atrophy: Graveyard of My Fallen Heroes',
  img: '/img/things/p6.png',
  link: 'https://lilianzlettuce.github.io/ad417/',
  categories: ['dev', 'design'],
  descrip: 'Interactive VR environment simulating the decay of the self.'
}, {
  title: 'Atrophy: Graveyard of My Fallen Heroes',
  img: '/img/things/p2.png',
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