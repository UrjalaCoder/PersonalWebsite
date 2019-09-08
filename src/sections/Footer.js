import React from "react";
import colors from "../colors";

const Footer = (props) => {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: `#FFFFFF`,
    borderTop: `5px solid ${colors['nickel']}`,
    borderRight: `5px solid ${colors['nickel']}`,
    borderLeft: `5px solid ${colors['nickel']}`,
    borderRadius: '0px 0px 5px 5px',
    justifyContent: 'center',
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: '20px',
    padding: '10px 50px',
    paddingBottom: '10px',
    borderBottom: '2px solid'
  };

  return (
      <div style={containerStyle}>
        <div style={titleStyle}>
          &copy; UrjalaCoder 2019
        </div>
      </div>
  );
};
export default Footer;
