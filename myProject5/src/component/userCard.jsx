import {useState} from 'react'
import {UserList} from './userlist.jsx'
export function FetchData(){
  const [users,setUsers] =useState([])
  async function fetchInfo(){
    try{
      const response =await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers(data)
    } catch(err){
      console.log(err)
    }
  }
  return(
    <div>
      <button onClick={fetchInfo}>data</button>
      <div className="user-card-container">
      {
        users.map((user)=>(
        <UserList key ={user.id }user={user} />
        ))
      }
      </div>
    </div>
    )
}