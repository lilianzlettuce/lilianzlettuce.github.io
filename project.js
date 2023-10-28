'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var projects = [{
    title: 'Atrophy: Graveyard of My Fallen Heroes',
    img: '/img/atrophy.png',
    descrip: 'Interactive VR environment simulating the decay of the self.',
    categories: ['dev', 'design']
}, {
    title: 'ML Hacks',
    img: '/img/mlhacks.png',
    categories: ['dev', 'design'],
    descrip: 'Website for ML Hacks, Bay Area\'s premier Machine Learning focused hackathon for female and nonbinary high school students.'
}, {
    title: 'Cero',
    img: '/img/cero.png',
    categories: ['dev', 'design'],
    date: 'June 2021',
    award: '1st Place @ Hydrangea Hacks',
    descrip: 'Adventure/platformer game developed with Javascript using the melonJS game engine—complete with original sprites, tilesets, and maps.'
}, {
    title: 'BLOOG',
    img: '/img/bloog.png',
    categories: ['dev', 'design'],
    date: 'May 2021',
    descrip: 'Knockoff Quizlet. Built with React/Redux/Firebase.'
}, {
    title: 'LineScape',
    img: '/img/linescape.png',
    categories: ['dev', 'design'],
    date: 'April 2021',
    award: 'Best Design @ Superposition V',
    descrip: 'SVG drawing tool that provides an interactive visual interface designed to simplify the process of creating line animations for websites.'
}, {
    title: 'Snowball',
    img: '/img/snowball.png',
    categories: ['dev', 'design'],
    date: 'Oct 2020',
    award: 'Best Overall Hack @ Creatica 2020',
    descrip: 'Crowdfunding Android app created to maximize the impact of individual donations by taking advantage of corporate matching programs.'
}, {
    title: '2048',
    img: '/img/2048.png',
    categories: ['dev', 'design'],
    date: 'July 2020',
    descrip: 'Browser-based version of the classic 2048 game built with Javascript and HTML/CSS to include original styling and various themes.'
}, {
    title: '',
    img: '/img/.png',
    categories: ['dev', 'design'],
    descrip: ''
}];

var Project = function (_Component) {
    _inherits(Project, _Component);

    function Project(props) {
        _classCallCheck(this, Project);

        return _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, props));
    }

    _createClass(Project, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                projects.map(function (project) {
                    return React.createElement(
                        'div',
                        { className: 'project-container', key: project.title, id: project.title + "PC" },
                        React.createElement('div', { className: 'image', id: project.name }),
                        React.createElement(
                            'div',
                            { className: 'descrip-box' },
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
                        )
                    );
                })
            );
        }
    }]);

    return Project;
}(Component);

var domContainer = document.querySelector('#projects');
ReactDOM.render(React.createElement(Project, null), domContainer);