import React from "react";
const Overlay = (props) => {
  const backgroundUrl = props.url || '/static/images/landingBgWhite.png';
  const containerStyle = {
    backgroundImage: `url(${backgroundUrl})`,
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const additionalStyle = props.style || {};
  const contentStyle = {
    textAlign: 'center',
    ...additionalStyle,
  };

  const {text} = props;
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>{props.children}</div>
    </div>
  );
};

export default Overlay;
