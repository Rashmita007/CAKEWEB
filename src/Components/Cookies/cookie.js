import React, { useState } from 'react';
import { useCart } from '../Cartcontext/Cartcontext'; 

const MiniCakesPage = () => {
  const [sortOption, setSortOption] = useState('none');
  const { addToCart } = useCart(); 
  const [showDescription, setShowDescription] = useState({}); 

  const cakes = [
    {
      id: 1,
      name: "Chocolate Chip Cookies",
      image: "/Images/cook1.webp", 
      price: 650,
      selectedWeight:'Box of 4',
      popularity: 4.1,
      description: "Cookie with melt in your mouth dark chocolate chunks",
    },
    {
      id: 2,
      name: "Beetroot Crackers Pouch",
      image: "/Images/vega5.jpg",
      price: 225,
      selectedWeight:'150gm',
      popularity: 4.2,
      description: "These handcrafted baked crackers are made with freshly pureed beetroots along with a hint of spice. Makes a great addition to your cheese platters or with dips for healthy snacking",
    },
    {
      id: 3,
      name: "Sourdough Crackers Pouch",
      image: "/Images/vega6.jpg",
      price: 225,
      selectedWeight:'150gm',
      popularity: 4.1,
      description: "Whole wheat crackers with a natural sourdough starter, spiced with jalapenos. Makes a great addition to your cheese platters or dips for healthy snacking. ",
    },
  ];

  const sortedCakes = [...cakes].sort((a, b) => {
    if (sortOption === 'price') return a.price - b.price;
    if (sortOption === 'popularity') return b.popularity - a.popularity;
    return 0;
  });

  const addToCartHandler = (cake) => {
    addToCart(cake); // Add the cake to the cart
    alert(`${cake.name} added to cart!`);
  };

  const toggleDescription = (id) => {
    setShowDescription((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Cookies And Crackers</h2>
      <p style={styles.sub}><b>The only circles in life you’ll never want to break!</b></p>
      <div style={styles.sortContainer}>
        <label htmlFor="sort" style={styles.sortLabel}></label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          style={styles.sortSelect}
        >
          <option value="none">None</option>
          <option value="price">Price</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
      <div style={styles.grid}>
        {sortedCakes.map((cake) => (
          <div key={cake.id} style={styles.card}>
            <img src={cake.image} alt={cake.name} style={styles.image} />
            <h3 style={styles.cakeName}>{cake.name}</h3>
            <p style={styles.cakeDetails}>Price: ₹{cake.price}</p>
            <p style={styles.cakeDetails}>Popularity: {cake.popularity}★</p>
            <button
              style={styles.button}
              onClick={() => addToCartHandler(cake)}
            >
              Add to Cart
            </button>
            <button
              style={styles.descriptionButton}
              onClick={() => toggleDescription(cake.id)}
            >
              {showDescription[cake.id] ? 'Hide Details' : 'Show Details'}
            </button>
            {showDescription[cake.id] && (
              <p style={styles.description}>{cake.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#8D6E63',
    marginBottom: '1rem',
  },
  sub:{
    textAlign: 'center',
    color: '#8B4513',
    marginBottom: '1rem',
  },
  sortContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    alignItems: 'center',
  },
  sortLabel: {
    marginRight: '0.5rem',
    color: '#4E342E',
  },
  sortSelect: {
    padding: '0.5rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'center',
  },
  card: {
    width: '300px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '1rem',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  cakeName: {
    fontSize: '1.1rem',
    color: '#4E342E',
    padding: '0.5rem',
  },
  cakeDetails: {
    fontSize: '1rem',
    color: '#6D4C41',
    marginBottom: '0.5rem',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#8B4513',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '0.5rem',
  },
  descriptionButton: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#4E342E',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '0.5rem',
  },
  description: {
    marginTop: '1rem',
    fontSize: '0.9rem',
    color: '#6D4C41',
    backgroundColor: '#FBE9E7',
    padding: '0.5rem',
    borderRadius: '4px',
  },
};

export default MiniCakesPage;
