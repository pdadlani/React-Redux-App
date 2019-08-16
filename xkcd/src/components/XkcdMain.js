import React, {useState} from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

import Xkcd from './Xkcd.js';
import './xkcd.css';

const XkcdMain = props => {
  const [random, setRandom] = useState('');
  // const [prev, setPrev] = useState('');
  // const [next, setNext] = useState('');


  const randomHelper = () => {
    const queryNumber = Math.floor(Math.random() * (2100 - 1) + 1);
    console.log(queryNumber);
    setRandom(queryNumber);
    // setPrev(queryNumber - 1);
    // setNext(queryNumber + 1)
    props.getData(random);
  }

  return (
    <>
      <div className = 'xkcdMain'>
        <div className='xkcdMain-nav'>
          <div className='link'>Archive</div>
          <div className='link'>What If?</div>
          <div className='link'>Blag</div>
          <div className='link'>How To</div>
          <div className='link'>Store</div>
          <div className='link'>About</div>
          <div className='link'>Feed Email</div>
        </div>
        <div className='xkcdMain-headers'>
          <h1>xkcd</h1>
          <h2>A webcomic of romance, sarcasm, math, and language.</h2>

        </div>
      </div>
      <div className='xkcdMain-xkcd'>
        <button onClick={() => props.getData(setRandom(''))}>
          {props.isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
          ) : (
              'Today'
            )}
        </button>
        <Xkcd xkcd={props.xkcd} />
        {/* <button onClick={() => props.getData(prev)}>❮ Prev</button> */}

        <button onClick={randomHelper}>Random</button>
        {/* <button onClick={() => props.getData(next)}>Next ❯</button> */}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    xkcd: state.xkcd
  };
};

export default connect(mapStateToProps, { getData })(XkcdMain);