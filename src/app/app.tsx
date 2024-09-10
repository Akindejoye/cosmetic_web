"use client"

import { Provider } from "react-redux";
import { store } from './../redux/store';
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

const App = ({ children }: { children: React.ReactNode}) => {
  
  const [showCart, setShowCart] = useState(false);

  return ( 
    <Provider store={store}>
      <Navbar setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      {children}
      <Footer />
    </Provider>
   );
}
 
export default App;