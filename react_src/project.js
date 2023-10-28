'use strict';

const projects = [
    {
        title: 'Atrophy: Graveyard of My Fallen Heroes',
        img: '/img/atrophy.png',
        descrip: 'Interactive VR environment simulating the decay of the self.',
        categories: ['dev', 'design'],
    },
    {
        title: 'ML Hacks',
        img: '/img/mlhacks.png',
        categories: ['dev', 'design'],
        descrip: 'Website for ML Hacks, Bay Area\'s premier Machine Learning focused hackathon for female and nonbinary high school students.',
    },
    {
        title: 'Cero',
        img: '/img/cero.png',
        categories: ['dev', 'design'],
        date: 'June 2021',
        award: '1st Place @ Hydrangea Hacks',
        descrip: 'Adventure/platformer game developed with Javascript using the melonJS game engine—complete with original sprites, tilesets, and maps.',
    },
    {
        title: 'BLOOG',
        img: '/img/bloog.png',
        categories: ['dev', 'design'],
        date: 'May 2021',
        descrip: 'Knockoff Quizlet. Built with React/Redux/Firebase.',
    },
    {
        title: 'LineScape',
        img: '/img/linescape.png',
        categories: ['dev', 'design'],
        date: 'April 2021',
        award: 'Best Design @ Superposition V',
        descrip: 'SVG drawing tool that provides an interactive visual interface designed to simplify the process of creating line animations for websites.',
    },
    {
        title: 'Snowball',
        img: '/img/snowball.png',
        categories: ['dev', 'design'],
        date: 'Oct 2020',
        award: 'Best Overall Hack @ Creatica 2020',
        descrip: 'Crowdfunding Android app created to maximize the impact of individual donations by taking advantage of corporate matching programs.',
    },
    {
        title: '2048',
        img: '/img/2048.png',
        categories: ['dev', 'design'],
        date: 'July 2020',
        descrip: 'Browser-based version of the classic 2048 game built with Javascript and HTML/CSS to include original styling and various themes.',
    },
    {
        title: '',
        img: '/img/.png',
        categories: ['dev', 'design'],
        descrip: '',
    },
];

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {projects.map(project =>
          <div className="project-container" key={project.title} id={project.title + "PC"}>
            <div className="image" id={project.name}></div>
            <div className="descrip-box">
                <div className="descrip-text">
                    <h4 className="title">{project.title}</h4>
                    <h6 className="date">{project.date}</h6>
                    {project.award && <div className="award" id={"award-" + project.name}>{project.award}</div>}
                    <p className="descrip">
                    {project.descrip}
                    </p>
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