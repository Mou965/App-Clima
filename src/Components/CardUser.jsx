import React from 'react'
import { useState } from 'react'


export const CardUser = ({obj,data}) => {
       const [temp, setTemp] = useState(true)
       const change = () => setTemp(!temp)
       console.log(data)



 return (

<div className="container">

    <article className="card" > 

     <div className="tittle">
          <div>
                 <h1>
                     Wheater App
                </h1> 
          </div>

          <div>
               <h2>{data?.name} </h2>
               <h2>{data?.sys.country}</h2>
               <img src={data && `http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`} alt="" />
               <h3>{data?.weather[0].description}</h3>
          </div> 

          <div>
           <h2>
              Humidity {data?.main.humidity}
           </h2>           
           </div> 

           <div>
             <h2>
               {data?.weather.description} 
              </h2>
           </div>

          <div>
           <h2>
              { temp ? (data?.main.temp - 273.15).toFixed(1) : data?.main.temp }{ temp ? 'ºC' : 'ºF'}
            </h2>
          </div>
         <div>
                <button className="temp" onClick={change}> Degress ºF/ºC 
                  </button> 
         </div>     
       </div>   


     </article>

</div>
  )
}
