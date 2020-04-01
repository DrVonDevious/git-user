import React from 'react'

class Repos extends React.Component {

  getRepos = (url) => {
    fetch(url)
    .then(resp => resp.json())
    .then(repos => {
      return repos.map(repo => this.showRepo(repo))  
    })
  }

  showRepo = (repo) => {
    // debugger
    return (
      <div> 
        <a href={repo.html_url}>
          <label> {repo.name} </label>
        </a>
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.getRepos(this.props.reposUrl)}
      </div>
    )
  }

}

export default Repos
