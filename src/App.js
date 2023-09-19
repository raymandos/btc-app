
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import CoinPage from './pages/CoinPage';

function App() {

  return (
    <BrowserRouter>
    <div className="appStyle">
      <Header />
      <Route path="/" component={Homepage} exact />
      <Route path="/coins/:id" component={CoinPage}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
