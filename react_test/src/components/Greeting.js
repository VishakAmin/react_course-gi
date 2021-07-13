import React,{useState} from 'react'
import Output from './Output'


const Greeting = () => {
  const [changedText, setChangedText] = useState(false)

  const changeTextHandler = () => {
    setChangedText(true)
  }
  
  return (
    <div>
      <h2>Hello World</h2>
  { !changedText && <Output>Good to see</Output>}
      {!changedText && <Output>Its not changed</Output>}
      {changedText && <Output>Its changed</Output>}
      <button onClick={changeTextHandler}>Click</button>
    </div>
  )
}

export default Greeting;
