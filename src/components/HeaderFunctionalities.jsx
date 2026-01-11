import HamburgerMenuIcon from "../assets/burger-menu-svgrepo-com.svg"
import GitHubLogoHeader from "../assets/github-mark.svg"
import SearchIcon from "../assets/search-svgrepo-com.svg"
import SlashIcon from "../assets/slash-svgrepo-com.svg"
import OctoCatFaceIcon from "../assets/icons8-octocat-50.png"
import TargerIcon from "../assets/target-svgrepo-com.svg"
import PullRequestIcon from "../assets/git-pull-request-svgrepo-com.svg"
import StorageDeviceIcon from "../assets/storage-device-svgrepo-com.svg"

const HeaderFunctionalities = ({ profilePicUrl }) => {
  return (
    <div className="michael-jackson">
      <div className="michael-jackson-left-pane">
        <img src={HamburgerMenuIcon} alt="Header main menu" className="header-main-menu" title="Main menu - Non-functional" />
        <img src={GitHubLogoHeader} alt="Header GitHub Logo" className="header-github-logo" />
        <strong>shreeramk</strong>
      </div>
      <div className="header-functionalities">
        <button className="header-search-btn" title="Search - Non-functional">
          <img src={SearchIcon} className="header-search-logo" />
          <span>Type</span>
          <img src={SlashIcon} className="header-slash-logo" />
          <span>to search</span>
        </button>
        <div className="header-dropdown-container" title="Non-functional">
          <img src={OctoCatFaceIcon} className="header-octocat-face-icon" />
          <button className="header-dropdown-btn">▼</button>
        </div>
        <div className="header-dropdown-container" title="Non-functional">
          <button className="header-add-btn">+</button>
          <button className="header-dropdown-btn">▼</button>
        </div>
        <img src={TargerIcon} className="header-target-icon" title="Non-functional" />
        <img src={PullRequestIcon} className="header-target-icon" title="Non-functional" />
        <img src={StorageDeviceIcon} className="header-target-icon" title="Non-functional" />
        <img className="header-profile-pic-img" src={profilePicUrl} />
      </div>
    </div>
  )
}

export default HeaderFunctionalities;