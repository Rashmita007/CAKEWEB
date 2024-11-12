import { hover } from "@testing-library/user-event/dist/hover";
import React, { useRef } from "react";

const Testimonials = () => {
  const testimonialsContainerRef = useRef(null);

  const testimonials = [
    {
      text: "I’ve never tasted a cake so delicious! Cake Delight made our wedding cake, and it was the highlight of the day. Beautifully designed and unbelievably tasty. Thank you for making our celebration even more special!",
      author: "Samantha & Stany",
    },
    {
      text: "I ordered a custom birthday cake for my daughter, and it was a masterpiece! Not only did it look amazing, but it was also the best cake I've ever had. Cake Delight truly knows how to mix design with flavor!",
      author: "NEHA SHARMA",
    },
    {
      text: "Cake Delight has truly redefined my idea of what a cake should be! I was looking for a custom cake for my daughter’s sweet 16 party, and I knew I wanted something special—something that not only tasted amazing but also captured the spirit of the event. From the very first call, I could tell that Cake Delight was the right choice.When the cake arrived at the party, I was absolutely blown away. It was more beautiful than I could have imagined—every detail, from the delicate sugar flowers to the elegant tiered design, was perfectly executed. But what truly set it apart was the taste. It was absolutely delicious! The cake was perfectly moist, and the flavors were a perfect balance of sweetness. The guests couldn’t stop talking about it, and we had trouble saving any for leftovers!",
      author: "Shyam Poddar",
    },
    {
      text: "Cake Delight never disappoints! The custom cake I ordered for my anniversary was absolutely divine. Every guest was amazed by the flavors and intricate design. Thank you for making my special day even sweeter!",
      author: "John Wilson & Jaya Mary",
    },
    {
      text: "I’ve ordered multiple cakes from Cake Delight over the years, and they never fail to impress! Each cake is uniquely designed and tastes like heaven. Highly recommend for any occasion!",
      author: "Ravi Kapoor",
    },
  ];

  // Function to scroll left
  const scrollLeft = () => {
    if (testimonialsContainerRef.current) {
      testimonialsContainerRef.current.scrollBy({
        left: -300, // scroll amount
        behavior: "smooth",
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (testimonialsContainerRef.current) {
      testimonialsContainerRef.current.scrollBy({
        left: 300, //scroll amount
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Delighted Customers, Delicious Cakes!!!</h2>
      <p style={styles.subtitle}><b>Our customers put the icing on the cake:)</b></p>

      {/* Left Arrow */}
      <button onClick={scrollLeft} style={{ ...styles.arrowButton, left: "10px" }}>
        &lt;
      </button>

      <div style={styles.testimonialsContainer}>
        <div style={styles.scrollableContainer} ref={testimonialsContainerRef}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={styles.testimonialBox}>
              <p style={styles.text}>&quot;{testimonial.text}&quot;</p>
              <p style={styles.author}>{testimonial.author}</p>
            </div>
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
    color: "#a67c00",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    transition: "#d2691e 0.3s ease",
  },
  subtitle: {
    textAlign: "center",
    color: "#a67c00",
    marginBottom: "2rem",
  },
  testimonialsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
  },
  scrollableContainer: {
    display: "flex", 
    overflowX: "auto", 
    gap: "2rem", 
    padding: "10px 0", 
    width: "100%", 
    flexWrap: "nowrap", 
  },
  testimonialBox: {
    backgroundColor: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "1.5rem",
    maxWidth: "400px",
    border: "2px solid #F1E5DF",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    marginBottom: "1rem", 
    flexShrink: 0, 
  },
  text: {
    fontSize: "1rem",
    color: "#8B4513",
    lineHeight: "1.6",
  },
  author: {
    fontWeight: "bold",
    color: "#8D6E63",
    textAlign: "right",
    marginTop: "1rem",
  },
  arrowButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "#fff",
    border: "2px solid #8B4513",
    borderRadius: "50%",
    padding: "10px",
    fontSize: "1.5rem",
    color: "#8B4513",
    cursor: "pointer",
    zIndex: 10,
  },
};

export default Testimonials;
