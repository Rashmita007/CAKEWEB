import React, { useRef, useState } from "react";

const CakeCategories = () => {
  const categoriesContainerRef = useRef(null);

  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered category index

  const cakeCategories = [
    {
      image: "/Images/mini3.jpg",
      name: "Mini Cakes",
      link: "/Components/MiniCake/MiniCake.js",
    },
    {
      image: "/Images/celeb3.jpg",
      name: "Celebration Cakes",
      link: "/Components/CelebrationCake/CelebrationCake.js",
    },
    {
      image: "/Images/lo3.jpg",
      name: "Cake Loaves",
      link: "/Components/Loaves/Loaves.js",
    },
    {
      image: "/Images/cup5.jpg",
      name: "Cup Cakes",
      link: "/Components/Cupcake/cupcake.js",
    },
    {
      image: "/Images/slice3.jpg",
      name: "Cake Slices",
      link: "/Components/Slice/slice.js",
    },
    {
        image: "/Images/vega6.jpg",
        name: "Cookies & Crackers",
        link: "/Components/Cookies/cookie.js",
    },
    {
        image: "/Images/egg2.jpg",
        name: "Eggless Collections",
        link: "/Components/Eggless/eggless.js",
    },
    {
        image: "/Images/vega1.jpg",
        name: "Vegan collections",
        link: "/Components/Vegan/vegan.js",
    },
    {
        image: "/Images/Chocolate.png",
        name: "Chocolate Collections",
        link: "/Components/Chocolate/Chocolate.js",
    },
  ];

  const scrollLeft = () => {
    if (categoriesContainerRef.current) {
      categoriesContainerRef.current.scrollBy({
        left: -300, 
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (categoriesContainerRef.current) {
      categoriesContainerRef.current.scrollBy({
        left: 300, 
        behavior: "smooth",
      });
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Explore Our Exclusive Cake Categories</h2>
      <p style={styles.subtitle}><b>Step right up, cake lovers!</b></p>
      <p style={styles.subtitle}>Step right up, cake lovers!Whether you're after a cute mini cake to sneak in between meetings, a decadent celebration cake to wow your guests, or a loaf of cake that feels just like home, we’ve got a category for every craving. Our cakes are more than just sweet treats – they’re little moments of joy wrapped in frosting. So dive into our delicious categories, where each selection promises a perfect bite. From the first crumb to the last, we guarantee your taste buds will be dancing. Warning: Proceed with caution, as it may cause serious cake addiction!</p>

      {/* Left Arrow */}
      <button onClick={scrollLeft} style={{ ...styles.arrowButton, left: "10px" }}>
        &lt;
      </button>

      <div style={styles.categoriesContainer}>
        <div style={styles.scrollableContainer} ref={categoriesContainerRef}>
          {cakeCategories.map((category, index) => (
            <a 
              key={index}
              href={category.link}
              style={{
                ...styles.categoryBox,
                backgroundImage: `url(${category.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: hoveredIndex === index ? "4px solid #a67c00" : "4px solid transparent",
                transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                boxShadow: hoveredIndex === index ? "0px 6px 10px rgba(0, 0, 0, 0.2)" : "0px 4px 6px rgba(0, 0, 0, 0.1)",
                display: "block",  
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={styles.categoryText}>
                {category.name}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button onClick={scrollRight} style={{ ...styles.arrowButton, right: "10px" }}>
        &gt;
      </button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#fff8ec",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    position: "relative",
  },
  title: {
    color: "#8B4513",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    transition: "#d2691e 0.3s ease",
  },
  subtitle: {
    textAlign: "left",
    color: "black",
    marginBottom: "2rem",
  },
  categoriesContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
  },
  scrollableContainer: {
    display: "flex",
    overflowX: "auto",
    gap: "2.2rem",
    padding: "10px 0",
    width: "100%",
    flexWrap: "nowrap",
  },
  categoryBox: {
    position: "relative",
    width: "300px",
    height: "300px",
    borderRadius: "16px",
    overflow: "hidden",
    flexShrink: 0,
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
    marginBottom: "1.6rem",
    textDecoration: "none",  
  },
  categoryText: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: "10px 15px",
    borderRadius: "5px",
    textAlign: "center",
    width: "calc(100% - 20px)", 
  },
  arrowButton: {
    position: "absolute",
    top: "55%",
    transform: "translateY(-50%)",
    backgroundColor: "#fff",
    border: "2px solid #8B4513",
    borderRadius: "50%",
    padding: "15px",
    fontSize: "1.5rem",
    color: "#8B4513",
    cursor: "pointer",
    zIndex: 10,
  },
};

export default CakeCategories;
