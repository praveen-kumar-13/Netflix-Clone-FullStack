"use client"
import { useNavigate } from "react-router-dom"
import "./navbar.css"
const Navbar=()=>{

  const navigate=useNavigate();

  const SignOut=()=>{
    navigate("/");
  }

return(
  <div className='navbar' >
      <div className="navbar-left">
        <img src="/assets/logo.png" alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News & Populars</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div  className="navbar-right">
        <img src="/assets/search_icon.svg" className='icon' alt="" />
        <p>children</p>
        <img src="/assets/bell_icon.svg" alt="" className='icon' />
        <div className="navbar-profile">
          <img src="/assets/profile_img.png" alt=""  className='profile'/>
          <img src="/assets/caret_icon.svg" alt="" />
          <div className="drop-down">
            <p onClick={()=>{SignOut()}}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>

    </div>
);
}
export default Navbar