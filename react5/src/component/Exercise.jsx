import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import EX1 from "./ex/EX1";
import EX2 from "./ex/EX2";
import EX3 from "./ex/EX3";
import EX4 from "./ex/EX4";

function Exercise(props) {
  const [viewState1, setViewState1] = useState(true);
  const [viewState2, setViewState2] = useState(false);
  const [viewState3, setViewState3] = useState(false);
  const [viewState4, setViewState4] = useState(false);

  const btn1Click = e => {
    setViewState1(true);
    setViewState2(false);
    setViewState3(false);
    setViewState4(false);
  }

  const btn2Click = e => {
    setViewState1(false);
    setViewState2(true);
    setViewState3(false);
    setViewState4(false);
  }

  const btn3Click = e => {
    setViewState1(false);
    setViewState2(false);
    setViewState3(true);
    setViewState4(false);
  }

  const btn4Click = e => {
    setViewState1(false);
    setViewState2(false);
    setViewState3(false);
    setViewState4(true);
  }

  let view = <EX1 />

  if (viewState1 == true) {
    view = <EX1 />
  }
  else if (viewState2 == true) {
    view = <EX2 />
  }
  else if (viewState3) {
    view = <EX3 />
  }
  else if (viewState4) {
    view = <EX4 />
  }

  return (
    <div className={'mt-3'}>
      <div className={'container mb-4'}>
        <div className={'btn-group'}>
          <button type={'button'} className={'btn btn-primary'} onClick={btn1Click}>첫번째 문제</button>
          <Button type={'button'} variant={'success'} onClick={btn2Click}>두번째 문제</Button>
          <Button type={'button'} variant={'info'} onClick={btn3Click}>세번째 문제</Button>
          <Button type={'button'} variant={'warning'} onClick={btn4Click}>네번째 문제</Button>
        </div>
      </div>
      <hr/>
      <div>
        {view}
      </div>
    </div>
  );
}

export default Exercise;









