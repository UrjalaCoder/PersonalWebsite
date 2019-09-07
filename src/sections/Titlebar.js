import React from "react";
import Overlay from "../components/Overlay";
import colors from "../colors";

const LandingPage = (props) => {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: `#FFFFFF`,
    borderTop: `5px solid ${colors['nickel']}`,
    borderRight: `5px solid ${colors['nickel']}`,
    borderLeft: `5px solid ${colors['nickel']}`,
    borderRadius: '5px 5px 0px 0px',
    justifyContent: 'center',
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: '40px',
    padding: '30px 50px',
    paddingBottom: '20px',
    borderBottom: '2px solid'
  };

  return (
      <div style={containerStyle}>
        <div style={titleStyle}>
          {"Welcome"}
        </div>
      </div>
  );
};
export default LandingPage;
