import Person from "./Person/Person";
import './App.css';
import React, {useState} from "react";

interface Person {
  id: number;
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [people, setPeople] = useState<Person[]>([
    {name: 'Jane', age: 28, hobby: 'Video games', id: 1},
    {name: 'John', age: 30, hobby: 'Football', id: 2},
    {name: 'Jack', age: 69, hobby: 'Drinking alone', id: 3},
    {name: 'Dima', age: 34, hobby: 'Coding', id: 4},
  ]);

  const [showPeople, setShowPeople] = useState(false);

  // const changeName = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
  //   const index = people.findIndex((person) => person.id === id);
  //   const peopleCopy = [...people];
  //   const person = peopleCopy[index];
  //   const personCopy = {...person};
  //   personCopy.name = event.target.value;
  //   peopleCopy[index] = personCopy;
  //   setPeople(peopleCopy);
  // };

  const changeName = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const newName = event.target.value;

    setPeople((prevState) => prevState.map((person) => {
      if (person.id === id) {
        return {...person, name: newName};
      }

      return person;
    }));
  };

  const changeAge = () => {
    setPeople((prevState) => prevState.map(person => {
      return {...person, age: person.age + 1};
    }));
  };

  const increaseAge = (id: number) => {
    setPeople((prevState) => prevState.map((person) => {
      if (person.id === id) {
        return {...person, age: person.age + 1};
      }

      return person;
    }));
  };

  // const removePerson = (id: number) => {
  //   const index = people.findIndex((person) => person.id === id);
  //   const peopleCopy = [...people];
  //   peopleCopy.splice(index, 1);
  //   setPeople(peopleCopy);
  // };

  const removePerson = (id: number) => {
    setPeople((prevState) => prevState.filter(person => {
      return person.id !== id;
    }));
  };


  /*Мы берем prevState и меняем его*/
  const togglePeople = () => {
    setShowPeople((prevState) => !prevState);
  };

  const addPerson = () => {
    setPeople((prevState) => {
      const id = prevState[prevState.length - 1].id + 1;
      console.log(prevState.length);
      return [...prevState, {name: 'Someone', age: 21, hobby: 'Something', id}];
    });
  };

  let peopleList: React.ReactNode = null;

  if (showPeople) {
    peopleList = people.map((person) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          onNameClick={() => increaseAge(person.id)}
          onNameChange={(event) => changeName(event, person.id)}
          remove={() => removePerson(person.id)}
        >
          <strong>Hobby: </strong>{person.hobby}
        </Person>
      );
    });
  }

  return (
    <div className="App">
      <div>
        <button onClick={changeAge}>Change age</button>
        <button onClick={togglePeople}>Toggle people</button>
        <button onClick={addPerson}>Add people</button>
      </div>
      {peopleList}
    </div>
  );
}

export default App;
