import React from "react";
import getLorem from "../utils/getLorem";

const MainContent = (props) => {
  const text = props.text || getLorem();
  const style = props.style || {};

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    flexBasis: '100%',
    justifyContent: 'space-evenly',
    ...style,
  };

  return (
    <div style={containerStyle}>
      {props.children}
    </div>
  );
};

export default MainContent;
