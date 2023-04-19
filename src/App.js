import React, { Component } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';
import Modal from './components/Modal';
import './App.css'

class App extends Component {

  state={
    greeting: 'My dear friend',
    message: 'I\'m writing to tell you how much I miss you this days.',
    name: 'Pavel',
    lastname: 'Kliukin',
    showModal: false
  }

  
  greetingHandler = (e) => {
    this.setState({
      greeting: e.target.value
    })
  }

  nameHandler = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  
  lastnameHandler = (e) => {
    this.setState({
      lastname: e.target.value
    })
  }
  
  messageHandler = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  modalHandler = (e) => {
    e.preventDefault() //This is to prevent the reload of the console
    this.setState({
      // showModal: true    this what we used first
      showModal: !this.state.showModal // but this one is cooler, because it change the state to opposite (switches tru and false)
    })
  }

  render() {
    return (
      <div className='App'>
        <header>
          <h1>Oldfasion letter</h1>
          {/* <img id="penImg" src="../src/assets/pen.png" alt="Parker pen"/> */}
        </header>
        <div className='formAndPreview'>
          <Form 
            greetingHandler = {this.greetingHandler}
            nameHandler = {this.nameHandler}
            lastnameHandler = {this.lastnameHandler}
            messageHandler = {this.messageHandler}
            modalHandler = {this.modalHandler}
          />
          <Preview 
            greeting = {this.state.greeting}
            message = {this.state.message}
            name = {this.state.name}
            lastname = {this.state.lastname}
          />
        </div>
        {this.state.showModal && <Modal 
          greeting = {this.state.greeting}
          message = {this.state.message}
          name = {this.state.name}
          lastname = {this.state.lastname}
          click = {this.modalHandler}
        />} {/* if showModal is true than Modal will be shown */}
      </div>
    );
  }
}

export default App;
