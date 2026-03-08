import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setstars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateMeteors();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
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
        size: Math.random() * 3 + 1, // size between 1 and 4 pixels
        x: Math.random() * 100, // x position in percentage
        y: Math.random() * 100, // y position in percentage
        opacity: Math.random() * 0.5 + 0.5, // opacity between 0.5 and 1
        animationDuration: Math.random() * 4 + 2, // animation duration between 2 and 6 seconds
      });
    }

    setstars(newStars);
  };

  const generateMeteors = () => {
    const numOfMeteors = 4; // density of meteors based on screen size
    const newMeteors = [];

    for (let i = 0; i < numOfMeteors; i++) {
      // create new meteor with id, size, x , y, delay, animationDelay
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // size between 1 and 2 pixels
        x: Math.random() * 100, // x position in percentage
        y: Math.random() * 20, // y position in percentage
        delay: Math.random() * 15, // delay between 0 and 15 seconds
        animationDuration: Math.random() * 3 + 3, // animation duration between 3 and 6 seconds
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
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
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
