import React from 'react';
import './Form.css';

const Form = (props) => {
  return (
    <form>
      <div className='name'>
        <label>Name</label>
        <input type="text" name="name" placeholder="Pavel" onChange={props.changeHandler}/>
      </div>
      <div className='lastName'>
        <label>Last name</label>
        <input type="text" name="lastname" placeholder="Kliukin" onChange={props.changeHandler}/>
      </div>
      {/* <div className='phone'>
        <label>Phone</label>
        <input type="number" onChange={props.numberHandler}/>
      </div> */}
      <div className='role'>
        <label>To</label>
        <select name="greeting" onChange={props.changeHandler}>
          <option value="My dear friend">my dear friend</option>
          <option value="My love of my life">my love of my life</option>
          <option value="My beloved teacher">my beloved teacher</option>
        </select>
      </div>
      <div className='message'>
        <label>Message</label>
        <textarea name="message" onChange={props.changeHandler}></textarea>
      </div>
      <button onClick={props.modalHandler}>SEND</button>
    </form>
  );
};

export default Form;