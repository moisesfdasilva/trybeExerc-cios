import './App.css';

const abc = ['Inglês', 'Corrida', 'Leitura'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    abc.map((element) => (Task(element)))
  );
}

export default App;
