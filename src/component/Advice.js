import React from "react";
import './Advice.css';
import { Link } from "react-router-dom";
const advice=()=>{
    return(
        <>
        <body class="container">
        <div class="text-typing">
        <p id="i1">Hey, Are you getting Bored i have soluton for you. Try Our Quotes Generator that will make you laugh</p>
        </div>
        <div class="text-typing-mob">
        <p id="i1">Hey,getting Bored? Check this out</p>
        </div>
        <center><Link  to="sub"><button type="button" className="bn">Start</button></Link></center>
        <div class="text-typing2">
        <p>Created by Rajeev Ranjan. </p>
        </div>
        </body>
        </>
    )
}

export default advice;
