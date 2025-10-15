// import Card from "./Card"

import '../CSS/Home.css';

import a from "../Image/10.png";
import b from "../Image/9.png";
import c from "../Image/12.png";
import d from "../Image/14.png";
import e from "../Image/11.png";
import { NavLink } from 'react-router-dom';
export default function Home(){



    return(
        <div className='allH'>
           <div className="imgan">
              <img style={{
                 width:"1440px",
                height:'690px',
                marginTop:"10px",
             
              }} src={a} alt="..."/>

            
           </div>
           <div>
          <div className="header">
            <div className="link">
                  <span>Home</span>
                  <span>About Us</span>
                  <span>Our Services</span>
                  <span>Our Projects</span>
                  <span>Our Clients</span>
                  <span>Contact Us</span>
            </div>
            <div className="buttom">
            <NavLink to="/login"> <span>Sign In</span></NavLink>
                  <NavLink to="/register"><span>Register</span></NavLink>
                   
            </div>

          </div>
          <div className="containr">
            <div className="imgH">

            </div>

            <div className="textH">
              <p className="t1">PROFESSIONALS</p>
              <p className="t2">in the security idustry</p>
              <span className="t3">A company approved by Security Industry Regulatory Agency
                in the Government of Dubai Security Professionals Association (SPA)
              </span>
            </div>
            <div className="photo"> 
              <div> <img className="four" src={e} alt="..."/></div>
              <div> <img className="three" src={d} alt="..."/></div> 
              <div><img className="two" src={c} alt="..."/></div> 
              <div>  <img className="one" src={b} alt="..."/></div> 
         
                
  
             </div>
           </div>
          </div>
      
        </div>
    )
}