import './App.css';
import Person from  './components/Person';
import Counter from './components/Counter';

function App() {
 
  return (
    <div className="App">
      <Person name={'Monesh'} l={'soni'} age={123}/>
      < Counter />
    </div>
  );
}

export default App;
