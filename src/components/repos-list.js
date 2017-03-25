import React, {Component} from 'react';

class ReposList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="repos">
        <h3>Oh my, we have {this.props.repos.length} repos here in {this.props.org}!</h3>
        <ul>
        { this.props.repos
          .sort(function(a,b) { return a.open_issues_count - b.open_issues_count })
          .map(function(repo, i) {return <li key={i}>
            <span className="repoName">{repo.name}</span><br />
            <span className="issueCount">{repo.open_issues_count} open issues</span><br />
            <button>Browse commits</button>
          </li> })
        }
        </ul>
      </div>
    )
  }

  getCommits() {
    console.log('hi!')
    const url = `https://api.github.com/repos/${this.state.org}/${this.state.selctedRepo}/commits`;
    return axios.get(url);
  }
}

export default ReposList
