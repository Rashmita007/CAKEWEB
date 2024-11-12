import React, { useState } from 'react';
import { useCart } from '../Cartcontext/Cartcontext'; 

const MiniCakesPage = () => {
  const [sortOption, setSortOption] = useState('none');
  const { addToCart } = useCart(); 
  const [showDescription, setShowDescription] = useState({}); 

  const cakes = [
    {
      id: 1,
      name: "Kunafa Pistachio Chocolate Cake",
      image: "/Images/choco1.jpg", 
      price: 1300,
      selectedWeight:'500gm',
      popularity: 4.8,
      description: "CA crunchy layer of pistachio Kunafa, layered with chocolate sponge and pistachio custard. Garnished with a touch of chocolate truffle and a drizzle of pistachio praline paste, this cake is a delicious middle eastern inspired delight.",
    },
    {
      id: 2,
      name: "Passion Fruit Chocolate & Coffee Cake",
      image: "/Images/celeb2.jpg",
      price: 825,
      selectedWeight:'500gm',
      popularity: 4.2,
      description: "Passion Fruit Chocolate Coffee Cake combines a rich, flourless chocolate sponge soaked in coffee with layers of creamy passion fruit ganache and silky coffee cream, all topped with a drizzle of passion fruit ganache.",
    },
    {
      id: 3,
      name: "Salted Caramel Chocolate Cake",
      image: "/Images/choco3.jpg",
      price: 1285,
      selectedWeight:'500gm',
      popularity: 4.3,
      description: "Enjoy our Salted Caramel Chocolate Cake, a decadent treat featuring layers of handcrafted salted caramel ganache and rich chocolate sponge, topped with chocolate covered potato chips. ",
    },
    {
        id: 4,
        name: "Orange Chocolate Cake ",
        image: "/Images/celeb3.jpg",
        price: 1200,
        selectedWeight:'1kg',
        popularity: 4.7,
        description: "Orange Chocolate Cake is made of moist chocolate cake layered with a luscious zesty orange chocolate frosting and fresh oranges. This blend of fruit and chocolate flavors creates a truly divine experience, perfect for those seeking an eggless option without compromising on taste or quality. ",
    },
    {
        id: 5,
        name: "Vegan Banana Chocolate Tea Cake",
        image: "/Images/vega4.jpg",
        price: 670,
        selectedWeight:'500gm',
        popularity: 3.5,
        description: "A luscious banana chocolate cake topped with grated chocolate. A match made in heaven",
    },
    {
        id: 6,
        name: "Vegan Decadent Chocolate Cake",
        image: "/Images/vega3.jpg",
        price: 1200,
        selectedWeight:'500gm',
        popularity: 4.6,
        description: "Vegan Decadent Chocolate Cake. This moist chocolate cake is layered with a luscious whipped chocolate ganache and finished with a decadent chocolate glaze. A perfect treat for any occasion, proving that vegan desserts are truly delicious too! ",
    },
    {
        id: 7,
        name: "Vegan Dark Chocolate Raspberry",
        image: "/Images/vega1.jpg", 
        price: 1280,
        selectedWeight:'500gm',
        popularity: 4.2,
        description: "Enjoy the delightful flavours of our Vegan Dark Chocolate Raspberry Cake. This vegan cake features a moist chocolate sponge, layered with fresh raspberry compote and topped with smooth dark chocolate frosting.",
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
      <h2 style={styles.title}>Chocolate Collections</h2>
      <p style={styles.sub}><b>Chocolate is the answer. Who cares what the question is?</b></p>
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
