import React from 'react'
import Avatar from '@material-ui/core/Avatar'

class UserHeader extends React.Component {

  render() {
    console.log("UserHead Props", this.props)
    return(
      <div>
        <a href={this.props.link}>
          <Avatar className="profile-avatar" 
                  src={this.props.img_url} 
                  alt="Image aint load"
                  style={{
                    width: "100px",
                    height: "100px",
                    position: 'relative',
                    marginLeft: "43%",
                    marginRight: "50%",
                    marginTop: "5%",
                    textAlign: "center"
                  }}></Avatar>
        </a>
        <h3> {this.props.name} </h3>
      </div>
    )
  }

}

export default UserHeader
