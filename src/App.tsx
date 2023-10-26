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

    const changeName = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const peopleCopy = [...people];
        const person = peopleCopy[index];
        const personCopy = {...person};
        personCopy.name = event.target.value;
        peopleCopy[index] = personCopy;
        setPeople(peopleCopy);
    };

    const changeAge = () => {
        const peopleCopy = people.map(person => {
            return {...person, age: person.age + 1};
        });

        setPeople(peopleCopy);
    };

    const increaseAge = (index: number) => {
        const peopleCopy = [...people];
        const person = peopleCopy[index];
        const personCopy = {...person};
        personCopy.age++;
        peopleCopy[index] = personCopy;
        setPeople(peopleCopy);
    };

    /*Мы берем prevState и меняем его*/
    const togglePeople = () => {
        setShowPeople((prevState) => !prevState);
    };

    let peopleList: React.ReactNode = null;

    if (showPeople) {
        peopleList = people.map((person, index) => {
            return (
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    onNameClick={() => increaseAge(index)}
                    onNameChange={(event) => changeName(event, index)}
                >
                    <strong>Hobby: </strong>{person.hobby}
                </Person>
            );
        });
    }

    return (
        <div className="App">
            {peopleList}
            <div>
                <button onClick={changeAge}>Change age</button>
                <button onClick={togglePeople}>Toggle people</button>
            </div>
        </div>
    )
}

export default App
