import React, { useEffect, useRef } from 'react';
import './SampleComponent.css'; // We'll create this CSS file

const SparkleSection = () => {
  const numbersRef = useRef([]);

  useEffect(() => {
    // Animation for numbers
    const animateNumbers = () => {
      numbersRef.current.forEach((element, index) => {
        if (element && isElementInViewport(element)) {
          const finalNumber = getFinalNumber(index);
          animateValue(element, 0, finalNumber, 2000);
        }
      });
    };

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const getFinalNumber = (index) => {
      const numbers = [1034, 2, 34, 25];
      return numbers[index] || 0;
    };

    const animateValue = (element, start, end, duration) => {
      if (element._isAnimating) return;
      element._isAnimating = true;

      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString();
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          element._isAnimating = false;
        }
      };
      window.requestAnimationFrame(step);
    };

    // Initial animation check
    animateNumbers();

    // Add scroll listener for animation
    window.addEventListener('scroll', animateNumbers);
    return () => window.removeEventListener('scroll', animateNumbers);
  }, []);

  const sparkleData = [
    { number: 1034, top: "200px" },
    { number: 2, top: "400px" },
    { number: 34, top: "600px" },
    { number: 25, top: "800px" }
  ];

  return (
    <div className="sparkle-section">
      {/* ✨ Sparkle Section with Curved Dotted Snake and Animated Numbers */}
      <svg
        className="sparkle-path-svg"
        viewBox="0 0 400 1600"
        preserveAspectRatio="none"
      >
        <path
          id="mainSnakePath"
          d="M200 50 
             C350 250, 50 500, 300 700 
             S100 1100, 250 1350 
             S300 1600, 200 1550"
          stroke="#ffffffa5"
          strokeWidth="3"
          strokeDasharray="8 14"
          fill="none"
        />
      </svg>

      {/* Animated Star */}
      <div className="star">
        <div className="star-core"></div>
        <div className="star-glow"></div>
      </div>

      {/* Sparkle Items */}
      {sparkleData.map((item, index) => (
        <div 
          key={index}
          className="sparkle-item" 
          style={{ top: item.top, left: "50%" }}
        >
          <div className="sparkle-content">
            <div className="small-star"></div>
            <div 
              className="big-number"
              ref={el => numbersRef.current[index] = el}
            >
              {item.number}
            </div>
          </div>
          <div className="sparkle-sub">Sample Data about Sample Things</div>
        </div>
      ))}
    </div>
  );
};

export default SparkleSection;