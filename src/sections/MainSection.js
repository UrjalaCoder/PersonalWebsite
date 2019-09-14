import React from "react";
import getLorem from "utils/getLorem";
import "../styling/App.css"
import { ContentBox, ImageContentBox } from "../components/ContentBox";
import MainContent from "../components/MainContent";
import ProjectsSection from "../sections/Projects";
import colors from "../colors";


const getBox = ({text, url}) => {
  const boxStyle = {
    fontSize: '22px',
    borderColor: colors['light-border'],
    textAlign: 'center',
    backgroundColor: colors['baby-blue'],
    paddingLeft: '20px',
    paddingRight: '20px',
  };

  return (
    <ImageContentBox key={text} url={`/static/images/${url}`} width={100} height={100} style={boxStyle}>
      {text}
    </ImageContentBox>
  );
};

const formGroups = (allBoxes) => {
  const result = [];
  const contentStyle = {
    marginBottom: '0px',
  };
  for(let i = 0; i < allBoxes.length; i += 3) {
    const subset = allBoxes.slice(i, i + 3);
    result.push(<MainContent key={i} style={contentStyle}>{subset}</MainContent>);
  }

  return result;
};

const MainSection = (props) => {

  const titleStyle = {
    fontSize: 40,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 16,
    fontFamily: "Crimson Text",
    color: colors['baby-blue'],
  };

  const boxStyle = {
    fontSize: '22px',
    borderColor: colors['light-border'],
    textAlign: 'center',
    backgroundColor: colors['baby-blue'],
  };

  if(!props.text) {
    return (
      <h3>Loading</h3>
    );
  }

  const superpowerBoxes = props.text.skills.map((skill) => {
    const { text, url } = skill;
    return getBox({text, url});
  });

  const technologyBoxes = props.text.technologies.map((tech) => {
    const { text, url } = tech;
    return getBox({text, url});
  });

  const techGroup = formGroups(technologyBoxes);

  return (
    <div>
    <div id="mainContainer">
      <div style={titleStyle}>
        {'Superpowers'}
      </div>
      <MainContent>
        {superpowerBoxes}
      </MainContent>
      <div style={titleStyle}>
        {'My Projects'}
      </div>
      <ProjectsSection projectsData={props.projectsData} />
      <div style={titleStyle}>
        {'Technologies'}
      </div>
      <div>
        {techGroup}
      </div>
    </div>
    </div>
  );
};

export default MainSection;
