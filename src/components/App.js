import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import axios from 'axios';
import Form from './form';
import ReposList from './repos-list';
import RepoCommits from './repo-commits';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { org: '', repos: [], showRepos: false }
  }

  orgSearch(org, repos, showRepos) {
    this.setState({
      org: org,
      repos: repos,
      showRepos: showRepos
    })
  }

  render() {
    const orgSearch = (org, repos, showRepos) => this.orgSearch(org, repos, showRepos);
    
    return(
      <div>
        <h1>Collective Conscious</h1>
        <h3>Who&rsquo;s got issues? We got issues!</h3>
        <Form onOrgSearch={orgSearch} />
      </div>
    )
  }
};


export default App;
