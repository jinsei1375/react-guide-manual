import { useEffect, useState } from "react";
import axios from "axios";

const Example = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get('http://localhost:3003/user');
      setUsers(res.data);
    }
    getUser();
  }, [])

  const OtherComponent = () => {
    if (users.length > 0) {
      return (
        <div>
          <h3>{users[0].username}</h3>
          <p>age: {users[0].age}</p>
          <p>hobby: {users[0].hobbies.join(',')}</p>
        </div>
      )
    }
  }

  return (
    <>
      {users.map(user => {

        return (
          <div key={user.id}>
            <h3>{user.username}</h3>
            <p>age: {user.age}</p>
            <p>hobby: {user.hobbies.join(',')}</p>
          </div>
        )
      })}
      <OtherComponent />
    </>
  )
};

export default Example;
