import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {Home} from './pages/Home/Home';
import {Checkout} from './pages/Checkout/Checkout';
import {Header} from './components/Header/Header';

import {ProductsProvider} from './hooks/useProducts';
import {CartProvider} from './hooks/useCart';

import './styles/global.scss'
function App() {
  return (
    <BrowserRouter>
        <CartProvider>
      <ProductsProvider>

        <Header />

        <div className="main">
          <Switch>
            <Route exact path="/">
            <Home />
              </Route>
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </div>


      </ProductsProvider>
        </CartProvider>
    </BrowserRouter>
  );
}

export default App;
