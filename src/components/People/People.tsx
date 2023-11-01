import React from 'react';
import Person from './Person';
import {Character} from '../../types';

interface Props {
  people: Character[];
  increaseAge: (id: number) => void;
  changeName: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  removePerson: (id: number) => void;
}

const People: React.FC<Props> = (props) => {
  return (
    <div className="peopleContainer">
      {props.people.map((person) => {
        return (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            onNameClick={() => props.increaseAge(person.id)}
            onNameChange={(event) => props.changeName(event, person.id)}
            remove={() => props.removePerson(person.id)}
          >
            <strong>Hobby: </strong>{person.hobby}
          </Person>
        );
      })}
    </div>
  );
};

export default People;