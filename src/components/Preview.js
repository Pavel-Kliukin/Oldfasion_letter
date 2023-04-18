import React from 'react';
import './Preview.css'

const Preview = (props) => {
  return (
    <div className='preview'>
      <div>
        <h1>{props.greeting}</h1>
        <div className='message'>{props.message}</div>
      </div>
      <div className='scriptum'>Sincerely yours, {props.name} {props.lastname}</div>
    </div>
  );
};

export default Preview;