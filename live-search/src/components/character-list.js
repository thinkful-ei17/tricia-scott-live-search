import React from 'react';


export default function CharacterList( props ) {
  const chars = props.characters.map(item =>{
    `<li>${item.name}${item.description}${item.actor}</li>`
  })

return (
  <ul>{chars}</ul>
)

}
