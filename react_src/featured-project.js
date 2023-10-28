'use strict';

let projects = {
  new: {
    name: '',
    title: '',
    type: '',
    date: '',
    descrip: '',
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
    descrip: 'Adventure/platformer game developed with Javascript using the melonJS game engine—complete with original sprites, tilesets, and maps.',
  },
  bloog: {
    name: 'bloog',
    title: 'BLOOG',
    date: 'May 2021',
    descrip: 'Knockoff Quizlet. Built with React/Redux/Firebase.',
  },
  linescape: {
    name: 'linescape',
    title: 'LineScape',
    date: 'April 2021',
    award: 'Best Design @ Superposition V',
    descrip: 'SVG drawing tool that provides an interactive visual interface designed to simplify the process of creating line animations for websites.',
  },
  snowball: {
    name: 'snowball',
    title: 'Snowball',
    date: 'Oct 2020',
    award: 'Best Overall Hack @ Creatica 2020',
    descrip: 'Crowdfunding Android app created to maximize the impact of individual donations by taking advantage of corporate matching programs.',
  },
  two: {
    name: 'two',
    title: '2048',
    date: 'July 2020',
    descrip: 'Browser-based version of the classic 2048 game built with Javascript and HTML/CSS to include original styling and various themes.',
  },
}
let projectArr = [projects.mlhacks, projects.cero, projects.bloog, projects.linescape, projects.snowball, projects.two]

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {projectArr.map(project =>
          <div className="project-container" key={project.name} id={project.name + "PC"}>
            <div className="descrip-box">
              <div className="controls">
                  <div className="dots">
                    <div className="hex" id={project.name + "-hex"} style={{zIndex: -100}}></div>
                    <div className={"dot dot1 " + project.name + "-dot"} id={project.name + "-dot1"}></div>
                    <div className={"dot dot2 " + project.name + "-dot"} id={project.name + "-dot2"}></div>
                    <div className={"dot dot3 " + project.name + "-dot"} id={project.name + "-dot3"}></div>
                    <i id={project.name + "-icon"} className="fas fa-angle-right icon right-arrow"></i>
                  </div>
              </div>
              <div className="descrip-text">
                <h4 className="title">{project.title}</h4>
                <h6 className="date">{project.date}</h6>
                {project.award && <div className="award" id={"award-" + project.name}>{project.award}</div>}
                <p className="descrip">
                  {project.descrip}
                </p>
              </div>
            </div>
            <div className="image" id={project.name}>
              <div id={project.name + "2"} className="image-over"></div>
              <div id={project.name + "3"} className="image-over image-over2"></div>
              <div id={project.name + "-hover"} className="white-hover"></div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const domContainer = document.querySelector('#featured-projects')
ReactDOM.render(<Project/>, domContainer)