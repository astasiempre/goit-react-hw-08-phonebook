import React from 'react';
import { useSpring, animated } from 'react-spring';

const centeredContentStyle = {
  display: 'flex',
  fontsize: '100px',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const largeFontStyle = {
  fontSize: '80px',
  color: 'red',
};

const HomePage = () => {
  const animationProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={{ ...centeredContentStyle, ...animationProps }}>
      <h1 style={largeFontStyle}>PhoneBook App</h1>
    </animated.div>
  );
};

export default HomePage;
