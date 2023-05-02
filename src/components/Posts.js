import React from 'react';
import './Posts.css'

const Posts = (props) => {
  return (
    <div className='letters'>
      {props.data.map(
        note => 

        <div className='post' key={note.id}>
          <div>
          <h1>{note.to}</h1>
          <div className='message'>{note.message}</div>
          </div>
          <div className='scriptum'>Sincerely yours, {note.name} {note.lastname}</div>
          {/* <div>from: {note.name} {note.lastname}</div>
          <div>to: {note.to}</div>
          <div>message: {note.message}</div> */}
        </div>
      )}

    </div>
  );
};

export default Posts;