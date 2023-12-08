/** @format */

// src/components/Countdown.tsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CountdownWrapper = styled.div`
  font-family: "Arial", sans-serif;
  text-align: center;
  padding: 100px;
  margin: 100px;
`;

const CountdownTimer = styled.div`
  font-size: 2em;
  margin-bottom: 10px;
`;

const CountdownButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
`;

const Countdown: React.FC = () => {
  const [seconds, setSeconds] = useState(60);

  const handleReset = () => {
    setSeconds(60);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CountdownWrapper>
      <CountdownTimer>{seconds} seconds</CountdownTimer>
      <CountdownButton onClick={handleReset}>Reset Countdown</CountdownButton>
    </CountdownWrapper>
  );
};

export default Countdown;
