import React from 'react';
import './Modal.css'

const Modal = (props) => {
  return (
    <div className='Modal'>
      <div className='displayBox'>
        <div className='display' id='nameDisplay'>Name: </div>
        <div className='display' id='lastNameDisplay'>Last Name:</div>
        <div className='display' id='phoneDisplay'>Phone: </div>
        <div className='display' id='roleDisplay'>Role:</div>
        <div className='display' id='messageDisplay'>Message: </div>
      </div>
      <div className='buttons'>
        <button onClick = {props.click}>Yes, I'm sure</button>
        <button onClick = {props.click}>No, I don't want to post it</button>
      </div>
    </div>
  );
};

export default Modal;