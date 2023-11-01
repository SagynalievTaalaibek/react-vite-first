import React from 'react';

interface Props {
  peopleCounter: number;
}

const Counter: React.FC<Props> = ({peopleCounter}) => {
  const counterStyle: React.CSSProperties = {color: 'green'};

  if (peopleCounter <= 2) {
    counterStyle.color = 'red';
  }

  if (peopleCounter <= 1) {
    counterStyle.fontWeight = 'bold';
  }

  return (
    <p style={counterStyle}>
      Total people {peopleCounter}
    </p>
  );
};

export default Counter;