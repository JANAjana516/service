import "../../CSS/Dash.css";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Menu } from "../Context/MenuContext";
export default function Top (){
  const menu= useContext(Menu);
  const set=menu.setIsOpen;
  return(
    <div className="top-dash cen">
      <div style={{
        display:"flex",
        alignItems:"center",
        
      }}>
        <h3 style={{
          marginLeft:"20px",
           color: "#bf0000",
        }}>E-COMMERCE</h3>
        <FontAwesomeIcon  className="icon" cursor={'pointer'}

         onClick={() => set(prev => !prev)}
         style={{
          paddingLeft:"25px",
        }} icon={faBars}></FontAwesomeIcon>
      </div>
        
    </div>
  )
}