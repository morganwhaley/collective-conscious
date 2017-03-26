import React, {Component} from 'react';
import axios from 'axios';

class ReposList extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedRepo: '', commits: [] }
  }

  getRepoCommits(name) {
    return axios.get(`https://api.github.com/repos/${this.props.org}/` + name + `/commits`, { params: { since: '2016-03-01' } })
      .then((response) => {
        this.props.onRepoSelect(name, response.data);
        this.setState({ selectedRepo: name, commits: response.data })
      })
      .catch(error => this.setState({ selectedRepo: '', commits: [] }));
  }

  render() {

    const reposList = this.props.repos
      .sort((a,b) => { return b.open_issues_count - a.open_issues_count })
      .map((repo, i) => {
        return <li key={i}>
          <span className="repoName">{repo.name}</span><br />
          <span className="issueCount">{repo.open_issues_count} open issues</span><br />
          <button onClick={event => { event.preventDefault(); this.getRepoCommits(repo.name); }}>Browse commits</button>
        </li>
      }
    );

    return(
      <div className="repos">
        <h3>Oh my, we have {this.props.repos.length} repos here in {this.props.org}!</h3>
        <ul>
        { reposList }
        </ul>
      </div>
    )
  }
}

export default ReposList
