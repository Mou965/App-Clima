import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { CardUser } from './Components/CardUser'
import Loader  from './Components/./Loader'


function App() {
  const [obj, setObj] = useState()
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    
    const success = position => {
    const long = position.coords.longitude
    const lat = position.coords.latitude
          setObj({lat,long})
        }
      
        navigator.geolocation.getCurrentPosition(success)   
  },[])
    
  useEffect(() => {
    if (obj !== undefined) {
    const myApi_Key = "76faa2ecf0a4a0068dde1d33c61665ea"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${obj?.lat}&lon=${obj?.long}&appid=${myApi_Key}`
    
    axios.get(url)
          .then(res =>{ 
            setData(res.data)
            setIsLoading(false)
        }) 
          .catch(err => console.error(err))
    }
      },[obj])



  return (
    <div className="App">      
     { isLoading ?
       <Loader />       
       :
       < CardUser  data = {data} obj = {obj} /> 
            }
      </div>
  )
}
export default App
