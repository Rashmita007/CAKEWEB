import React from 'react';
import { Link } from 'react-router-dom';
import './CakeCard.css';

function CakeCard({ cake }) {
  return (
    <div className="cake-card">
      <Link to={`/categories/${cake.id}`}>
        <img src={cake.image} alt={cake.name} />
        <h3>{cake.name}</h3>
      </Link>
    </div>
  );
}

export default CakeCard;
