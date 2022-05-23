import { useEffect, useState } from "react";
const GitHubUsers = () => {
  const url = "https://api.github.com/users";

  const [users, setUsers] = useState([]);
  //   const [newUsers, setNewUsers] = useState([]);
  const featchUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
    // await getUserName();
  };
  //   const getUserName = async () => {
  //     users.forEach(async (user) => {
  //       const response = await fetch(user.url);
  //       const { name } = await response.json();
  //       console.log(name);
  //       const userDetails = { ...user, name };
  //       setNewUsers((oldUsers) => [...oldUsers, userDetails]);
  //     });
  //   };
  useEffect(() => {
    featchUsers();
  }, [users]);
  if (users.length == 0) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }
  return (
    <>
      <div className="card-container">
        {users.map((user) => {
          return (
            <div className="card" key={user.id}>
              <div className="avatar">
                <img
                  src={user.avatar_url}
                  alt={user.img}
                  height="80px"
                  width="80px"
                />
              </div>
              <div className="card-desc">
                <span className="name">{user.name}</span>
                <span>
                  <a href={user.html_url} target="_blank" rel="noreferrer">
                    @{user?.login}
                  </a>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default GitHubUsers;
