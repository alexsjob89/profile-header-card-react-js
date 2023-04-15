import React from 'react'
import {AiOutlineFacebook,AiOutlineYoutube} from "react-icons/ai"
import {CiLinkedin} from "react-icons/ci"
import {FiGithub} from "react-icons/fi"
import ProfileImg from "./assets/Cameo_of_Benedetto_Pistrucci.jpg"
import ProgressBarFunctions from "./progressBar/ProgressBarFunctions"


function ProfileCard({name, email, bio, handleFollow, isFollowing, followers}) {
  return (
    <div className='profile-header'>
    <div className="profile">
    <img src={ProfileImg} style={{width: "70px", borderRadius: "50%", border: "3px solid lightblue"}}/>
    <h1>{name}</h1>
    <a href="#">{email}</a>
    <p>{bio}</p>

<div className="icons-box">
<FiGithub className='icon'/>
<CiLinkedin className='icon'/>
<AiOutlineFacebook className='icon'/>
<AiOutlineYoutube className='icon'/>
</div>
</div>
    <div className="organisation-progress-bar">

<ProgressBarFunctions/>
    </div>
    <button
    className="follow-button"
    onClick={handleFollow}
    style={{
      alignItems: "center",
      position: "absolute",
      left: "40rem",
      top: "15rem",
      background: "none",
      backgroundColor: "#16243C",
      border: "none",
      color: "white"}}>
    {isFollowing ? "Unfollow" : "Follow"}
<p>{followers} followers</p>
    </button>
    </div>
  )
}

export default ProfileCard