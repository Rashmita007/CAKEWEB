import React from 'react';
import './FeaturedSections.css';
import { Link } from 'react-router-dom';

function FeaturedSections() {
  return (
    <section className="featured-sections">
      <div className="feature">
        <h2>Scrumptious Cakes to Make Your Day More Special</h2>
      </div>
      <div className="highlights">
        <div>Delivered with in 1 hour</div>
        <div>Made for luxury</div>
        <div>Hand-crafted</div>
        <div>No artificial flavouring</div>
      </div>
    </section>
  );
}

export default FeaturedSections;
