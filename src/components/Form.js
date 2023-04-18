import React from 'react';
import './Form.css';

const Form = (props) => {
  return (
    <div className='notesForm'>
      <form>
        <div className='name'>
          <label>Name</label>
          <input type="text" placeholder="Name" onChange={props}/>
        </div>
        <div className='lastName'>
          <label>Last name</label>
          <input type="text" placeholder="Last name" onChange={props}/>
        </div>
        <div className='phone'>
          <label>Phone</label>
          <input type="number" onChange={props}/>
        </div>
        <div className='role'>
          <label>Role</label>
          <select onChange={props}>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className='message'>
          <label for="message">Message</label>
          <textarea></textarea>
        </div>
        <button>SEND</button>
      </form>
    </div>
  );
};

export default Form;