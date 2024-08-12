import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import { Fragment } from 'react';
import AddPizza from './AddPizza';
import Customer from './Customer.js';



function App() {

  return (
    <Fragment>


      <Routes>
        <Route path="" element={<Customer />} />
        <Route path="Customer" element={<Customer />} />
        <Route path="AddPizza" element={<AddPizza />} />
      </Routes>
    </Fragment>
  );


}

export default App;
