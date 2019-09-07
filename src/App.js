import React from "react";
import MainSection from "sections/MainSection";
import LandingPage from "sections/LandingPage";
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
    })
  }


  render(){
    const { aboutText } = this.state;

    const gradientStyle = {
      'background': `linear-gradient(to bottom, ${colors['darker-background']}, #4d515c)`,
    };

    return(
      <div>
        <LandingPage />
        <div style={gradientStyle}>
          <AboutSection text={aboutText} />
          <MainSection />
        </div>
      </div>
    );
  }
}

export default App;
