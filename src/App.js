import React from "react";
import MainSection from "sections/MainSection";
import Titlebar from "sections/Titlebar";
import AboutSection from "sections/AboutSection";
import getText from "./utils/getServerTexts";
import colors from "./colors";

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      aboutText: undefined,
      landingText: undefined,
      mainText: undefined,
    };
  }

  componentDidMount() {
    getText("about").then((data) => {
      this.setState({
        aboutText: data,
      });
    });

    getText("mainText").then((data) => {
      this.setState({
        mainText: data,
      });
    });

  }


  render(){
    const { aboutText, mainText } = this.state;

    const gradientStyle = {
      'background': `linear-gradient(to bottom, ${colors['darker-background']}, #4d515c)`,
    };

    return(
      <div>
        <Titlebar />
        <div style={gradientStyle}>
          <AboutSection text={aboutText ? aboutText.about : "Loading"} />
          <MainSection text={mainText}/>
        </div>
      </div>
    );
  }
}

export default App;
