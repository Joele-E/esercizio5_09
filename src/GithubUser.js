import { useEffect, useState } from "react";

export default function GithubUser({ username }) {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let url = `https://api.github.com/users/${username}`;
    fetch(url)
      .then((res) => {
        if (res.status !== 200) {
          setError(new Error("NON TROVATO"));
        } else {
          return res.json();
        }
      })
      .then((json) => {
        setUserData(json);
      })
      .catch((err) => setError(err));
  }, [username]);

  return (
    !error && (
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
          <h1>{userData && userData.login}</h1>
          <img
            src={userData && userData.avatar_url}
            alt=""
            style={{ width: "50px" }}
          />
        </div>
        <p>Profilo creato: {userData && userData.created_at}</p>
      </div>
    )
  );
}
