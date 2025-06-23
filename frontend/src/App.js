import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';

import './App.css';
import './styles/mediaQuery-header.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        <RoutesApp/>
        
        <ToastContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
