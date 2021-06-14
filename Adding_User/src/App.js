import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

function App() {

  const [userList, setUserList] = useState([])

  const handleUserList = (username, age) => {
    setUserList(prev => {
      return [...prev, { name: username, age: age, id: Math.random().toString() }]
    })
  }

  console.log(userList);
  return (
    <div>
      <AddUsers onAddUser={handleUserList} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
