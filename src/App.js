import React from "react";
import MainSection from "sections/MainSection";
import LandingPage from "sections/LandingPage";

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <LandingPage />
        <MainSection />
      </div>
    );
  }
}

export default App;
