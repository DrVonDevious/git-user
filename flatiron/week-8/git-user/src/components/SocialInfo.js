import React from 'react'

class SocialInfo extends React.Component {

  render() {
    return(
      <div>
        <div>Followers: {this.props.followers}</div>
        <div>Following: {this.props.following}</div>
      </div>
    )
  }

}

export default SocialInfo
