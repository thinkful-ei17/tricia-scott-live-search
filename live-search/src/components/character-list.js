import React from 'react';


export default function CharacterList( props ) {
  const chars = props.characters.map((item, index) =>
    <li key={index}>
      <strong>{item.name}</strong>({item.description}) - {item.actor}
    </li>
    
  );

  return (<ul className="character-list">{chars}</ul>)

}
