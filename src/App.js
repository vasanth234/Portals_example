
import {useState} from 'react'
import './App.css'
import ReactDOM from 'react-dom'
function Box(props){
  return (
    ReactDOM.createPortal(
    <>
    <div className='model-overlay'>
      <div className='content'>
        <h2>This is introduction .Please be listen carefulluy</h2>
        <p>The time u get as the best prove to the world extra so that everyone can get to know</p>
        <button onClick={props.close}>Close</button>

      </div>
    </div>

  </>,document.body
    )
  )
}







function App(){
  const [data,setData]=useState(false)

 function togglefunction(){
  setData(!data);
 }
return (
  <div className='app'>
    <button onClick={togglefunction}>Open Comment</button>
    {data && <Box close={togglefunction}></Box>}
  </div>
 

)
}

export default App