import {useState} from 'react'
export function UserList({user}){
  const {name,email,address,phone,website} = user
  return (
    <div className='user-card'>
<h1>Name:{name}</h1>
<p>Email At:{email}</p>
<p>Live In:{address.street} {address.city}</p>
<p>Contact No {phone}</p>
<p>Find My Work on {website}</p>

    </div>
    )
}
