import {Route, Switch,Redirect} from 'react-router-dom'
import MainHeader from './components/MainHeader';
import ProductDeatil from './pages/ProductDetail';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
        <MainHeader/>
      <main>
      <Switch>
        <Route path="/" excat> 
          <Redirect to="/welcome"/>
        </Route>
      <Route  path="/welcome">
        <Welcome/>
      </Route> 
      <Route path="/products" exact><Products/></Route>
      <Route path="/products/:productId"><ProductDeatil/> </Route>
      </Switch> 
       </main>
    </div>
  );
}

export default App;