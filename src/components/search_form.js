import React, { Component } from 'react';

class SearchForm extends Component {
  render() {
    return(
      <form>
        <label>
          Organization
          <input type="text" name="org" onChange={this.onTextSearch} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  onTextSearch(e) {
    console.log(e.target.value);
  }
}

export default SearchForm;
