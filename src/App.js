import React, { Component } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';
import Modal from './components/Modal';
import './App.css'

class App extends Component {

  state={
    showModal: false
  }

  modalHandler = (e) => {
    e.preventDefault() //This is to prevent the reload of the console
    console.log("I work")
    this.setState({
      // showModal: true    this what we used first
      showModal: !this.state.showModal // but this one is cooler, because it change the state to opposite (switches tru and false)
    })
  }

  render() {
    return (
      <div className='App'>
        <Form 
          modalHandler = {this.modalHandler}
        />
        <Preview />
        {this.state.showModal && <Modal 
          click = {this.modalHandler}
        />} {/* if showModal is true than Modal will be shown */}
      </div>
    );
  }
}

export default App;
