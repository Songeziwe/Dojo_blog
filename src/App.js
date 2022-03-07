import Navbar from './navbar';
import Home from './Home';

// Functional component
// This is the root component of the UI
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
