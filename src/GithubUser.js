import { useEffect, useState } from "react";

export default function GithubUser({ username }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    let url = `https://api.github.com/users/${username}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setUserData(json);
      })
      .catch((err) => console.error(err));
  }, [username]);

  return (
    <div>
      <div
        style={{
          backgroundColor: "green",
          display: "flex",
          justifyContent: "space-between",
          padding: "16px",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <h1>{userData.login}</h1>
        <img src={userData.avatar_url} alt="" style={{ width: "50px" }} />
      </div>
      <p>Profilo creato: {userData.created_at}</p>
    </div>
  );
}
