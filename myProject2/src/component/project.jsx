import {useState} from 'react'
import offBulb from '../assets/bulboff.gif'
import onBulb from '../assets/bulbon.gif'
import '../style/style.css'
export function BulbOnOff(){
  const [bulbOff,setBulbOff] = useState(true)
  const [btnText,setBtnText] =useState('Turn On')
  function handler(){
    setBulbOff(!bulbOff)
    setBtnText(!bulbOff ? 'Turn On' : 'Turn Off')
  }
  return (
    <div>
      {bulbOff ? 
        <img src={offBulb} id="bulboff"/> :
        <img src={onBulb} id="bulbon"/> 
      }
      <button onClick={handler}>{btnText}</button>
    </div>
    )
}