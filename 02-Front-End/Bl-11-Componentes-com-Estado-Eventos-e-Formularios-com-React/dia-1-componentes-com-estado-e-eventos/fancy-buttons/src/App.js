import React from 'react';
import './App.css';

class App extends React.Component {
  handleChange = (event) => {
    const result = `Clicou no ${event.target.innerText}`;
    console.log(result);
  };

  render() {
    return (
      <div className="App">
        <br/><br/><br/><br/>
        <br/><br/><br/><br/>
        {/* <input type="button" value="BOTÃO A" onclick={ handleChange }/> */}
        <button onClick={ this.handleChange }>BOTÃO A</button>
        <button onClick={ this.handleChange }>BOTÃO B</button>
        <button onClick={ this.handleChange }>BOTÃO C</button>
      </div>
    );
  }
}

export default App;
