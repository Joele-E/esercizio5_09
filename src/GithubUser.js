import useGithubUser from "./useGithubUser";

export default function GithubUser({ username }) {
  let { userData, error } = useGithubUser(username);

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
