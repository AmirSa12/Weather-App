import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {FiSun, FiWind} from 'react-icons/fi'
import {FaRegSnowflake} from 'react-icons/fa'
import {BsCloudHaze, BsFillCircleFill, BsCloudDrizzle, BsCloudLightningRain, BsCloudy, BsCloudFog, BsChatTextFill} from 'react-icons/bs'
import {IoIosWater} from 'react-icons/io'
import {RiMistLine} from 'react-icons/ri'
import {WiSmoke} from 'react-icons/wi'
// import WeatherUI from './WeatherUI'

function HomePage() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [searched, setSearched] = useState(false)

  const searchLocation = (event) =>{
    // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c6e096b31bd5198b24fbc915308b63f6`)
    // setData(response.data)
    // console.log(response.data)
    // console.log(location)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=c6e096b31bd5198b24fbc915308b63f6`).then((response)=>{
      setData(response.data)
      // console.log(response.data)
    })
    .catch((error)=>{
      if (error.response){
        alert('wrong city name')
      } else {
        console.log('Error', error.message)
      }
    })
  }

  const handleChange = (e) => setLocation(e.target.value)

  const handleSubmit = (e) =>{
    e.preventDefault()
    searchLocation(location)
    setLocation('')
    setSearched(true)
  } 
  
  const weatherConditions = {
    'Haze': <BsCloudHaze className='mt-10 h-20 w-20'/>,
    'Clouds': <BsCloudy className='mt-10 h-20 w-20'/>,
    'Snow': <FaRegSnowflake className='mt-10 h-20 w-20'/>,
    'Clear': <BsFillCircleFill className='mt-10 h-20 w-20'/>,
    'Drizzle': <BsCloudDrizzle className='mt-10 h-20 w-20'/>,
    'Rain': <BsCloudLightningRain className='mt-10 h-20 w-20'/>,
    'Mist': <RiMistLine className='mt-10 h-20 w-20'/>,
    'Dust': <RiMistLine className='mt-10 h-20 w-20'/>,
    'Fog': <BsCloudFog className='mt-10 h-20 w-20'/>,
    'Smoke': <WiSmoke className='mt-10 h-20 w-20'/>
  }

  // function getIcon(x) {
  //   return weatherConditions[x]
  // }

  return (
    <div className='home-sec'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter City" className="input input-bordered w-150 max-w-xs ml-3" value={location} onChange={handleChange} />
        </form>
        {searched ? 
        <div className='flex flex-col items-center'>
          {data.weather ? weatherConditions[data.weather[0].main] : null}
          <h1 className='mt-5 text-2xl'>{data.name}</h1>
          {data.weather ? <h3>{data.weather[0].main}</h3> : null }
          <div className='bbr'>
            <div className="conditions">
              <div className='items'><FiWind className='w-6 h-6'/><p className='ml-3 text-lg'>{data.wind ? data.wind.speed.toFixed() : null} km/h</p></div>
              <div className='items'><IoIosWater className='w-6 h-6'/><p className='ml-3 text-lg'>{data.main ? data.main.humidity : null}%</p></div>
              <div className='items'><BsChatTextFill className='w-6 h-6'/><p className='ml-3 text-lg'>{data.weather ? data.weather[0].description : null }</p></div>
            </div>
            <div className="temp">
              <h2 className='text-6xl'>{data.main ? data.main.temp.toFixed() : null}°</h2>
            </div>
          </div>
        </div>
        : null}
    </div>
  )
}

export default HomePage