import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

import Xkcd from './Xkcd.js';
import './xkcd.css';

const XkcdMain = props => {
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
          <button onClick={props.getData}>
            {props.isLoading ? (
              <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
            ) : (
                'Get xkcd'
              )}
          </button>
        </div>
      </div>
      <Xkcd xkcd={props.xkcd} />
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