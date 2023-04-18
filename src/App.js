import React, { Component } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';
import Modal from './components/Modal';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='formAndPrev'>
          <Form />
          <Preview />
        </div>
        <div className='modal'>
          <Modal />
        </div>
      </div>
    );
  }
}

export default App;
