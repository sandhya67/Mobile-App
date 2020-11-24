import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom' 

export default function Home() {
    return (
        <div>
             <nav class="navbar navbar-light bg-secondary">
                <span class="navbar-brand mb-0 h1">Mobile's World</span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="login">Login<span class="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </nav>
            <h1 id="home">Welcome to Mobile Store</h1>
            <p id="hpara">Mobile has become a very basic need for people all over the world. Everyone uses a smartphone, even small kids are obsessed with it.
                 Mobile has become an entertainment medium more than its basic use which is to connect with others. Interest in mobile phones and the number of mobile phone brands entering the Indian market has steadily risen over the last decade. 
                 With new players like JIO entering the market and releasing cheap data plans.</p>
           <div className="card" style={{width: "23rem"}}>
                <img src="\images\iphone1.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"fuchsia"}} class="card-text"><b>Apple</b><br/>website: WWW.oneplus.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\samsung.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"blue"}} class="card-text"><b>Samsung</b><br/>website: WWW.oneplus.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\nokia1.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"crimson"}} class="card-text"><b>Nokia</b><br/>website: WWW.nokia.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\oneplus.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"darkblue"}} class="card-text"><b>One+</b><br/>website: WWW.oneplus.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\vivo.jpg" class="card-img-top" alt="..."/>
                <div class="card-body" >
                <p style={{color:"grey"}} class="card-text"><b>Vivo</b><br/>website: WWW.vivo.com </p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\oppo.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"red"}} class="card-text"><b>Oppo</b> <br/> website: WWW.oppo.com</p>
            </div>
            </div>
        </div>
    )
}
