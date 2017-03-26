import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = { org: '', repos: [], showRepos: false };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getOrgRepos();
  }

  getOrgRepos(org) {
    return axios.get('https://api.github.com/orgs/' + org + '/repos')
      .then(response => this.setState({ repos: response.data, showRepos: true }))
      .catch(error => this.setState({ repos: [], showRepos: false }));
  }

  render() {
    var self = this;
    return(
      <form>
        <label>Organization</label>
        <input type="text" name="org" onChange={event => this.setState({ org: event.target.value })} />
        <input type="submit" value="Submit" onClick={function(event) {
          event.preventDefault();
          self.getOrgRepos(self.state.org);
          self.props.onOrgSearch(self.state.org);
          }
        } />
      </form>
    )
  }
}

export default Form;
