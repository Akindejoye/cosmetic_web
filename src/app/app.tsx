"use client"

import React from "react";
import { Provider } from "react-redux";
import { store } from './../redux/store';
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

const App = ({ children }: { children: React.ReactNode}) => {
  
  const [showCart, setShowCart] = useState(false);
  const [searchItem, setSearchItem] = useState('');

  const handleSearch = (e: any) => {
    setSearchItem(e.target.value);
    // console.log(searchItem);
  }

  const handleSearchProduct = (e: any) => {
    e.preventDefault();
    // console.log(searchItem);
  }

  return ( 
    <Provider store={store}>
      <Navbar 
        setShowCart={setShowCart}
        handleSearch={handleSearch}
        searchItem={searchItem}
        handleSearchProduct={handleSearchProduct}
      />
      {showCart && <Cart setShowCart={setShowCart} />}
      {React.Children.map(children, child =>
        React.cloneElement(child as React.ReactElement, {
          handleSearch,
          searchItem,
          handleSearchProduct
        })
      )}
      <Footer />
    </Provider>
   );
}
 
export default App;