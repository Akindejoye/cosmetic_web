"use client"

import { Provider } from "react-redux";
import { store } from './../redux/store';
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Footer from "@/components/Footer";

const App = ({ children }: { children: React.ReactNode}) => {
  
  const [showCart, setShowCart] = useState(false);

  return ( 
    <Provider store={store}>
      <Navbar setShowCart={setShowCart} />
      {children}
      <Footer />
    </Provider>
   );
}
 
export default App;