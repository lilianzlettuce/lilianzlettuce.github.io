'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var projects = {
  new: {
    name: '',
    title: '',
    type: '',
    date: '',
    descrip: ''
  },
  mlhacks: {
    name: 'mlhacks',
    title: 'ML Hacks',
    date: 'June 2022',
    descrip: 'Website for ML Hacks, Bay Area\'s premier Machine Learning focused hackathon for female and nonbinary high school students.'
  },
  cero: {
    name: 'cero',
    title: 'Cero',
    date: 'June 2021',
    award: '1st Place @ Hydrangea Hacks',
    descrip: 'Adventure/platformer game developed with Javascript using the melonJS game engine—complete with original sprites, tilesets, and maps.'
  },
  bloog: {
    name: 'bloog',
    title: 'BLOOG',
    date: 'May 2021',
    descrip: 'Knockoff Quizlet. Built with React/Redux/Firebase.'
  },
  linescape: {
    name: 'linescape',
    title: 'LineScape',
    date: 'April 2021',
    award: 'Best Design @ Superposition V',
    descrip: 'SVG drawing tool that provides an interactive visual interface designed to simplify the process of creating line animations for websites.'
  },
  snowball: {
    name: 'snowball',
    title: 'Snowball',
    date: 'Oct 2020',
    award: 'Best Overall Hack @ Creatica 2020',
    descrip: 'Crowdfunding Android app created to maximize the impact of individual donations by taking advantage of corporate matching programs.'
  },
  two: {
    name: 'two',
    title: '2048',
    date: 'July 2020',
    descrip: 'Browser-based version of the classic 2048 game built with Javascript and HTML/CSS to include original styling and various themes.'
  }
};
var projectArr = [projects.mlhacks, projects.cero, projects.bloog, projects.linescape, projects.snowball, projects.two];

var FeaturedProject = function (_React$Component) {
  _inherits(FeaturedProject, _React$Component);

  function FeaturedProject(props) {
    _classCallCheck(this, FeaturedProject);

    return _possibleConstructorReturn(this, (FeaturedProject.__proto__ || Object.getPrototypeOf(FeaturedProject)).call(this, props));
  }

  _createClass(FeaturedProject, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        projectArr.map(function (project) {
          return React.createElement(
            'div',
            { className: 'project-container', key: project.name, id: project.name + "PC" },
            React.createElement(
              'div',
              { className: 'descrip-box' },
              React.createElement(
                'div',
                { className: 'controls' },
                React.createElement(
                  'div',
                  { className: 'dots' },
                  React.createElement('div', { className: 'hex', id: project.name + "-hex", style: { zIndex: -100 } }),
                  React.createElement('div', { className: "dot dot1 " + project.name + "-dot", id: project.name + "-dot1" }),
                  React.createElement('div', { className: "dot dot2 " + project.name + "-dot", id: project.name + "-dot2" }),
                  React.createElement('div', { className: "dot dot3 " + project.name + "-dot", id: project.name + "-dot3" }),
                  React.createElement('i', { id: project.name + "-icon", className: 'fas fa-angle-right icon right-arrow' })
                )
              ),
              React.createElement(
                'div',
                { className: 'descrip-text' },
                React.createElement(
                  'h4',
                  { className: 'title' },
                  project.title
                ),
                React.createElement(
                  'h6',
                  { className: 'date' },
                  project.date
                ),
                project.award && React.createElement(
                  'div',
                  { className: 'award', id: "award-" + project.name },
                  project.award
                ),
                React.createElement(
                  'p',
                  { className: 'descrip' },
                  project.descrip
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'image', id: project.name },
              React.createElement('div', { id: project.name + "2", className: 'image-over' }),
              React.createElement('div', { id: project.name + "3", className: 'image-over image-over2' }),
              React.createElement('div', { id: project.name + "-hover", className: 'white-hover' })
            )
          );
        })
      );
    }
  }]);

  return FeaturedProject;
}(React.Component);

var domContainer = document.querySelector('#featured-projects');
ReactDOM.render(React.createElement(FeaturedProject, null), domContainer);