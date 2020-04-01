import React from 'react'

class UserHeader extends React.Component {

  render() {
    console.log("UserHead Props", this.props)
    return(
      <div>
        <a href={this.props.link}>
          <img src={this.props.img_url} alt="Image aint load"></img>
        </a>
        <h3> {this.props.name} </h3>
      </div>
    )
  }

}

export default UserHeader
