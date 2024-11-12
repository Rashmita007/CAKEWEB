import React from 'react';
import FeaturedCakes from '../FeaturedCakes/FeaturedCake';
import '../Home/Home.css';
import Testimonials from '../Testimonials/Testimonials';
import FeaturedSections from '../FeaturedSections/FeaturedSections';

function Home() {
  const bg = require('../Assets/Bg.png');
  return (
    <div>
      <section className="welcome" style={{ backgroundImage: `url(${bg})` }}>
        <h2>Welcome to Cake Delight!</h2>
        <h1>At Cake Delight, we believe that every celebration deserves a perfect slice of joy. Whether it's a birthday, wedding, anniversary, or just a sweet treat to brighten your day, we craft the finest cakes with love, care, and the highest quality ingredients.</h1>
        <h3><b><i>"FROM OUR OWN OVEN TO YOUR HEART ♥"</i></b></h3>
      </section>
      <FeaturedCakes />
      <FeaturedSections/>
      <Testimonials/>
    </div>
  );
}

export default Home;
