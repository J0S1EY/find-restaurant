
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RestaurantList from './Components/RestaurantList'
import RestaurantView from './Components/RestaurantView'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="restaurants">
      <header className='head'>
        <Header />
      </header>

      <div>

        <Routes>
          <Route path='/' element={<RestaurantList />} /> {/*path for restaurent list*/}
          <Route path='/ViewRestaurant/:id' element={<RestaurantView />} />
        </Routes>
      </div>



      <footer>
        <Footer />
      </footer>



    </div>
  );
}

export default App;
