import React from 'react';
import {ContentBox, ImageContentBox} from "../components/ContentBox";
import MainContent from "../components/MainContent";
import colors from "../colors";

const AboutSection = (props) => {

  const titleStyle = {
    fontSize: 40,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 16,
    fontFamily: "Crimson Text",
    color: colors['baby-blue'],
  };

  const contentStyle = {
    marginLeft: '90px',
    marginRight: '90px',
    fontSize: '22px',
    backgroundColor: colors['baby-blue'],
    alignItems: 'start',
    paddingLeft: '50px',
    paddingRight: '20px',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
  };
  return (
    <MainContent classes="flexColumn">
      <div style={titleStyle}>
        {"About me"}
      </div>
      <ContentBox style={contentStyle}>
        <div style={{
          flexGrow: '2',
        }}>
          <p
          style={{
            'whiteSpace': 'pre-wrap'
          }}
          >
            {props.text || "Loading"}
          </p>
        </div>
        <div style={{
          flexGrow: '1',
          height: 'parent',
          marginTop: '10px',
        }}>
          <img
            src={"/static/images/own.jpg"}
            width={180}
          >
          </img>
        </div>
      </ContentBox>
    </MainContent>
  );
};

export default AboutSection;
