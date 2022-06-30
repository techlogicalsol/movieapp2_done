import React, { useEffect, useState } from "react";

const img_API = "https://image.tmdb.org/t/p/w1280/"

const feature_API = `https://api.themoviedb.org/3/
discover/movie?sort_by=popularity.desc&
api_key=c4028c9a78ac705657966a3ce761f76c`



function Movies(){

    const [movies, setMovies] = useState([])

    const getMovies = (API_Movies) =>{
        fetch(API_Movies)
        .then(res => res.json())
        .then(data =>{
            // console.log(data)
            setMovies(data.results)
        })
    }

    useEffect(()=>{
        getMovies(feature_API)
    })

    
const VoteClass = (vote) =>{
    if(vote >= 8){
        return 'green'
    } else if(vote >= 6){
        return 'orange'
    } else{
        return 'red'
    }
}

    return(
        <>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='mb-5'>Movies</h1>

                        <div className="row">
                            {movies.length > 0 && movies.map((item)=>(
                                <div className="col-md-3 mb-3 movie">
                                    <div className="card">
                                    <img src={img_API + item.poster_path}  className="moviePoster"/>

                                    <div className="card-body movie-info">
                                        <h6>{item.title}</h6>
                                        <span className={`tag ${VoteClass(item.vote_average)}`}>
                                            Rating: {item.vote_average}
                                        </span>
                                        <p id="pbottom">Release Date: {item.release_date}</p>
                                     

                                        <div className="movie-over">
                                            <h2>Overview:</h2>
                                            <p>{item.overview}</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Movies