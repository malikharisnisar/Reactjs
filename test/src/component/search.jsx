import {useState} from 'react'
import useDebounce from './debounce.jsx'
function SearchFilter(){
  const [text,setText] =useState('')
  const debounceText= useDebounce(text,500)
  return(
    <>
      <input value={text} onChange={(e)=>setText(e.target.value)} />
      <p>e3bounce:{debounceText}</p>
    </>
    )
}
export default SearchFilter