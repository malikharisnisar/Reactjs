import { useState } from 'react'
import {Profile} from './profiles.jsx'
export function UserList(){
  const userInfo = [{
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
  isAdmin: true,
  destination: "New York",
  phone: "+1234567890",
  address: "123 Main St, Anytown, USA",
  city: "Anytown",
  state: "CA",
  zip: "12345",
  country: "USA",
}];
  return (
    <div className="user-list">
      {
        userInfo.map((users,index)=>(
      <Profile  key={users.id} user={users} />
        ))
      }
    </div>
    )
}