import { useState, useEffect, useRef } from 'react';

const useMouseTrail = () => {
  const [trail, setTrail] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.lineWidth = 5;
    context.lineCap = 'round';

    const handleMouseMove = (e) => {
      const newTrail = [...trail, { x: e.clientX, y: e.clientY, color: getRandomColor() }];
      setTrail(newTrail.slice(Math.max(newTrail.length - 25, 0)));
    };

    const drawTrail = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      trail.forEach((pos, index) => {
        context.beginPath();
        if (index === 0) {
          context.moveTo(pos.x, pos.y);
        } else {
          context.moveTo(trail[index - 1].x, trail[index - 1].y);
        }
        context.lineTo(pos.x, pos.y);
        context.strokeStyle = pos.color;
        context.stroke();
      });
    };

    const getRandomColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    const intervalId = setInterval(drawTrail, 16);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(intervalId);
    };
  }, [trail]);

  return canvasRef;
};

export default useMouseTrail;