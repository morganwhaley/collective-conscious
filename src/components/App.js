import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import SearchForm from './search_form';

class App extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h3>Mind Control with Github</h3>
        <SearchForm />
      </div>
    )
  }
};

export default App;
