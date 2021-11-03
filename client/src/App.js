import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch, 
  Route
} from "react-router-dom"
import Main from './views/Main';
import ProductDetails from './views/ProductDetails';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/products/">
          < Main />
        </Route>
        <Route path="/products/:id">
          < ProductDetails />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
