import React, {useState, useEffect} from 'react'


const img_API = "https://image.tmdb.org/t/p/w1280/"
const API_Key = "c4028c9a78ac705657966a3ce761f76c" 
const baseURL_TV = "https://api.themoviedb.org/3/"


const feature_TV = `${baseURL_TV}
discover/tv?sort_by=popularity.desc&api_key=${API_Key}`

function TVShow(){

    const [tvShow, setTVShow] = useState([]);

    const getTVShow = (API_TV) =>{
      fetch(API_TV)
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        setTVShow(data.results)
      })
    }
  
    useEffect(()=>{
      getTVShow(feature_TV)
    },[])
  
         

    return(
        <>
       

    <div class="container mt-5">
    <h1> <strong>What's Popular</strong> </h1>
    <div class="scrolling-wrapper row flex-row flex-nowrap pt-4">
			{tvShow.length > 0 && tvShow.map((show)=>(
			<div class="col-3" key={show.id} {...show}>
				
                <img src={img_API + show.poster_path} 
                className="poster"/>
                <span className="circle">{show.vote_average * 10}%</span>
                <h6 className="mt-4 ml-2">
                   <strong> {show.name} </strong> </h6>
                <p className="text-muted ml-2" style={{fontSize: '13px'}}>{show.first_air_date}</p>
                
			</div>
			
			))}
						
    </div>
</div>


{/* 
<div className="scrolling-wrapper">
  <div className="card"><h2>Card</h2></div>
  <div className="card"><h2>Card</h2></div>
  <div className="card"><h2>Card</h2></div>
  <div className="card"><h2>Card</h2></div>
  <div className="card"><h2>Card</h2></div>
  <div className="card"><h2>Card</h2></div>
  <div className="card"><h2>Card</h2></div>
  <div className="card"><h2>Card</h2></div>
  <div className="card"><h2>Card</h2></div>
</div> */}
          
        </>
    )
}

export default TVShow