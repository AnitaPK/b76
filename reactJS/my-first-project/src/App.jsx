import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import helloIMG from './assets/hello.jpg'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className='text-primary text-center'> Hello world</h1>
       <p className='customParagraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, quia ipsa. Non molestiae molestias dolorum facere nam quae ipsa. Adipisci?</p>
      <img src={helloIMG} alt="" />
      <button>Click ME</button>
      <Button data="Register"></Button>
      <Button data="Login"></Button>
      <Button data="Submit"></Button>
      <Button data="Download"></Button>
      <Button data="Update"></Button>

    </>
  )
}

export default App
