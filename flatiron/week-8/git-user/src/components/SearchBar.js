import React from 'react'

class SearchBar extends React.Component {

  fetchGithubUser = (username) => {
    fetch("https://api.github.com/users/" + username)
      .then(res => res.json())
      .then(user => {
        this.props.onSearch(user)
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.fetchGithubUser(event.target[0].value)
  }

  render() {

    return(
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Search Username..." />
      </form>
    )

  }

}

export default SearchBar
