import React from "react";
import useSWR from "swr";

const GithubUser = ({ user }) => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    `https://api.github.com/users/${user}`,
    fetcher
  );
  console.log(data);

  return (
    <div>
      <h1>Login: {data.login}</h1>
      <h3>Creato: {data.created_at}</h3>
    </div>
  );
};

export default GithubUser;
