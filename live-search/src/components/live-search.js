import React from 'react';

import SearchForm from './search-form';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      characters: this.props.characters,
      searchString: "",   
    }
  }
  updateSearchString(str) {
    this.setState({searchString: str});
  }

  render(){
    const charList = this.state.characters.filter( character => 
      character.name.toLowerCase().includes(
        this.state.searchString.toLowerCase()
      )
    );

    return (
      <div>
        <SearchForm searchString={e => this.updateSearchString(e)}/>
        <CharacterList characters={charList} />
      </div>
    );
  }
}