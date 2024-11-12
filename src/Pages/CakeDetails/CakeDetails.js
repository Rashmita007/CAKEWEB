import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../Components/Cartcontext/Cartcontext';
import '../CakeDetails/CakeDetails.css';

const cakeData = [
  {
    id: '1',
    name: "Chocolate Truffle",
    description: "Indulge in pure chocolate bliss! Our Chocolate Truffle Cake is a rich, decadent treat made with layers of velvety chocolate mousse and smooth, dark chocolate ganache. It's the ultimate chocolate lover's dream—decadent, creamy, and utterly irresistible!",
    prices: { '300g': 500, '1/2 kg': 1000, '1 kg': 1500 },
    image: '/Images/Chocolate.png',
  },
  {
    id: '2',
    name: "Red Velvet",
    description: "Our Red Velvet Cake is a rich, moist, and velvety treat, made with a hint of cocoa and a tangy cream cheese frosting. It’s the perfect balance of sweet and tangy—just the way you like it!",
    prices: { '300g': 400, '1/2 kg': 800, '1 kg': 1200 },
    image: '/Images/red velvet.png',
  },
  {
    id: '3',
    name: "Lemon Cake",
    description: "A refreshing burst of citrus goodness! Our Lemon Cake is light, fluffy, and packed with vibrant lemon flavor. Topped with a smooth, tangy lemon glaze, it’s the perfect way to brighten up any day!",
    prices: { '300g': 600, '1/2 kg': 875, '1 kg': 1399 },
    image: '/Images/Lemon.png',
  },
  {
    id: '5',
    name: "Fruit Cake",
    description: "Packed with nature’s sweetest gifts! Our Fruit Cake is a delightful blend of dried fruits, nuts, and aromatic spices, all wrapped in a soft, moist sponge. It’s the perfect treat for any occasion, bursting with wholesome goodness!",
    prices: { '300g': 200, '1/2 kg': 550, '1 kg': 925 },
    image: '/Images/Fruit.png',
  },

];

function CakeDetails() {
  const { cakeId } = useParams();
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState('300g');
  const [quantity, setQuantity] = useState(1);

  const cake = cakeData.find(cake => cake.id === cakeId);

  if (!cake) return <p>Oops! Looks like our Cake is on a little vacation right now... but don’t worry, It’ll be back before you know it!</p>;

  
  const price = cake.prices[selectedWeight];

  
  const handleAddToCart = () => {
    addToCart({ ...cake, selectedWeight, quantity, price });
    alert(`${cake.name} added to cart!`)
  };

  return (
    <section className="cake-details">
      <div className="cake-image">
        <img src={cake.image} alt={cake.name} />
      </div>
      <div className="info">
        <h2>{cake.name}</h2>
        <p>{cake.description}</p>
        <p className="price">MRP: ₹{price} <span>(Inclusive of taxes)</span></p>

        <div className="weight-selector">
          <h4>Weight</h4>
          {Object.keys(cake.prices).map(weight => (
            <button 
              key={weight} 
              className={selectedWeight === weight ? 'selected' : ''}
              onClick={() => setSelectedWeight(weight)}
            >
              {weight}
            </button>
          ))}
        </div>

        <div className="quantity-selector">
          <h4>Quantity:</h4>
          <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </section>
  );
}

export default CakeDetails;
