import React from 'react'
import Person from "./Person"

const PersonList = props => {
    return (
            props.characters.map(character => <Person character = {character}/>)
    )
} 

export default PersonList;