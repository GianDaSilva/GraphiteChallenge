import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Home from './screens/Home';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
    </div>
  );
}

export default App;
