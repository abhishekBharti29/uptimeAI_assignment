import AboutUser from "./AboutUser";
import ContactUser from "./ContactUser";
import UserAchievements from "./UserAchievements";

const Sidebar = ({
  profilePicUrl,
  name,
  username,
  bio,
  followerCount,
  followingCount,
  userOrg,
  userLocation,
  userEmail,
  userLinkedIn,
  userBlogUrl,
  userTwitterUsername
}) => {

  return (
    <div className="sidebar">
      <AboutUser
        profilePicUrl={profilePicUrl}
        name={name}
        username={username}
        bio={bio}
        followerCount={followerCount}
        followingCount={followingCount}
      />
      <ContactUser
        userOrg={userOrg}
        userLocation={userLocation}
        userEmail={userEmail}
        userLinkedIn={userLinkedIn}
        userBlogUrl={userBlogUrl}
        userTwitterUsername={userTwitterUsername}
      />
      <hr />
      <UserAchievements />
      <hr />
      <h3>Organizations</h3>
      <a href="https://www.uptimeai.com/" className="org" title="Take me to UptimeAI Website">UptimeAI</a>
    </div>
  )
}

export default Sidebar;