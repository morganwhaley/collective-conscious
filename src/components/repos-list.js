import React, {Component} from 'react';
import axios from 'axios';
import RepoCommits from './repo-commits';

class ReposList extends Component {
  constructor(props) {
    super(props);

    this.state = { commits: [] }
  }

  getRepos(name) {
    return axios.get(`https://api.github.com/repos/${this.props.org}/` + name + `/commits`, { params: { since: '2016-03-01' } })
      .then(response => this.setState({ commits: response.data }))
      .catch(error => this.setState({ commits: [] }));
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('previous state: ', this.state.commits);
    console.log('next state: ', nextState.commits);
  }

  render() {
    return(
      <div className="repos">
        <h3>Oh my, we have {this.props.repos.length} repos here in {this.props.org}!</h3>
        <ul>
        { this.props.repos
          .sort(function(a,b) { return b.open_issues_count - a.open_issues_count })
          .map(function(repo, i) { return <li key={i}>
            <span className="repoName">{repo.name}</span><br />
            <span className="issueCount">{repo.open_issues_count} open issues</span><br />
            <button onClick={ name => this.getRepos(repo.name) }>Browse commits</button>
          </li> }, this)
        }
        { (this.state.commits.length > 0) ? <RepoCommits commits={this.state.commits} /> : null }
        </ul>
      </div>
    )
  }
}

export default ReposList
