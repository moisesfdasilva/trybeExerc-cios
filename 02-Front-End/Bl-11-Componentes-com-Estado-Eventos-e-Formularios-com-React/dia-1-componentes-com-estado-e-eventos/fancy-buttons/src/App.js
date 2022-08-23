import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    buttonA: 0,
    buttonB: 0,
    buttonC: 0,
  };

  handleChange = (event) => {
    // const result = `Clicou no ${event.target.innerText}`;
    // console.log(result);
    const { target } = event;
    const { name } = target;
    this.setState((previousState, _props) => ({
      [name]: previousState[name] + 1,
    }));
  };

  render() {
    const { buttonA, buttonB, buttonC } = this.state;
    return (
      <div className="App">
        <br/><br/><br/><br/>
        <br/><br/><br/><br/>
        {/* <input type="button" value="BOTÃO A" onclick={ handleChange }/> */}
        <button name="buttonA" type="button" onClick={ this.handleChange }>{ buttonA }</button>
        <button name="buttonB" type="button" onClick={ this.handleChange }>{ buttonB }</button>
        <button name="buttonC" type="button" onClick={ this.handleChange }>{ buttonC }</button>
      </div>
    );
  }
}

export default App;
