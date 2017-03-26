import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import axios from 'axios';
import Form from './form';
import ReposList from './repos-list';
import RepoCommits from './repo-commits';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { org: '', repos: [], showRepos: false, selectedRepo: '', commits: [] }
  }

  orgSearch(org, repos, showRepos) {
    this.setState({
      org: org,
      repos: repos,
      showRepos: showRepos
    });
  }

  repoSelect(selectedRepo, commits) {
    this.setState({
      selectedRepo: selectedRepo,
      commits: commits
    });
  }

  render() {
    const orgSearch = (org, repos, showRepos) => this.orgSearch(org, repos, showRepos);
    const repoSelect = (selectedRepo, commits) => this.repoSelect(selectedRepo, commits);

    return(
      <div>
        <h1>Collective Conscious</h1>
        <h3>Who&rsquo;s got issues? We got issues!</h3>
        <Form onOrgSearch={orgSearch} />
        { (this.state.showRepos == true) ? <ReposList org={this.state.org} repos={this.state.repos} onRepoSelect={repoSelect} /> : null }
      </div>
    )
  }
};


export default App;
