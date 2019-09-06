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

        <ImageContentBox url={'/static/images/infinity.png'} width={100} height={110} style={{
          fontSize: '22px',
          borderColor: colors['baby-blue'],
          paddingTop: '0px',
        }}>
          {"Superb mathematical and analytical skills."}
        </ImageContentBox>

        <ImageContentBox
          url={'/static/images/users.png'}
          width={100}
          height={100}
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
          height={100}
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
        {'Technologies that I wield'}
      </div>
      <div>
        <MainContent style={{
          marginBottom: 0,
        }}>
          <ImageContentBox
            url={'/static/images/javascript.png'}
            width={100}
            height={100}
            style={{
              fontSize: '22px',
              borderColor: colors['baby-blue'],
              textAlign: 'center',
            }}
          >
          {"Modern JavaScript width ES6 features."}
          </ImageContentBox>
          <ImageContentBox
            url={'/static/images/react.png'}
            width={100}
            height={100}
            style={{
              fontSize: '22px',
              borderColor: colors['baby-blue'],
              textAlign: 'center',
            }}
          >
          {"ReactJS, Redux, Redux-Saga and also React-Native."}
          </ImageContentBox>
          <ImageContentBox
          url={'/static/images/nodejs.svg'}
          width={100}
          height={100}
          style={{
            fontSize: '22px',
            borderColor: colors['baby-blue'],
            textAlign: 'center',
          }}
          >
          {"I can program server-side using NodeJS. For instance this website is running on an ExpressJS server using NodeJS."}
          </ImageContentBox>
        </MainContent>
        <MainContent>
          <ImageContentBox
            url={'/static/images/scala.png'}
            width={100}
            height={100}
            style={{
              fontSize: '22px',
              borderColor: colors['baby-blue'],
              textAlign: 'center',
            }}
          >
          {"I can also program in Scala and Java"}
          </ImageContentBox>
          <ImageContentBox
            url={'/static/images/python.png'}
            width={100}
            height={100}
            style={{
              fontSize: '22px',
              borderColor: colors['baby-blue'],
              textAlign: 'center',
            }}
          >
          {"I have excellent Python programming skills. For instance, I have made a Neural Network on my own using Python 3.7 and Numpy."}
          </ImageContentBox>
          <ImageContentBox
          url={'/static/images/c.png'}
          width={100}
          height={100}
          style={{
            fontSize: '22px',
            borderColor: colors['baby-blue'],
            textAlign: 'center',
          }}
          >
          {"Native C-code with C99 standards. Also C++."}
          </ImageContentBox>
        </MainContent>
      </div>
    </div>
    </div>
  );
};

export default MainSection;
