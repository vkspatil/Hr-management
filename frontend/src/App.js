import AllEmployee from './Component/AllEmployee';
import AddEmployee from './Component/AddEmployee';
import EditEmployee from './Component/EditEmployee';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import Home from './Component/Home';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <style >{`body{background-color:#ffebee}`} </style>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/all" element={<AllEmployee /> } />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
