import {useState} from 'react'
export function Profile({user}){
const {name,age,email,phone,address}= user
  return (
  <div className="card">
      <div className="card-header">
        <div className="avatar">{name.charAt(0)}</div>
        <h1>{name}</h1>
      </div>

      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
    )
}