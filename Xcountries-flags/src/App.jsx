import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])

useEffect(()=>{
countries()
},[])


async function countries() {
  try {
    let response = await fetch("https://xcountries-backend.labs.crio.do/all")
    let api_data = await response.json()
    setData(api_data)
    console.log(api_data[0].name)
  } catch (error) {
       console.error("Error fetching data:", error)
   
  }
  
}
const countryStyle = {
  display:"flex",
  flexWrap:"wrap",
  justifyContent:"center",
  gap:"10px",
  padding:"20px",
  
}
  return (
    <>
   <div style={countryStyle}>
    {data.map((country)=>(
      <div key={country.name}>
      <img src={country.flag} alt={country.name} />
      <h3>{country.name}</h3>
</div>
    ))}
   </div>
    </>
  )
}

export default App
