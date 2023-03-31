import './App.css';
import Home from './components/Home';
import Middle from './components/Middle';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-[#262626]">
      <Navbar/>
      <Home/>
      <Middle/>
    </div>
  );
}

export default App;
