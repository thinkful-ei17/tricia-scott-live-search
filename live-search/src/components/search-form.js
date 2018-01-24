import React from 'react';


export default function SearchForm(props) {
return (
  <form onSubmit={e => e.preventDefault() }>
    <label htmlFor='search'>Search</label>
    <input type='search' name='search' id='search' 
          onChange={e => props.searchString(e.target.value)}/>
  </form>
);
}
