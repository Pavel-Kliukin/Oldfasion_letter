import React from 'react';
import './Form.css';

const Form = (props) => {
  return (
    <form>
      <div className='name'>
        <label>Name</label>
        <input type="text" placeholder="Name"/>
      </div>
      <div className='lastName'>
        <label>Last name</label>
        <input type="text" placeholder="Last name" />
      </div>
      <div className='phone'>
        <label>Phone</label>
        <input type="number"/>
      </div>
      <div className='role'>
        <label>To</label>
        <select>
          <option value="friend">my dear friend</option>
          <option value="love">love of my life</option>
          <option value="teacher">my beloved teacher</option>
        </select>
      </div>
      <div className='message'>
        <label>Message</label>
        <textarea></textarea>
      </div>
      <button onClick={props.modalHandler}>SEND</button>
    </form>
  );
};

export default Form;