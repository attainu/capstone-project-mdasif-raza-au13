import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Show from '../contents/Show';

const Navbar = () => {

    const [search, setsearch] = useState('');
    const enterName = (e) => {
        setsearch(e.target.value)
    }

    return (
        <>
            <div className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#CED3DC" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">ShowTime</Link>
                    <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" onChange={enterName}/>
                </div>
            </div>
            <Show name={search} />
        </>
    )
}

export default Navbar;