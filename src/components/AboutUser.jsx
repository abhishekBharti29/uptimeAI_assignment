import FollowIcon from "../assets/users.svg"

const AboutUser = ({ profilePicUrl, name, username, bio, followerCount, followingCount }) => {
  return (
    <>
      <img className="user_image" src={profilePicUrl} />
      <h1>
        <span>{name}</span>
        <p className="username">{username}</p>
      </h1>
      <p>{bio}</p>
      <button className="edit-profile-btn" title="Non-functional">Edit Profile</button>
      <span className="followers-following">
        <img src={FollowIcon} alt="follow-icon" className="follow-icon" />
        <span className="followers-following-txt" title="Non-functional">
          <strong>{followerCount + " "}</strong>
          <span>followers · </span>
        </span>
        <span className="followers-following-txt" title="Non-functional">
          <strong>{followingCount + " "}</strong>
          <span>following</span>
        </span>
      </span>
    </>

  )
}

export default AboutUser;