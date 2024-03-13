// BackgroundAnimation.js
import React from "react";
import styled, { keyframes } from "styled-components";

const animateBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(-45deg,#0D1520 ,#111927 );
  background-size: 400% 400%;
  animation: ${animateBackground} 15s ease infinite;

  @media (max-width: 768px) {
    background-size: 800% 100%;
  }
`;

const BackgroundAnimation = () => {
  return <Background />;
};

export default BackgroundAnimation;
