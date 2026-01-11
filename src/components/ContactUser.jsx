import BuildingsIcon from "../assets/building-svgrepo-com.svg";
import LocationPinIcon from "../assets/location-pin-svgrepo-com.svg";
import LinkIcon from "../assets/link-svgrepo-com.svg";
import XIcon from "../assets/x-logo-black.png";
import EmailIcon from "../assets/mail-16.svg";
import LinkedInIcon from "../assets/linkedin-svgrepo-com.svg";
import { useState, useEffect } from "react";

const ContactUser = ({ userOrg, userLocation, userEmail, userLinkedIn, userBlogUrl, userTwitterUsername }) => {

  const [fallbackEmail, setFallbackEmail] = useState(null)

  useEffect(() => {
    if (userBlogUrl === "http://shreeramk.com") {
      setFallbackEmail("kushwaha.shreeram@gmail.com");
    }
  }, [userBlogUrl]);

  return (
    <ul className="about-user">
      <li>
        <img src={BuildingsIcon} alt="user-contact-icons" className="user-contact-icons" />
        <span className="contact-user-info">{userOrg}</span>
      </li>
      <li>
        <img src={LocationPinIcon} alt="user-contact-icons" className="user-contact-icons" />
        <span className="contact-user-info">{userLocation}</span>
      </li>
      {userEmail ?
        <li>
          <img src={EmailIcon} alt="user-contact-icons" className="user-contact-icons" />
          <span title={`Write mail to ${userEmail}`} className="contact-user-info url"><a href={"mailto:" + userEmail}>{userEmail}</a></span>
        </li> :
        <li>
          <img src={EmailIcon} alt="user-contact-icons" className="user-contact-icons" />
          <a title={`Write mail to ${fallbackEmail}`} className="contact-user-info url" href={"mailto:" + fallbackEmail}>{fallbackEmail}</a>
        </li>
      }
      <li>
        <img src={LinkIcon} alt="user-contact-icons" className="user-contact-icons" />
        <a title={`Visit ${userBlogUrl}`} href={userBlogUrl} className="contact-user-info url">{userBlogUrl}</a>
      </li>
      {userLinkedIn ?
        <li>
          <img src={LinkedInIcon} alt="user-contact-icons" className="user-contact-icons" />
          <span className="contact-user-info">{userLinkedIn}</span>
        </li> :
        <li>
          <img src={LinkedInIcon} alt="user-contact-icons" className="user-contact-icons" />
          <span className="contact-user-info url" title="Non functional">in/shreeramkushwaha</span>
        </li>
      }
      <li>
        <img src={XIcon} alt="user-contact-icons" className="user-contact-icons" />
        <span className="contact-user-info url" title="Non functional">{userTwitterUsername}</span>
      </li>
    </ul>
  )
}

export default ContactUser;