'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var projects = [{
    title: 'Atrophy: Graveyard of My Fallen Heroes',
    img: '/img/atrophypic1.png',
    link: 'https://lilianzlettuce.github.io/ad417/',
    categories: ['dev', 'design'],
    descrip: 'Interactive VR environment simulating the decay of the self. Accessible online via web.'
}, {
    title: 'Purdue Hackers Landing Page',
    img: '/img/phpic2.png',
    link: 'https://www.purduehackers.com/',
    categories: ['dev', 'design'],
    descrip: 'Central site for Purdue Hackers, a student organization of more than 1000 members who build & ship kick-ass creative projects.'
}, {
    title: 'ML Hacks',
    img: '/img/mlhackspic1.png',
    link: 'https://mlhacks2022.vercel.app/',
    categories: ['dev', 'design'],
    descrip: 'Website for ML Hacks, Bay Area\'s premier Machine Learning focused hackathon for female and nonbinary high school students.'
}, {
    title: 'Cero',
    img: '/img/ceropic1.png',
    link: 'https://lilianzlettuce.github.io/cero',
    categories: ['dev', 'design'],
    date: 'June 2021',
    award: '1st Place @ Hydrangea Hacks',
    descrip: 'Adventure/platformer game developed with Javascript using the melonJS game engine.'
}, {
    title: 'Snowball',
    img: '/img/snowballpic1.png',
    link: 'https://devpost.com/software/dodoplier',
    categories: ['dev', 'design'],
    date: 'Oct 2020',
    award: 'Best Overall Hack @ Creatica',
    descrip: 'Crowdfunding Android app created to maximize the impact of individual donations by taking advantage of corporate matching programs.'
}, {
    title: 'BLOOG',
    img: '/img/bloogpic1.png',
    link: 'https://bloog-ef82f.web.app/',
    categories: ['dev', 'design'],
    date: 'May 2021',
    descrip: 'Notecard web app built with React, Redux, & Firebase. (Basically knockoff quizlet).'
}, {
    title: 'LineScape',
    img: '/img/linescapepic1.png',
    link: 'https://lilianzlettuce.github.io/linescape-vh',
    categories: ['dev', 'design'],
    date: 'April 2021',
    award: 'Best Design @ Superposition V',
    descrip: 'SVG drawing tool designed to simplify the process of creating line animations for websites.'
}, {
    title: '2048',
    img: '/img/2048pic1.png',
    link: 'https://lilianzlettuce.github.io/2048',
    categories: ['dev', 'design'],
    date: 'July 2020',
    descrip: 'Browser-based version of the classic 2048 game built with Javascript and HTML/CSS to include original styling and various themes.'
}, {
    title: 'Escape Room',
    img: '/img/escaperoompic1.png',
    link: 'https://lilianzlettuce.github.io/escapeRoom',
    categories: ['dev', 'design'],
    descrip: 'Online escape room featuring the nonsensical \"logic\" puzzles of my deranged high-schooler mind.'
}, {
    title: 'Space Guy',
    img: '/img/spaceguypic2.png',
    link: '',
    categories: ['dev', 'design'],
    descrip: '2D space-themed platformer created with a team of 5 using Unity.'
}, {
    title: 'Wooden Toy',
    img: '/img/wooden-toy.png',
    link: '',
    categories: ['dev', 'design'],
    descrip: 'Pacman themed wooden toy with laser-cut interactive parts. Designed and modeled with Autodesk Inventor.'
}, {
    title: 'Tetris',
    img: '/img/tetrispic2.png',
    link: 'https://lilianzlettuce.github.io/tetris',
    categories: ['dev', 'design'],
    descrip: 'Tetris remade.'
}, {
    title: 'Veracity',
    img: '/img/veracitypic3.png',
    link: 'https://lilianzlettuce.github.io/veracity',
    categories: ['dev', 'design'],
    descrip: 'Interface for charity searching web app. No longer running due to API restrictions.'
}, {
    title: 'Chamomile',
    img: '/img/sleeppic1.png',
    link: '',
    categories: ['dev', 'design'],
    descrip: 'Design for a sleep tracking web app.'
}];

var Project = function (_React$Component) {
    _inherits(Project, _React$Component);

    function Project(props) {
        _classCallCheck(this, Project);

        return _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, props));
    }

    _createClass(Project, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'projects-container' },
                projects.map(function (project) {
                    return project.link ? React.createElement(
                        'a',
                        {
                            target: '_blank',
                            className: 'project-container',
                            key: project.title,
                            id: project.title + "PC",
                            href: project.link
                        },
                        React.createElement('div', { className: 'image', id: project.name }),
                        React.createElement('img', { src: project.img }),
                        React.createElement(
                            'div',
                            { className: 'descrip-box' },
                            React.createElement(
                                'div',
                                { className: 'descrip-text' },
                                React.createElement(
                                    'h4',
                                    { className: 'project-title' },
                                    project.title
                                ),
                                project.award && React.createElement(
                                    'div',
                                    { className: 'award', id: "award-" + project.name },
                                    project.award
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'project-descrip' },
                                    project.descrip
                                )
                            )
                        )
                    ) : React.createElement(
                        'div',
                        {
                            className: 'project-container',
                            key: project.title,
                            id: project.title + "PC"
                        },
                        React.createElement('div', { className: 'image', id: project.name }),
                        React.createElement('img', { src: project.img }),
                        React.createElement(
                            'div',
                            { className: 'descrip-box' },
                            React.createElement(
                                'div',
                                { className: 'descrip-text' },
                                React.createElement(
                                    'h4',
                                    { className: 'project-title' },
                                    project.title
                                ),
                                project.award && React.createElement(
                                    'div',
                                    { className: 'award', id: "award-" + project.name },
                                    project.award
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'project-descrip' },
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
}(React.Component);

var domContainer = document.querySelector('#projects');
ReactDOM.render(React.createElement(Project, null), domContainer);