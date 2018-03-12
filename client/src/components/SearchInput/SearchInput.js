import React from 'react';
import './SearchInput.css';

class SearchInput extends React.Component{
  constructor(){
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,50)})
  }
  render(){
    // let filterContacts = this.props.contacts.filter(
    //   (contact) => {
    //     return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    //   }
    // );
    return (
      <div>
        <input className="search" placeholder="Search" value={this.state.search} type="search" aria-label="Search" onChange={this.updateSearch.bind(this)} />
      </div>
    );
  }
}

export default SearchInput;
