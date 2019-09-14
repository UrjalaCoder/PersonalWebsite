import React from "react";
import colors from '../colors';
import MainContent from '../components/MainContent';
import { ContentBox } from '../components/ContentBox';
import '../styling/App.css';

const projectBox = ({name, html_url, description, homepage, id}) => {

  return (
    <li key={id} className="projectItem">
      <div className="projectContainer">
        <div className="projectName">
          <a target="_blank" className="repoLink" href={html_url}>{name}</a>
        </div>
        <div className="projectDetails">
          <div>
            {description || "Undef"}
          </div>
          <br />
          {(homepage && (<a target="_blank" className="demoLink" href={homepage}>Live app</a>))}
        </div>
      </div>
    </li>
  );
};

const formColumns = (projectData) => {
  const containerStyle = {
    flexDirection: 'row',
    alignItems: 'start',
    width: '100%',
    borderRadius: '5px',
    backgroundColor: colors['baby-blue'],
    flex: '1 0 0',
  };

  const listStyle = {
    listStyle: 'none',
    paddingLeft: '0px',
    marginLeft: '10px',
    marginRight: '10px',
    flexGrow: '1',
    flexBasis: '1',
  };

  const cols = [];
  for(let i = 0; i < projectData.length; i += 4) {
    const projects = projectData.slice(i, i + 4);
    const projectElements = projects.map((project) => {
      return projectBox(project);
    });
    cols.push(
      <ContentBox style={containerStyle} key={i}>
        <ul style={listStyle}>
          {projectElements}
        </ul>
      </ContentBox>
    );
  }

  return cols;
};

const ProjectsSection = (props) => {
  const projects = props.projectsData;

  if(!projects) {
    return (
      <h3>Loading</h3>
    );
  }


  const listStyle = {
    listStyle: 'none',
    paddingLeft: '0px',
    margin: '0px',
  };

  const containerStyle = {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    borderRadius: '5px',
    backgroundColor: colors['baby-blue'],
    flex: '1 0 0',
  };

  const cols = formColumns(projects);

  const imageStyle = {
    paddingTop: '10px',
    paddingLeft: '50px'
  };

  return (
    <MainContent>
      <ContentBox style={{
        ...containerStyle,
        marginLeft: '30px',
        marginRight: '30px',
        justifyContent: 'space-evenly',
        alignItems: 'start',
        paddingLeft: '30px',
        paddingTop: '30px',
        paddingBottom: '30px',
        fontSize: '24px',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        <div>
          <p>Here you can some of my personal and school projects. There's also links to the repositories.
          <br />Some of the projects have live instances running.</p>
          <p>My GitHub username is <a href="https://github.com/UrjalaCoder">UrjalaCoder</a></p>
        </div>
        <a href="https://github.com/UrjalaCoder"><img style={imageStyle} src="/static/images/github.png" width={120} height={120}></img></a>
      </ContentBox>
      <MainContent id="projectListContainer">
        {cols}
      </MainContent>
    </MainContent>
  );
};

export default ProjectsSection;
