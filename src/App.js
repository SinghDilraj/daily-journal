import './App.css';
import Header from './Components/Header'
import BlankJournal from './Components/Journal/BlankJournal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className='Journals'>
        <BlankJournal />
        
      </div>
    </div>
  );
}

export default App;
