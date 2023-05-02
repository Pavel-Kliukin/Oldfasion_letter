import React from 'react';
import './Posts.css'

const Posts = (props) => {
  return (
    <div>
      {props.data.map(
        note => 

        <div className='post' key={note.id}>
          <div>from: {note.name} {note.lastname}</div>
          <div>to: {note.to}</div>
          <div>message: {note.message}</div>
        </div>
      )}

    </div>
  );
};

export default Posts;