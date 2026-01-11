import Overview from "./Overview";
import Sidebar from "./Sidebar";

const Content = ({
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
  userTwitterUsername,
  reposUrl
}) => {
  return (
    <div className="content">
      <Sidebar
        profilePicUrl={profilePicUrl}
        name={name}
        username={username}
        bio={bio}
        followerCount={followerCount}
        followingCount={followingCount}
        userOrg={userOrg}
        userLocation={userLocation}
        userEmail={userEmail}
        userLinkedIn={userLinkedIn}
        userBlogUrl={userBlogUrl}
        userTwitterUsername={userTwitterUsername}
      />
      <Overview reposUrl={reposUrl} />
    </div>
  )
}

export default Content;