import './App.css';
import Main from './pages/Main';
import Navbar from './organisms/Navbar';
import About from './pages/About';
import Work from './pages/Work';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <About/>
      <Work/>
    </div>
  );
}

export default App;
