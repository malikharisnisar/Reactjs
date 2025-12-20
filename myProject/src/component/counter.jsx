import  {useState} from "react"
 export function CounterButtons (){
  let [count,setCount] = useState(0)
  let [message,setMessage] = useState("")
   function increase(){
  setCount(count + 1)
  setMessage("")
   }
   function decrease(){
     if(count>0){
       setCount(count -1)
     } else {
       setMessage(message="Can't Process.The Counter Is Already 0")
     }
   }
   function reset(){
     if(count>0){
       setCount(0)
     } else {
       setMessage("")
     }
   }
   function increase5(){
     setCount(count + 5)
     setMessage("")
   }
   function decrease5(){
     if(count>=5){
        setCount(count - 5)
     } else {
       setMessage(message="The Counter Is Less Than 5")
     }
   }
  
  return (
    <div id="container">
      <h1>The Current Counter is<span> {count}</span></h1>
      <div id="btnContainer">
      <button id="incButton" onClick={increase}>+1</button>
      <button id="dcrButton" onClick={decrease}>-1</button>
      <button id="reset" onClick={reset}>Reset</button>
      <button id="incBtnx5" onClick={increase5}>+5</button>
      <button id="dcrBtnx5" onClick={decrease5}>-5</button>
      </div>
      <p>{message}</p>
    </div>
    );
};
