import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";

export default function useGithubUser(username) {
  /* const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null); */

  let fetcher = (url) => fetch(url).then((r) => r.json());
  let { data, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  function fetchGithubUser() {
    mutate();
  }

  /*  async function fetchGithubUser() {
    let url = `https://api.github.com/users/${username}`;

    try {
      let response = await fetch(url);
      let json = await response.json();
      setUserData(json);
    } catch (error) {
      setError(error);
      setUserData(null);
    }
  } */

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
    userData: data,
    error: error,
    onFetch: fetchGithubUser,
  };
}
