import React from 'react';
import './ToggleButton.css';

interface Props extends React.PropsWithChildren {
  onClick: React.MouseEventHandler;
  isActive: boolean;
}

const ToggleButton: React.FC<Props> = ({onClick, isActive, children}) => {
  const containerStyle = {marginTop: '20px'};

  const buttonClasses = ['ToggleButton'];

  if (isActive) {
    buttonClasses.push('Red'); //Button Red
  }


  return (
    <div style={containerStyle}>
      <button onClick={onClick} className={buttonClasses.join(' ')}>{children}</button>
    </div>
  );
};

export default ToggleButton;