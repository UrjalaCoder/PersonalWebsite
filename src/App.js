import React from "react";

class Overlay extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div style={style}>
        <canvas ref={this.canvasRef} style={canvasStyle}></canvas>
        <div style={textStyle}>{text || "undefined"}</div>
      </div>
    );
  }

}

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Overlay text={'Welcome, traveler!'}/>
      </div>
    );
  }
}

export default App;
