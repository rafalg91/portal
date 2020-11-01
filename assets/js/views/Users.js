import React, { useEffect, useState } from "react"

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => setUsers(json))
  }, [])

  return (
    <>
      <h2 className="title">Users</h2>
      <ul>
        {users.map((user) => (
          <li>
            {user.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Users
