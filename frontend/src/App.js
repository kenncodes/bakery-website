import './App.css';
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'

function App() {
  return (
    <div className="App">
      <Topbar message="We are closed for Easter"/>
      <Navbar bakeryName="My Awesome Bakery" />
    </div>
  );
}

export default App;
