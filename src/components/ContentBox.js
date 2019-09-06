import React from 'react';

const ContentBox = (props) => {

  const style = props.style || {};
  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '15px',
    border: '5px solid #000000',
    margin: '10px',
    marginLeft: '30px',
    marginRight: '30px',
    flex: '1 1 0',
    justifyContent: 'center',
    alignItems: 'center',
    ...style,
  };

  return (
    <div style={boxStyle}>
      {props.children}
    </div>
  );
};

const ImageContentBox = (props) => {
  const style = props.style || {};
  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '15px',
    border: '5px solid #000000',
    margin: '10px',
    marginLeft: '30px',
    marginRight: '30px',
    flex: '1 1 0',
    justifyContent: 'center',
    alignItems: 'center',
    ...style,
  };

  const secondaryImgStyle = props.imgStyle || {};
  const imageStyle = {
    margin: '10px',
    ...secondaryImgStyle,
  };

  const contentStyle = {
    marginTop: '40px',
    marginBottom: '40px',
    ...style,
  };

  const url = props.url || "static/images/react.png"
  const width = props.width || 100;
  const height = props.height || 100;

  return (
    <div style={boxStyle}>
      <img style={imageStyle} src={url} width={width} height={height}></img>
      <div style={contentStyle}>
        {props.children}
      </div>
    </div>
  );

};

export {ImageContentBox, ContentBox};
