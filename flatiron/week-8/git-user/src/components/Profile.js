import React from 'react'

import UserHeader from './UserHeader.js'
import UserBio from './UserBio.js'
import SocialInfo from './SocialInfo.js'
import Repos from './Repos.js'





class Profile extends React.Component {
  render() {
    console.log("Profile Props", this.props)
    return(
      <div>
        <UserHeader 
          name={this.props.user.name} 
          img_url={this.props.user.avatar_url} 
          link={this.props.user.html_url}/>
        <UserBio bio={this.props.user.bio}/>
        {/* Props: will take # followers follws */}
        <SocialInfo 
          followers={this.props.user.followers}
          following={this.props.user.following}/>
        <Repos reposUrl={this.props.user.repos_url}/>
      </div>
    )
  }

}

export default Profile
