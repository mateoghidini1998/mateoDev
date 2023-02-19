import './App.css';
import Main from './pages/Main';
import Navbar from './organisms/Navbar';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
