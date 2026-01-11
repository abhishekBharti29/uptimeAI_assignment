import UserActivity from "./UserActivity";
import UserRepos from "./UserRepos";
import UserStats from "./UserStats";

const Overview = ({ reposUrl }) => {
  return (
    <div className="overview">
      <UserRepos reposUrl={reposUrl} />
      <UserStats />
      <UserActivity />
    </div>
  )
}

export default Overview;