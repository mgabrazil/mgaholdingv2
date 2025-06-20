import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';
import Header from './components/Header';

import './App.css';
import './styles/mediaQuery-home.css';
import './styles/mediaQuery-header.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        <RoutesApp/>
      </BrowserRouter>
    </div>
  );
}

export default App;
