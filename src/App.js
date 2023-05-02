import React, { Component } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';
import Modal from './components/Modal';
import Posts from './components/Posts';
import './App.css';
import axios from 'axios';
// import image from './assets/pen.png'

class App extends Component {

  state={
    greeting: 'My dear friend',
    message: 'I\'m writing to tell you how much I miss you this days.',
    name: 'Pavel',
    lastname: 'Kliukin',
    data: [],
    showModal: false
  }


  componentDidMount() {
    // instead of fetch we use axios:
    axios.get('http://localhost:4001/posts/').then(res => this.setState({data: res.data}))
    // fetch ('http://localhost:4001/posts/').then(res => res.json()).then(res => this.setState({ data: res })
  }
  
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
      // e.target.name ---> name, lastname, greeting etc. from Form
    })
  }

  modalHandler = (e) => {
    e.preventDefault()
    if (e.target.name === 'yes') {
      axios
        .post("http://localhost:4001/posts", {
          name: this.state.name,
          lastname: this.state.lastname,
          to: this.state.greeting,
          message: this.state.message
        }).then((res) => console.log(res)).catch((error) => console.log(error));
    }
    
    axios.get('http://localhost:4001/posts/').then(res => this.setState({
      data: res.data,
      showModal: !this.state.showModal
    }))
  }

  render() {
    return (
      <div className='App'>
        <header>
          {/* <img id="penImg" src={image} alt="Parker pen"/> */}
          <h1>Oldfasioned letters</h1>
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
        <div className='posts'>
          <Posts data={this.state.data}/>
        </div>
        {this.state.showModal && <Modal 
          {...this.state} // we did {...this.state} instead of below:
          // greeting = {this.state.greeting}
          // message = {this.state.message}
          // name = {this.state.name}
          // lastname = {this.state.lastname}
          yes = {this.modalHandler}
          click = {this.modalHandler}
        />} {/* if showModal is true than Modal will be shown */}
      </div>
    );
  }
}

export default App;
