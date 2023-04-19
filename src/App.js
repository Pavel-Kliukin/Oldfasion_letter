import React, { Component } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';
import Modal from './components/Modal';
import './App.css'
// import image from './assets/pen.png'

class App extends Component {

  state={
    greeting: 'My dear friend',
    message: 'I\'m writing to tell you how much I miss you this days.',
    name: 'Pavel',
    lastname: 'Kliukin',
    showModal: false
  }
  
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
      // e.target.name ---> name, lastname, greeting etc. from Form
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
          {/* <img id="penImg" src={image} alt="Parker pen"/> */}
          <h1>Oldfasion letter</h1>
        </header>
        <div className='formAndPreview'>
          <Form 
            changeHandler = {this.changeHandler} // we did changeHandler instead of below:
            // greetingHandler = {this.greetingHandler}
            // nameHandler = {this.nameHandler}
            // lastnameHandler = {this.lastnameHandler}
            // messageHandler = {this.messageHandler}
            modalHandler = {this.modalHandler}
          />
          <Preview 
          {...this.state} // we did {...this.state} instead of below:
            // greeting = {this.state.greeting}
            // message = {this.state.message}
            // name = {this.state.name}
            // lastname = {this.state.lastname}
          />
        </div>
        {this.state.showModal && <Modal 
          {...this.state} // we did {...this.state} instead of below:
          // greeting = {this.state.greeting}
          // message = {this.state.message}
          // name = {this.state.name}
          // lastname = {this.state.lastname}
          click = {this.modalHandler}
        />} {/* if showModal is true than Modal will be shown */}
      </div>
    );
  }
}

export default App;
