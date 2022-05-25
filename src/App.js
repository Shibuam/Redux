import './App.css';

import {BrowserRouter as Router, Route, Routes}from 'react-router-dom'
import Header from './containers/headers';
import ProductComponent from './containers/productComponent';
import ProductListing from './containers/productListing';
import ProductDetails from './containers/productDetais';

function App() {
  return (
    <div className="App">
      <Header/>
 
      <Router>
        <Routes>
          <Route path='/' exac element={<ProductListing/>}/>
        </Routes>
      </Router>

       
      
    
    </div>
  );
}

export default App;
