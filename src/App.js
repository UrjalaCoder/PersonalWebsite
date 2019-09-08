import React from "react";
import MainSection from "sections/MainSection";
import Titlebar from "sections/Titlebar";
import AboutSection from "sections/AboutSection";
import Footer from "sections/Footer";
import getText from "./utils/getServerTexts";
import getRepos from "./utils/getRepos";
import colors from "./colors";

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      aboutText: undefined,
      landingText: undefined,
      mainText: undefined,
      repoData: undefined,
      projectsData: undefined
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

    getRepos().then((data) => {
      console.log(data);
      this.setState({
        projectsData: data,
      });
    });
  }


  render(){
    const { aboutText, mainText, projectsData } = this.state;

    const gradientStyle = {
      'background': `linear-gradient(to bottom, ${colors['darker-background']}, #4d515c)`,
    };

    return(
      <div>
        <Titlebar />
        <div style={gradientStyle}>
          <AboutSection text={aboutText ? aboutText.about : "Loading"} />
          <MainSection text={mainText} projectsData={projectsData} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
