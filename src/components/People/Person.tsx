import React from "react";

const Person: React.FC<Props> = ({
  name, age,
  onNameClick,
  onNameChange,
  remove,
  children
}) => {
  return (
    <div className="person">
      <h1 onClick={onNameClick} className="titleName">{name}</h1>
      <p>Age: {age}</p>
      <p>{children}</p>
      <input type="text" value={name} onChange={onNameChange}/>
      <button onClick={remove}>Remove</button>
    </div>
  );
};

interface Props extends React.PropsWithChildren {
  name: string;
  age: number;
  onNameClick: React.MouseEventHandler;
  onNameChange?: React.ChangeEventHandler<HTMLInputElement>;
  remove: React.MouseEventHandler;
}

export default Person;