import UnfoldIcon from "../assets/unfold-24.svg"

const UserActivity = () => {
  return (
    <div className="user-activity-container">
      <span>Contribution activity</span>
      <div className="contribution-container">
        <div className="top-desc">
          <span>Created 56 commits in 11 repositories</span>
          <img src={UnfoldIcon} className="unfold-icon" />
        </div>
        <br />
        <br />
        <div>Opened 29 pull requests in 5 repositories</div>
        <br />
        <div className="repo">
          <span>UptimeAI/uptime_webapp</span>
          <span className="repo-desc">
            <span><span className="purple-pill">16</span> merged</span>
            <span><span className="green-pill">1</span> open</span>
            <img src={UnfoldIcon} className="unfold-icon" />
          </span>
        </div>
        <div className="repo">
          <span>UptimeAI/ml</span>
          <span className="repo-desc">
            <span><span className="purple-pill">6</span> merged</span>
            <img src={UnfoldIcon} className="unfold-icon" />
          </span>
        </div>
        <div className="repo">
          <span>UptimeAI/scripts</span>
          <span className="repo-desc">
            <span><span className="purple-pill">4</span> merged</span>
            <img src={UnfoldIcon} className="unfold-icon" />
          </span>
        </div>
        <div className="repo">
          <span>UptimeAI/engine</span>
          <span className="repo-desc">
            <span><span className="purple-pill">1</span> merged</span>
            <img src={UnfoldIcon} className="unfold-icon" />
          </span>
        </div>
        <div className="repo">
          <span>UptimeAI/ml_encrypted</span>
          <span className="repo-desc">
            <span><span className="purple-pill">1</span> merged</span>
            <img src={UnfoldIcon} className="unfold-icon" />
          </span>
        </div>
      </div>
      <button className="show-more-activity-btn">Show more activity</button>
      <span>Seeing something unexpected? Take a look at the <span className="link">GitHub profile guide</span>.</span>
    </div>
  )
}

export default UserActivity;