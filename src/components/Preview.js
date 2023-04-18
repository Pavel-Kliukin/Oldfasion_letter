import React from 'react';
import './Preview.css'

const Preview = (props) => {
  return (
    <div className='preview'>
      <div className='line'></div>
      <div className='prev' id='namePrev'>Name: </div>
      <div className='line'></div>
      <div className='prev' id='lastNamePrev'>Last Name:</div>
      <div className='line'></div>
      <div className='prev' id='phonePrev'>Phone: </div>
      <div className='line'></div>
      <div className='prev' id='rolePrev'>Role:</div>
      <div className='line'></div>
      <div className='prev' id='messagePrev'>Message: </div>
      <div className='line'></div>
    </div>
  );
};

export default Preview;