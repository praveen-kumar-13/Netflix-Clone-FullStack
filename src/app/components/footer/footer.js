"use client"
import "./footer.css"

const Footer=()=>{
    return(
        <div className='footer'>
      <div className="footer-icon">
        <img src="/assets/youtube_icon.png" alt="" />
        <img src="/assets/facebook_icon.png" alt="" />
        <img src="/assets/instagram_icon.png" alt="" />
        <img src="/assets/twitter_icon.png" alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copy-right'>@ 1997-2025 Netflix, Inc.</p>
    </div>
    )
}
export default Footer