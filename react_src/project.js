'use strict';

const projects = [
    {
        title: 'Atrophy: Graveyard of My Fallen Heroes',
        img: '/img/atrophypic1.png',
        link: 'https://lilianzlettuce.github.io/ad417/',
        categories: ['dev', 'design'],
        descrip: 'Interactive VR environment simulating the decay of the self.',
    },
    {
        title: 'Purdue Hackers Landing Page',
        img: '/img/phpic2.png',
        link: 'https://www.purduehackers.com/',
        categories: ['dev', 'design'],
        descrip: 'Central site for Purdue Hackers, an on-campus organization of more than 1000 students who build & ship creative projects.',
    },
    {
        title: 'ML Hacks',
        img: '/img/mlhackspic1.png',
        link: '',
        categories: ['dev', 'design'],
        descrip: 'Website for ML Hacks, Bay Area\'s premier Machine Learning focused hackathon for female and nonbinary high school students.',
    },
    {
        title: 'Cero',
        img: '/img/ceropic1.png',
        link: '',
        categories: ['dev', 'design'],
        date: 'June 2021',
        award: '1st Place @ Hydrangea Hacks',
        descrip: 'Adventure/platformer game developed with Javascript using the melonJS game engine.',
    },
    {
        title: 'BLOOG',
        img: '/img/bloogpic1.png',
        link: '',
        categories: ['dev', 'design'],
        date: 'May 2021',
        descrip: 'Notecard web app built with React, Redux, & Firebase. (Basically knockoff quizlet).',
    },
    {
        title: 'LineScape',
        img: '/img/linescapepic1.png',
        link: '',
        categories: ['dev', 'design'],
        date: 'April 2021',
        award: 'Best Design @ Superposition V',
        descrip: 'SVG drawing tool designed to simplify the process of creating line animations for websites.',
    },
    {
        title: 'Snowball',
        img: '/img/snowballpic1.png',
        link: '',
        categories: ['dev', 'design'],
        date: 'Oct 2020',
        award: 'Best Overall Hack @ Creatica 2020',
        descrip: 'Crowdfunding Android app created to maximize the impact of individual donations by taking advantage of corporate matching programs.',
    },
    {
        title: '2048',
        img: '/img/2048pic1.png',
        link: '',
        categories: ['dev', 'design'],
        date: 'July 2020',
        descrip: 'Browser-based version of the classic 2048 game built with Javascript and HTML/CSS to include original styling and various themes.',
    },
    {
        title: 'Tetris',
        img: '/img/tetrispic2.png',
        link: '',
        categories: ['dev', 'design'],
        descrip: 'Tetris remade.',
    },
    {
        title: 'Space Guy',
        img: '/img/spaceguypic2.png',
        link: '',
        categories: ['dev', 'design'],
        descrip: '2D space-themed platformer created with a team of 5 using Unity.',
    },
    {
        title: 'Veracity',
        img: '/img/veracitypic3.png',
        link: '',
        categories: ['dev', 'design'],
        descrip: 'Interface for charity searching web app. No longer running due to API restrictions.',
    },
    {
        title: 'Chamomile',
        img: '/img/sleeppic1.png',
        link: '',
        categories: ['dev', 'design'],
        descrip: 'Sleep tracker web app design',
    },
    {
        title: 'Escape Room',
        img: '/img/escaperoompic1.png',
        link: '',
        categories: ['dev', 'design'],
        descrip: 'Self explanatory.',
    },
    {
        title: 'Weather App',
        img: '/img/weatherpic1.png',
        link: '',
        categories: ['dev', 'design'],
        descrip: 'Minimalistic weather web app created using the weather API.',
    },
];

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="projects-container">
        {projects.map(project =>
          <div 
            className="project-container" 
            key={project.title} 
            id={project.title + "PC"}
            href={project.link}
          >
            <div className="image" id={project.name}></div>
            <img src={project.img}/>
            <div className="descrip-box">
                <div className="descrip-text">
                    <h4 className="project-title">{project.title}</h4>
                    {project.award && <div className="award" id={"award-" + project.name}>{project.award}</div>}
                    <p className="project-descrip">{project.descrip}</p>
                </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const domContainer = document.querySelector('#projects')
ReactDOM.render(<Project/>, domContainer)