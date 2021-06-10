import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HomeMovie = () => {
    const apiKey = '?api_key=ff1117747ce10416e420d5b478bc6c84'
    const baseUrl = 'https://api.themoviedb.org/3/discover/movie'
    const searchUrl = baseUrl + apiKey + '&sort_by=popularity.desc'
    const [poster, setposter] = useState([])

    useEffect(() => {
        const getData = async () => {
            let info = await axios.get(searchUrl)
            console.log("info", info)
            console.log("info.data", info.data.results)
            setposter(info.data.results)
            console.log("poster", poster)
        }
        getData()
    }, [])


    return (
        <>
            <div className="d-flex justify-content-around align-items-center flex-row flex-wrap">
                {poster.map((element,i) => (
                    <div className="card my-5 shadow-lg mb-5 bg-body rounded" key={i} style={{ width: "18rem" }}>
                        <img src={'https://image.tmdb.org/t/p/w300' + element.poster_path} className="card-img-top" alt="poster" />
                        {/* {console.log(element.overview)} */}
                        <div className="card-body">
                            <p className="card-text">{element.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default HomeMovie