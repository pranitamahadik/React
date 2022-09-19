import React from 'react'
import Person from './Person'

function NameList() {
  const persons = [
        {   
            id: 1,
            name: 'Pranita',
            age: 30
        },
        {   
            id: 2,
            name: 'Vikesh',
            age: 31
        }
    ] 

    const personList = persons.map(person => <Person key={person.id} person = {person}></Person>)
  return (
    <div>
      {personList}
    </div>
  )
}

export default NameList
