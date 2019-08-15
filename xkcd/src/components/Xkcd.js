import React from 'react';

const Xkcd = props => {
  return (
    <div className='xkcd'>
      <h4>{props.xkcd.title}</h4>
      <img src={props.xkcd.img} alt={props.xkcd.alt} />
    </div>
  );
};

export default Xkcd;