import './App.css';

function App() {
  const handleChange = (event) => {
    const result = `Clicou no ${event.target.innerText}`;
    console.log(result);
  };

  return (
    <div className="App">
      <br/><br/><br/><br/>
      <br/><br/><br/><br/>
      {/* <input type="button" value="BOTÃO A" onclick={ handleChange }/> */}
      <button onClick={ handleChange }>BOTÃO A</button>
      <button onClick={ handleChange }>BOTÃO B</button>
      <button onClick={ handleChange }>BOTÃO C</button>
    </div>
  );
}

export default App;
