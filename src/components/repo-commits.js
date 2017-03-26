import React, {Component} from 'react';

class RepoCommits extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const commitList = this.props.commits.map((commit, i) => {
      return (
        <li key={i}>{commit.sha}</li>
      )
    })

    return(
      <ul>
        {commitList}
      </ul>
    )
  }
}

export default RepoCommits
