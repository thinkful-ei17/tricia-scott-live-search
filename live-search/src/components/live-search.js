import React from 'react';

import SearchForm from './search-form';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      characters: this.props.characters,   
    }
  }
  render(){

    return <div>
      <SearchForm />
      <CharacterList characters={this.state.characters} />

      </div>
  }
}