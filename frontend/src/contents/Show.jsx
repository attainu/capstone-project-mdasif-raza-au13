import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HomeMovie from './HomeMovie'

const Show = (props) => {
    const [poster, setposter] = useState([])
    const apiKey = '?api_key=ff1117747ce10416e420d5b478bc6c84'
    const baseUrl = 'https://api.themoviedb.org/3/search/movie'
    const searchUrl = baseUrl + apiKey + `&query=${props.name}`
    console.log(props.name)


    useEffect(() => {
        const getData = async () => {
            let info = await axios.get(searchUrl)
            console.log("info search", info)
            console.log("info.data search", info.data.results)
            setposter(info.data.results)
        }
        getData()
    },[props.name])

    return (
        <>
        {props.name ? <div className="d-flex justify-content-around align-items-center flex-row flex-wrap">
                {poster.map((element,i) => (
                    <div className="card my-5 shadow-lg mb-5 bg-body rounded" key={i} style={{ width: "18rem" }}>
                        <img src={'https://image.tmdb.org/t/p/w300' + element.poster_path} className="card-img-top" alt="poster" />
                        <div className="card-body">
                            <p className="card-text">{element.overview}</p>
                        </div>
                    </div>
                ))}
            </div>: <HomeMovie /> }
            
        </>
    )
}

export default Show