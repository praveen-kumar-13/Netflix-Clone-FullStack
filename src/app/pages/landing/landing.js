"use client"
import "./landing.css"

import Footer from "@/app/components/footer/footer";
import Moviecards from "@/app/components/moviecards/moviecards";
import Navbar from "@/app/components/navbar/navbar";


const Landing=()=>{

 
return(
<div className='home'>
          <Navbar></Navbar>
      <div className="hero">
        <img src="/assets/hero_banner.jpg" alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src="/assets/hero_title.png" alt="" className='caption-img'/>
          <p>
            Discovering his ties to secreat ancient order, a young man living in mordern Istanbul embarks
            on a quest to save the city from an imortal enemy.
          </p>
          <div className="hero-btns">
            <button className='btn'><img src="/assets/play_icon.png"  alt="" />Play</button>
            <button className='btn dark-btn'><img src="assets/info_icon.png"  alt="" />More Info</button>
          </div>
        </div> 
      </div>
     <Moviecards></Moviecards>
     <Moviecards title={{name:"Trending Movies"}}></Moviecards>
     <Moviecards title={{name:"Upcomming Movies"}}></Moviecards> 
     <Moviecards title={{name:"Alpha Movies"}}></Moviecards>
      <div>
         <Footer></Footer>
      </div>

  </div>
    );
}
export default Landing