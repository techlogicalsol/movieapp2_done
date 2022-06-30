import React, { useEffect, useState } from 'react'

const img_API = "https://image.tmdb.org/t/p/w1280/"
const trending_API = `https://api.themoviedb.org/3/trending/tv/day?api_key=c4028c9a78ac705657966a3ce761f76c`

function Trending(){

    const [trend, setTrend] = useState([])

    const getTrend = (API_Trend)=>{
        fetch(API_Trend)
        .then(res => res.json())
        .then(data =>{
            console.log("Trend API", data)
            setTrend(data.results)
        })
    }

    useEffect(()=>{
        getTrend(trending_API)
    },[])



    return(
        <>
            {/* <div className="container mt-5">
                <h1><strong>Trending</strong></h1>

               <div className="scroll">
               {trend.length > 0 && trend.map((item)=>( 
               <div className="scrollCard p-3">
                           
                    <div className="card">
                        <img src={img_API + item.poster_path} className="poster"/>
                    </div>
                    
                <div className='card-body'>
                <h6>
                   <strong> {item.name} </strong> 
                </h6>
                </div>  

                </div>
                  ))} 
               </div>               
            </div> */}

<div class="container mt-5">
    <h1> <strong>Trending</strong> </h1>
    <div class="row flex-row flex-nowrap overflow-auto">
        {trend.length > 0 && trend.map((item)=>(
        <div class="col-4 col-sm-6 col-md-4 col-lg-3 mb-4 mt-4" key={item.id} {...item}>
            <div class="card card-block">
            <img src={img_API + item.poster_path} className="poster"/>
                
            </div>
           <span className="circle_trend">{item.vote_average * 10}%</span>
            <h6 className="mt-3" style={{fontWeight: "800", fontSize: "12px" }}>{item.name}</h6>
            <p className="text-muted" style={{fontSize: "12px"}}>{item.first_air_date}</p>
       
        </div>
        ))}
        </div>
        </div>
         
           
        </>
    )
}

export default Trending


        

