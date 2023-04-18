import React from 'react';
import './Form.css';

const Form = (props) => {
  return (
    <div className='notesForm'>
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
          <label>Role</label>
          <select>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className='message'>
          <label>Message</label>
          <textarea></textarea>
        </div>
        <button onClick={props.modalHandler}>SEND</button>
      </form>
    </div>
  );
};

export default Form;