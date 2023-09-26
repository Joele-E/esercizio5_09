import React from "react";
import useSWR from "swr";

const GithubUser = ({ user }) => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    `https://api.github.com/users/${user}`,
    fetcher
  );
  data ? console.log(data) : console.log("loading...");

  return (
    <div>
      <h1>Login: {data ? data.login : "LOADING..."}</h1>
      <h3>Creato: {data ? data.created_at : "LOADING..."}</h3>
    </div>
  );
};

export default GithubUser;
