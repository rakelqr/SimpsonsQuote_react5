import React, { Component } from 'react'
import './App.css';
import GenerateCharacter from './GenerateCharacter';
import DisplayCharacter from './DisplayCharacter';

const sampleSimpsons = {
  "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
  "character": "Nelson Muntz",
  "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  "characterDirection" : "Left"
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsonsCharacter: sampleSimpsons,
    }
  }

  getCharacter() {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.json())
      .then(data => {
        this.setState({
          simpsonsCharacter: data[0],
        })
      })
  }

  render() {
    return (
      <div>
        <GenerateCharacter  selectCharacter={() =>  this.getCharacter()}  />
        <DisplayCharacter character={this.state.simpsonsCharacter}/>
        
      </div>
    )}

}
export default App;