import React from "react";
import colors from '../colors';
import MainContent from '../components/MainContent';
import { ContentBox } from '../components/ContentBox';

const projectBox = ({name, html_url, description, homepage, id}) => {

  const itemStyle = {
    flexGrow: '1',
    flexBasis: '1',
  };

  const nameStyle = {
    fontSize: '20px',
    paddingTop: '10px',
    paddingLeft: '10px',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid'
  };

  const detailsStyle = {
    marginTop: '20px',
    marginBottom: '30px',
    paddingLeft: '10px'
  };

  const demoLinkStyle = {
    textDecoration: 'none',
    display: 'block',
    color: 'white',
    backgroundColor: '#6b7696',
    paddingTop: '10px',
    paddingBottom: '10px',
    marginRight: '10px',
    textAlign: 'center',
    marginBottom: '10px',
    borderRadius: '10px',
  };

  const repoLinkStyle = {
    textDecoration: 'none',
    display: 'block',
    color: 'white',
    backgroundColor: '#6b7696',
    paddingTop: '10px',
    paddingBottom: '10px',
    textAlign: 'center',
    marginRight: '10px',
    borderRadius: '10px',
  };

  return (
    <li key={id} style={itemStyle}>
      <div style={containerStyle}>
        <div style={nameStyle}>
          {name}
        </div>
        <div style={detailsStyle}>
          <div>
            {description || "Undef"}
          </div>
          <br />
          {(homepage && (<a style={demoLinkStyle} href={homepage}>DEMO</a>))}
          <a style={repoLinkStyle} href={html_url}>Repository</a>
        </div>
      </div>
    </li>
  );
};

const formColumns = (projectData) => {
  const containerStyle = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
      <ContentBox style={containerStyle}>
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

  const cols = formColumns(projects);

  return (
    <MainContent>
      {cols}
    </MainContent>
  );
};

export default ProjectsSection;
