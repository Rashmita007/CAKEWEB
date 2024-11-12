import React from 'react';
import '../AboutUs/AboutUs.css';

const AboutUs = () => {
  const bg = require('../Assets/banner.jpg');
  return (
    <div className="about-us " >
      <header className="header">
        <h2>
          Follow us <span className="highlight">@CakeDelight</span>
        </h2>
      </header>
      <section className="image-grid">
        {[
          { id: 1, src: '/Images/gift1.webp', alt: 'Gift Box 1' },
          { id: 2, src: '/Images/gift2.jpg', alt: 'Gift Box 2' },
          { id: 3, src: '/Images/gift3.webp', alt: 'Gift Box 3' },
          { id: 4, src: '/Images/gift4.jpg', alt: 'Owners with Gift Boxes' },
        ].map((image) => (
          <div key={image.id} className="image-container">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </section>
      <footer className="footer" >
        <h3><i>FROM OUR OWN OVEN TO YOUR HEART ♥</i></h3>
        <p>At Cake Delight, we believe that cakes should not just be delicious but should tell a story, make a statement, and bring people together. Founded in 1997, our cake shop has become a local favorite for handcrafted, bespoke cakes that turn every celebration into a sweet, unforgettable experience.</p>

        <h1>Our Story</h1>
        <p>It all started with a simple love for baking when in 1997 Cake Delight was started with one goal in mind – to create cakes that not only taste amazing but are works of art. What began as a small home-based bakery quickly grew into the beloved shop you see today, where every cake is made with the utmost care, attention to detail, and a sprinkle of passion.

          From the very beginning, we’ve been committed to using only the finest ingredients to create our cakes. Each cake is crafted with love, creativity, and a deep understanding of flavor, texture, and design. Whether it's a birthday, wedding, or any special occasion, our goal is to make every event sweeter and more memorable.
        </p>
        <h1>Wondering What Makes Us So Special???</h1>
        <p><b>1. Handcrafted & Custom Cakes:</b>
              Every cake we bake is handmade with love and attention to detail. We specialize in custom cakes for weddings, birthdays, corporate events, and everything in between. Whether you're looking for an intricate fondant design or a simple, elegant cake, we’ll work closely with you to create the cake of your dreams.

        </p>
        <p><b>2. Premium Ingredients:</b>
              We believe that great cakes start with great ingredients. That’s why we source only the finest, freshest ingredients for our cakes. From organic flour and free-range eggs to locally sourced fruits and natural flavorings, we ensure that each slice is as delicious as it is beautiful.

        </p>
        <p><b>3. Creativity in Every Bite:</b>
              Our team of talented bakers and cake decorators is passionate about turning ideas into edible works of art. Whether you want a whimsical birthday cake for a child or a sophisticated multi-tiered wedding cake, we thrive on turning your vision into reality. Let your creativity soar, and we’ll make it happen!

        </p>
        <p><b>4. Customer Satisfaction:</b>
              Your satisfaction is our top priority. We pride ourselves on delivering not just a cake, but an experience. We work closely with our clients to ensure that every cake meets their expectations and exceeds them. After all, we’re not just making cakes – we’re making memories!
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
