import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import MiniCake from './Components/MiniCake/MiniCake';
import CelebrationCake from './Components/CelebrationCake/CelebrationCake'
import Loaves from './Components/Loaves/Loaves';
import Cupcake from './Components/Cupcake/cupcake';
import Slice from './Components/Slice/slice';
import Cookies from './Components/Cookies/cookie';
import Eggless from './Components/Eggless/eggless';
import Vegan from './Components/Vegan/vegan';
import Chocolate from './Components/Chocolate/Chocolate';
import CartPage from './Components/Cart/CartPage';
import AboutUs from './Components/AboutUs/AboutUs';
import Testimonials from './Components/Testimonials/Testimonials';
import CakeDetails from './Pages/CakeDetails/CakeDetails';
import ContactForm from './Components/ContactForm/ContactForm';
import Featuredsection from './Components/FeaturedSections/FeaturedSections';
import Banner from './Components/Banner/Banner';
import Categories from './Components/Category/Category';


import './App.css';

function App() {

  return (
    <Router>
      <Banner/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/categories/:cakeId" element={<CakeDetails />} />
        <Route path="/Components/Category/Category.js" element={<Categories />} />  
        <Route path="/Components/Cart/CartPage.js" element={<CartPage />} />  
        <Route path="/Components/MiniCake/MiniCake.js" element={<MiniCake/>} />  
        <Route path="/Components/CelebrationCake/CelebrationCake.js" element={<CelebrationCake/>} />   
        <Route path="/Components/Loaves/Loaves.js" element={<Loaves/>} />    
        <Route path="/Components/Cupcake/cupcake.js" element={<Cupcake/>} />  
        <Route path="/Components/Slice/slice.js" element={<Slice/>} /> 
        <Route path="/Components/Cookies/cookie.js" element={<Cookies/>} />  
        <Route path="/Components/Eggless/eggless.js" element={<Eggless/>} /> 
        <Route path="/Components/Vegan/vegan.js" element={<Vegan/>} />
        <Route path="/Components/Chocolate/Chocolate.js" element={<Chocolate/>} />
        <Route path="/Components/AboutUs/AboutUs.js" element={<AboutUs />} />  
        <Route path="/Components/ContactForm/ContactForm.js" element={<ContactForm />} />
        <Route path="/Components/FeaturedSections/FeaturedSections.js" element={<Featuredsection />} />
        <Route path="/Components/Testimonials/Testimonials.js" element={<Testimonials />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
