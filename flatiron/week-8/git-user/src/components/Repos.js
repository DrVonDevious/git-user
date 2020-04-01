import React from 'react'

class Repos extends React.Component {

  // state = {
  //   reposArr: []
  // }

  // getRepos = (url) => {
  //   fetch(url)
  //   .then(resp => resp.json())
  //   .then(repos => {
  //     this.setState({reposArr: repos})
  //    })
  // }

  // showRepos = (repos) => {
  //   // console.log("ShowRepo", repo)
  //   this.state.reposArr.map ( repo => {
  //     return (
  //       <div> 
  //         <label> {repo.name} </label>
  //         <a href={repo.html_url}> Test </a>
  //       </div>
  //     )
  //   })
  // }


  render() {
    return(
      // <div id="Repositories">
      //   {this.getRepos(this.props.reposUrl)}
      //   {/* {
      //     this.state.reposArr.length > 0 
      //     ? this.showRepos(this.state.reposArr)
      //     : null
      //   } */}
      // </div>

      <div> 
        <h4> Number of Repositories: {this.props.numRepos}</h4>
      </div>
    )
  }

}

export default Repos
