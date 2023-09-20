import { useEffect, useState } from "react";

export default function useGithubUser(username) {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchGithubUser() {
    let url = `https://api.github.com/users/${username}`;

    try {
      let response = await fetch(url);
      let json = await response.json();
      setUserData(json);
    } catch (error) {
      setError(error);
      setUserData(null);
    }
  }

  /*   useEffect(() => {
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
 */
  return {
    userData: userData,
    error: error,
    onFetch: fetchGithubUser,
  };
}
