import React from "react";

function Banner(){
    return(
        <>
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="myHero">
                    <h1>Welcome.</h1>
                    <p>
                        Millions of movies, TV shows and people to discover. 
                        Explore now.
                    </p>

                    <form className="myform">
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="search for a movies and tv shows...."
                                className="form-control"
                                />  
                        </div>
                        <button type="submit" className="myBtn btn">Search</button>
                        
                    </form>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Banner