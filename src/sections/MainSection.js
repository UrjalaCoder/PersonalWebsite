import React from "react";
import getLorem from "utils/getLorem";
import {ContentBox, ImageContentBox} from "../components/ContentBox";
import MainContent from "../components/MainContent";

const colors = {
  'nickel': '#f2f4ff',
  'baby-blue': '#96c5f7',
};

const MainSection = (props) => {

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flexBasis: '100%',
    marginLeft: '60px',
    marginRight: '60px',
  };

  const titleStyle = {
    fontSize: 40,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 16,
    fontFamily: "Crimson Text",
  };

  return (
    <div style={{
      backgroundColor: colors.nickel,
    }}>
    <div style={sectionStyle}>
      <div style={titleStyle}>
        {props.text || 'My superpowers'}
      </div>
      <MainContent style={{
        backgroundColor: colors.nickel,
      }}>

        <ImageContentBox url={'/static/images/infinite-mathematical-symbol.png'} width={100} height={110} style={{
          fontSize: '22px',
          borderColor: colors['baby-blue'],
          paddingTop: '0px',
        }}>
          {"Superb mathematical and analytical skills."}
        </ImageContentBox>

        <ImageContentBox
          url={'/static/images/users.png'}
          width={100}
          height={110}
          style={{
            fontSize: '22px',
            borderColor: colors['baby-blue'],
            textAlign: 'center',
          }}
        >
          {"Good interpersonal skills. I can get along great with all kinds of people."}
        </ImageContentBox>
        <ImageContentBox
          url={'/static/images/innovation.png'}
          width={100}
          height={110}
          style={{
            fontSize: '22px',
            borderColor: colors['baby-blue'],
            textAlign: 'center',
          }}
        >
        {"I can create innovative solutions to hard engineering problems."}
        </ImageContentBox>
      </MainContent>
      <div style={titleStyle}>
        {'Technologies'}
      </div>
      <div>
        <MainContent style={{
          marginBottom: 0,
        }}>
          <ImageContentBox url={'/static/images/javascript.jpg'} width={100} height={100}>
            {"Modern javascript with ES6 features."}
          </ImageContentBox>
          <ImageContentBox>
            {"Hello, world!"}
          </ImageContentBox>
        </MainContent>
      </div>
    </div>
    </div>
  );
};

export default MainSection;
