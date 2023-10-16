import React from "react";

interface Props extends React.PropsWithChildren {
    name: string;
    age: number;
}

const Person: React.FC<Props> = ({name, age, children}) => {
    return (
        <div className="person">
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>{children}</p>
        </div>
    )
};

export default Person;