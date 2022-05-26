import './App.css';
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'
import Banner from './components/Banner'
import Pitch from './components/Pitch'
function App() {
  return (
    <div className="App">
      <Topbar message="Call 1(234)-555-6789 to place your order" />
      <Navbar bakeryName="My Awesome Bakery" />
      <Banner />
      <Pitch />
    </div>
  );
}

export default App;
