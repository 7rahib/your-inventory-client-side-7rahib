import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllInventories from './Pages/AllInventories/AllInventories';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import InventoryDetail from './Pages/InventoryDetail/InventoryDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory/:_id' element={<InventoryDetail></InventoryDetail>}></Route>
        <Route path='/inventory' element={<AllInventories></AllInventories>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
