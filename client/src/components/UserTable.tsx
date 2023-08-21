import React, { useState, useEffect } from 'react';
import '../App.scss';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  created_at: Date;
}

const UsersTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    fetch('/users')
      .then(res => {
        console.log('Response status:', res.status); // Log response status
        return res.json();
      })
      .then(data => {
        console.log('Fetched data:', data); // Log the fetched data
        setUsers(data);
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []);
  

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{new Date(user.created_at).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
