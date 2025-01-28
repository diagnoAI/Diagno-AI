import axios from 'axios'
import { useState } from 'react'

function About() {
  const [advise, setAdvise] = useState("")
  async function getdata(){
    const res = await fetch("http://127.0.0.1:5000/api/data")
    const data = await res.json()
    setAdvise(data.id)
  }
  return(
    <>
    <form method = "POST" action = "http://127.0.0.1:5000/api/data">
      <input type = "text" name = "name"/>
      <input type = "password" name = "pass"/>
      <input type = "submit"/>
    </form>
    </>
  )
}

export default About