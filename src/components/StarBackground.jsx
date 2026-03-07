import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setstars] = useState([]);

  useEffect(() => {
    generateStars();
  }, []);

  const generateStars = () => {
    const numOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000,
    ); // density of stars based on screen size

    const newStars = [];

    for (let i = 0; i < numOfStars; i++) {
      // create new star with id, size, x , y, opacity, animationDelay
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // size between 1 and 4
        x: Math.random() * 100, // x position in percentage
        y: Math.random() * 100, // y position in percentage
        opacity: Math.random() * 0.5 + 0.5, // opacity between 0.5 and 1
        animationDuration: Math.random() * 4 + 2, // animation duration between 2 and 6 seconds
      });
    }

    setstars(newStars);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => {
        return (
          <div
            key={star.id}
            className="star animate-pulse-subtle"
            style={{
              width: star.size + "px",
              height: star.size + "px",
              left: star.x + "%",
              top: star.y + "%",
              opacity: star.opacity,
              animationDuration: star.animationDuration + "s",
            }}
          />
        );
      })}
    </div>
  );
};
