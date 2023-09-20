import { useEffect, useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUserList() {
  const [username, setUsername] = useState("");

  const [users, setUsers] = useState([]);

  function handleInput(event) {
    setUsername(event.target.value);
  }

  function handleUserAdd() {
    let myUsers = users;

    myUsers.push(username);
    setUsers(myUsers);
    console.log(users);
    setUsername("");
  }

  let items = useEffect(() => {}, [users]);
  return (
    <div>
      <input type="text" value={username} onChange={handleInput} />
      <button onClick={handleUserAdd}>AGGIUNGI</button>
      {users.map((user, index) => {
        return (
          <div>
            <GithubUser username={user} key={index} />
          </div>
        );
      })}
    </div>
  );
}
