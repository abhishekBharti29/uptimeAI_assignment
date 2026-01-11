import Navbar from "./Navbar"
import HeaderFunctionalities from "./HeaderFunctionalities";

const Header = ({ profilePicUrl }) => {
  return (
    <div className="header">
      <HeaderFunctionalities profilePicUrl={profilePicUrl} />
      <Navbar />
    </div>
  )
}

export default Header;