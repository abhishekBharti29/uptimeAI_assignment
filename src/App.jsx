import { useState, useEffect } from "react";
import "./scss/styles.scss"
import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Repositories from "./Pages/Repositories";
import Projects from "./Pages/Projects";
import Packages from "./Pages/Packages";
import Stars from "./Pages/Stars";

function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUserData();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <div className="github-user-page">
          <Header profilePicUrl={user?.avatar_url} />
          <Content
            profilePicUrl={user?.avatar_url}
            name={user?.name}
            username={user?.login}
            bio={user?.bio}
            followerCount={user?.followers}
            followingCount={user?.following}
            userOrg={user?.company}
            userLocation={user?.location}
            userEmail={user?.email}
            userLinkedIn={user?.linkedin}
            userBlogUrl={user?.blog}
            userTwitterUsername={user?.twitter_username}
            reposUrl={user.repos_url}
          />
          <Footer />
        </div>
      </>
    },
    {
      path: "/repositories",
      element: <>
        <div className="github-user-page">
          <Header profilePicUrl={user?.avatar_url} />
          <Repositories />
          <Footer />
        </div>
      </>
    },
    {
      path: "/projects",
      element: <>
        <div className="github-user-page">
          <Header profilePicUrl={user?.avatar_url} />
          <Projects />
          <Footer />
        </div>
      </>
    },
    {
      path: "/packages",
      element: <>
        <div className="github-user-page">
          <Header profilePicUrl={user?.avatar_url} />
          <Packages />
          <Footer />
        </div>
      </>
    },
    {
      path: "/stars",
      element: <>
        <div className="github-user-page">
          <Header profilePicUrl={user?.avatar_url} />
          <Stars />
          <Footer />
        </div>
      </>
    }
  ])


  async function fetchUserData() {
    try {
      const serializedUserData = await fetch("https://api.github.com/users/shreeramk");
      const userData = await serializedUserData.json();
      setUser(userData);
    } catch (err) {
      console.log("Given error occured during fetching user data => ", err);
    }
  }

  return (
    <RouterProvider router={router} />
  )
}

export default App
