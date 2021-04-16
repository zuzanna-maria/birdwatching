import blue_tit from './blue_tit.jpg';
import './App.css';
import Input from './inputform.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p><img src={blue_tit} className="App-logo" alt="logo" /></p>
        <h1> Record bird sightings </h1>
          <Input />

      </header>
    </div>
  );
}

export default App;
