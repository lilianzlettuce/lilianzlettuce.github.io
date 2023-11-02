'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { things, things2D, things3D, thingsInteractive } from "../utils/data.js";

var pathname = window.location.pathname;

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

var sort = urlParams.get('sort');

// determine which things to show based on sort parameter
var listedThings = things;
if (sort == '2d') {
  listedThings = things2D;
} else if (sort == '3d') {
  listedThings = things3D;
} else if (sort == 'i9e') {
  listedThings = thingsInteractive;
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
          { 'class': 'page-title', id: 'top' },
          sort,
          ' stuff'
        ),
        React.createElement(
          'div',
          null,
          'collection of my experimental works, unfinished scraps, and miscellaneous art \u2193'
        ),
        React.createElement(
          'div',
          { className: 'sort-links' },
          React.createElement(
            'a',
            { className: 'sort-link', href: '' + pathname },
            '\u2014all '
          ),
          React.createElement(
            'a',
            { className: 'sort-link', href: pathname + '?sort=2d' },
            '\u20142D '
          ),
          React.createElement(
            'a',
            { className: 'sort-link', href: pathname + '?sort=3d' },
            '\u20143D '
          ),
          React.createElement(
            'a',
            { className: 'sort-link', href: pathname + '?sort=i93' },
            '\u2014interactive'
          )
        ),
        React.createElement(
          'div',
          { 'class': 'grid' },
          React.createElement('div', { className: 'grid-sizer' }),
          listedThings.map(function (thing, i) {
            return React.createElement(
              'div',
              { 'class': 'grid-item img-container' },
              React.createElement(
                'div',
                { className: '' },
                React.createElement('img', { src: thing.img, id: 'thing-img-' + i, loading: 'lazy' })
              ),
              React.createElement(
                'div',
                { 'class': 'img-text', id: 'thing-img-text-' + i },
                thing.title
              )
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