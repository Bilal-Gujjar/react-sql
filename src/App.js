import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home';
import Login from './components/auth/login';
import Order from './components/api/order';
import './App.css';

import Signup from './components/auth/signup';


function App() {
  return (
    <div className="App">
   

      <Order/>
      <Signup/>
       <Login/>
       <Home/>
   
       
  
      
    </div>
  );
}

export default App;
