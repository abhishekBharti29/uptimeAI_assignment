import { useEffect, useState } from "react";
import RepoCard from "./RepoCard";

const UserRepos = ({ reposUrl }) => {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchUserRepos();
  }, [reposUrl]);

  async function fetchUserRepos() {
    try {
      const rawUserReposData = await fetch(reposUrl);
      const userReposData = await rawUserReposData.json();
      setRepos(userReposData);
      console.log(userReposData.length)
    } catch (err) {
      console.log("Given error occured during fetching user repos data => ", err)
    }
  }

  return (
    <div>
      <div className="user-repos-heading">
        <span>Popular repositories</span>
        <span className="customize-pins-link">Customize your pin</span>
      </div>
      <div className="repos-container">
        {
          repos.slice(0, 6).map((repo) => {
            return (
              <RepoCard
                key={repo.id}
                repoName={repo.name}
                repoVisibility={repo.visibility}
                repoDescription={repo.description}
                primaryCodingLanguageOfRepo={repo.language}
                repoLink={repo?.html_url}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default UserRepos;