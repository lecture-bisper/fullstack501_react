import React from "react";

function EX1Sub(props) {
  return (
    <div className={'row mb-3'}>
      <div className={'col-sm-4'}>
        <img className={'mw-100'} src={props.data.imgSrc}/>
      </div>
      <div className={'col-sm-8'}>
        <h2 className={'mt-3'}>{props.data.title}</h2>
        <p className={'mt-3'}>{props.data.text}</p>
      </div>
    </div>
  );
}

export default EX1Sub;









