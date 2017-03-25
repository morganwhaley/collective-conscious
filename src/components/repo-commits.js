import React, {Component} from 'react';

const RepoCommits = ({commits}) => {

  return(
    <ul>
    {
      commits.map(function(commit, i) {
        <li key={i}>
          <span>Commit Details</span>
          {commit.sha}
          {commit.date}
          {commit.author.login} - {commit.commit.author.name}
          <a href={commit.html_url} target="_blank">view details</a>
        </li>
      })
    }
    </ul>
  )
}

export default RepoCommits
