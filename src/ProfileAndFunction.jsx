import React from 'react'
import ProfileCard from './ProfileCard'

const profileId = {
 name : "metaMask",
 email: "@metaMask",
 bio: "MetaMask brings Ethereum to your web browser"
}


function ProfileAndFunction() {
const [followers, setFollowers] = React.useState(6)
const [isFollowing, setIsFollowing] = React.useState(false)

const handleFollow = () => {
  setIsFollowing(!isFollowing)
  if (isFollowing) {
   setFollowers(followers -1 )
  }else {
   setFollowers(followers + 1)
  }
}

  return (
    <div>
     <ProfileCard
     name={profileId.name}
     email={profileId.email}
     bio={profileId.bio}
     handleFollow={handleFollow}
     isFollowing={isFollowing}
     followers={followers}
     />
    </div>
  )
}

export default ProfileAndFunction