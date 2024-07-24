import logo from "./fullstack.png";
import './App.css';

import CartaPresentacion from './components/CartaPresentacion';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <img src={logo} width="350px" alt='logo'/>
        <CartaPresentacion />
        
      </header>
    </div>
  );
}

export default App;
