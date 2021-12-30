import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "sajid",
    age:"18"
  }
  var style = {
    color: 'red',
    backgroundColor: "Orange"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={style}>
        {person.name} <code> {person.age}</code> and save to reload.
        </p>
        <p>My First Paragraph {3*3}</p>
      </header>
    </div>
  );
}

export default App;
