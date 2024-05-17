import logo from './logo.svg';
import ColorCodeGame from './ColorCodeGame';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Guess the Color Code
        </p>
      </header>
      <ColorCodeGame />
      <p>
      </p>
    </div>
  );
}

export default App;
