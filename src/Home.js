import React, { useState } from 'react'
import home from "./home.css"
import { Link } from 'react-router-dom'
const Home = () => {
    return (
    <div className='container'>
        <div className='home_photo'>
            <img src={require("./images/WhatsApp Image 2025-03-06 at 01.24.10_373928b9.jpg")} alt=''/>
        </div>
        <div className='home_name'>
            <h1>Codify Academy</h1>
        </div>
        <div className='home_paragraph'>
            Codify Academy is an Egyptian Programming Training Center. 
        </div>
        <div className='courses_container'>

        <div className="card" style={{width: '18rem'}}>
    <img src={require("./images/4884785.jpg")} className="card-img-top" alt="..." />
    <div className="card-body">
    <h5 className="card-title">Front-End Diploma</h5>
    <p className="card-text"></p>
    <Link to="https://docs.google.com/forms/d/1ppp2DkDA6wcH_CCQEAoHsJGKmr5JUUC5AYycbN7QWhM/viewform" className="btn btn-primary">سجل الأن</Link>
    </div>
</div>



<div className="card" style={{width: '18rem'}}>
    <img src={require("./images/backend-4496461_1280.png")} className="card-img-top" alt="..." />
    <div className="card-body">
    <h5 className="card-title">Back-End Diploma</h5>
    <p className="card-text"></p>
    <Link to="https://docs.google.com/forms/d/1zDkQ4ACl6d7_bPZFYjUJLOkEpu-u1MtAFq2G9momtcU/viewform" className="btn btn-primary">سجل الأن</Link>
    </div>
</div>





<div className="card" style={{width: '18rem'}}>
    <img src={require("./images/fullstack.png")} className="card-img-top" alt="..." />
    <div className="card-body">
    <h5 className="card-title">FullStack Diploma</h5>
    <p className="card-text"></p>
    <Link to="https://docs.google.com/forms/d/1Vj6aeIjNFF1DRz19hQWl6zTMTY5_z3OxCOVsq7IG0Yk/viewform" className="btn btn-primary">سجل الأن</Link>
    </div>
</div>




<div className="card" style={{width: '18rem'}}>
    <img src={require("./images/uiux.jpg")} className="card-img-top" alt="..." />
    <div className="card-body">
    <h5 className="card-title">UI/UX Diploma</h5>
    <p className="card-text"></p>
    <Link to="https://docs.google.com/forms/d/1mbpH4LyqCnpde85TtlXqdwNmeEZFsLEb-FjlpopA5C8/viewform" className="btn btn-primary">سجل الأن</Link>
    </div>
</div>




<div className="card" style={{width: '18rem'}}>
    <img src={require("./images/flutter.jpg")} className="card-img-top" alt="..." />
    <div className="card-body">
    <h5 className="card-title">Flutter Diploma</h5>
    <p className="card-text"></p>
    <Link to="https://docs.google.com/forms/d/1uR1o_fYHAAjJIrgEUW8Dwx8TTmI_tx5tmZKPaDR8F5c/viewform" className="btn btn-primary">سجل الأن</Link>
    </div>
</div>




        </div>
    </div>
    )
}

export default Home