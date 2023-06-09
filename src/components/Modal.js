import React from 'react';
import './Modal.css'

const Modal = (props) => {
  return (
    <div className='overlay'>
      <div className='Modal'>
        <div className='displayBox'>
          <h2>Is it correct data?</h2>
          <div className='display' id='nameDisplay'>Name: {props.name}</div>
          <div className='display' id='lastNameDisplay'>Last Name: {props.lastname}</div>
          {/* <div className='display' id='phoneDisplay'>Phone: </div> */}
          <div className='display' id='roleDisplay'>To: {props.greeting}</div>
          <div className='display' id='messageDisplay'>Message: {props.message}</div>
        </div>
        <div className='buttons'>
          <button name="yes" onClick = {props.click}>Yes, I'm sure</button>
          <button onClick = {props.click}>No, I don't want to send it</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;