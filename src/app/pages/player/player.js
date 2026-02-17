"use client"
import { useNavigate } from "react-router-dom"
import "./player.css"

const Player=()=>{

    const navigate=useNavigate();

    const handleback=()=>{
        navigate("/landing")
    }

    return(
       <div className='player'>
      <img src="/assets/back_arrow_icon.png" alt="" onClick={handleback} />
      <iframe width="85%" height="85%" src="https://www.youtube.com/embed/X4NVqz1DxfA?si=ULKaJPI1exbFr6EJ"
       title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
    <div className="player-info">
        <p>12:08:2025</p>
        <p>Avatar</p>
        <p>Mp4</p>
    </div>
    </div>
    )
}
export default Player