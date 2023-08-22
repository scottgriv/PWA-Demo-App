import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import '../App.scss';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  created_at: Date | string; // Modified to accept Date or string
}

const UsersTable: React.FC<{ useCsv: boolean }> = ({ useCsv }) => {
  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    if (useCsv) {
      // Load and parse CSV data
      Papa.parse('/data/database.csv', {
        download: true,
        header: true,
        dynamicTyping: true, // Automatically converts suitable strings to numbers or dates
        complete: (result) => {
          if (result.data && Array.isArray(result.data)) {
            // Convert the parsed data to the correct format
            const parsedUsers: User[] = result.data.map((item: any) => ({
              id: item.ID,
              first_name: item["First Name"],
              last_name: item["Last Name"],
              email: item.Email,
              created_at: new Date(item["Created At"])
            }));
            setUsers(parsedUsers);
          }
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
        }
      });
      
    } else {
      // Load users from the server
      fetch('/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, [useCsv]);
  
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
            <td>{user.created_at instanceof Date ? new Date(user.created_at).toLocaleString() : user.created_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
