import GitHubLogo from "../assets/github-mark.svg"

const Footer = () => {
  return (
    <div className="footer">
      <img src={GitHubLogo} alt="github logo in footer" className="github-logo-footer" />
      <span>© 2026 GitHub, Inc.</span>
      <a className="footer-link" href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service">Terms</a>
      <a className="footer-link" href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">Privacy</a>
      <a className="footer-link" href="https://github.com/security">Security</a>
      <a className="footer-link" href="https://www.githubstatus.com/">Status</a>
      <a className="footer-link" href="https://github.com/orgs/community/discussions/">Community</a>
      <a className="footer-link" href="https://docs.github.com/en">Docs</a>
      <a className="footer-link" title="Non Functional">Contact</a>
      <a className="footer-link" title="Non Functional">Manage cookies</a>
      <a className="footer-link" title="Non Functional">Do not share my personal information</a>
    </div>
  )
}

export default Footer;