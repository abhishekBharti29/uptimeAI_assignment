const RepoCard = ({ repoName, repoVisibility, repoDescription, primaryCodingLanguageOfRepo, repoLink }) => {
  return (
    <div className="repo-card">
      <div className="repo-card-heading">
        <a href={repoLink} className="repo-name" title={repoName}><strong>{repoName}</strong></a>
        <span className="repo-visibility-pill">{repoVisibility}</span>
      </div>
      <p className="repo-description">{repoDescription}</p>
      <span className="repo-primary-coding-lang">{primaryCodingLanguageOfRepo}</span>
    </div>
  )
}

export default RepoCard;