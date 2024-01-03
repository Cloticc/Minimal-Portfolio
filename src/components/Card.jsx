import React, { useRef, useState } from 'react';

function Card({ dataImage, children }) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);
  const cardRef = useRef();

  const handleMouseMove = (e) => {
    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = cardRef.current;
    setMouseX(e.pageX - offsetLeft - offsetWidth / 2);
    setMouseY(e.pageY - offsetTop - offsetHeight / 2);
  };

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };

  const handleMouseLeave = () => {
    setMouseLeaveDelay(setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000));
  };

  const mousePX = mouseX / cardRef.current.offsetWidth;
  const mousePY = mouseY / cardRef.current.offsetHeight;

  const cardStyle = {
    transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`
  };

  const cardBgTransform = {
    transform: `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`
  };

  const cardBgImage = {
    backgroundImage: `url(${dataImage})`
  };

  return (
    <div 
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div className="card" style={cardStyle}>
        <div className="card-bg" style={{...cardBgTransform, ...cardBgImage}}></div>
        <div className="card-info">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Card;