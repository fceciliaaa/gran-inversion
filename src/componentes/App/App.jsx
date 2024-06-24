import { useState } from 'react'
import PersonCard from '../PersonCard/PersonCard'

const App = () => {
  const people = [{
    firstName: "Jane",
    lastName: "Doe",
    age: 45,
    hairColor: "Black"
  },
  {
    firstName: "John",
    lastName: "Smith",
    age: 88,
    hairColor: "Brown"
  },
  {
    firstName: "Millard",
    lastName: "Fillmore",
    age: 50,
    hairColor: "Brown"
  },
  {
    firstName: "Maria",
    lastName: "Smith",
    age: 62,
    hairColor: "Brown"
  }];

  const [listPerson, setListPerson] = useState(people);

  return (
    <>
      {
        listPerson.map((person) => {
          return (
            <PersonCard firstName = {person.firstName}
              lastName = {person.lastName}
              age = {person.age}
              hairColor = {person.hairColor} />
          )
        })
      }
    </>
  )
}


export default App
