import React from 'react';
import EX1Sub from "./EX1Sub";

// https://www.w3schools.com/w3css/tryw3css_examples_album_text.htm

const holidayResort = [
  {
    seq: 1,
    imgSrc: 'https://www.w3schools.com/w3css/img_5terre.jpg',
    title: '5 Terre',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    seq: 2,
    imgSrc: 'https://www.w3schools.com/w3css/img_monterosso.jpg',
    title: 'Monterosso',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    seq: 3,
    imgSrc: 'https://www.w3schools.com/w3css/img_vernazza.jpg',
    title: 'Vernazza',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    seq: 4,
    imgSrc: 'https://www.w3schools.com/w3css/img_manarola.jpg',
    title: 'Manarola',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    seq: 5,
    imgSrc: 'https://www.w3schools.com/w3css/img_corniglia.jpg',
    title: 'Corniglia',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    seq: 6,
    imgSrc: 'https://www.w3schools.com/w3css/img_riomaggiore.jpg',
    title: 'Riomaggiore',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
];

function EX1(props) {
  return (
    <div>
      <div className={'navbar navbar-expand-sm navbar-dark bg-success mb-3 p-2'}>
        <a className={'navbar-brand fs-2 ms-2'}>Summer Holiday</a>
      </div>

      <div className={'container'}>
        {holidayResort.map(item => {
          return <EX1Sub data={item} key={item.seq} />
        })}
      </div>
    </div>
  );
}

export default EX1;









