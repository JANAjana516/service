import { NavLink } from "react-router-dom";
import "../../CSS/Dash.css";
import {faCartShopping, faPlus, faTruckFast, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Menu } from "../Context/MenuContext";
import { Size } from "../Context/WindowContext";
export default function Side (){
   const menu=useContext(Menu);
   const Windowsize =useContext( Size);
   const size=Windowsize.win;
  console.log(Windowsize);
   const iOpen=menu.isOpen;
 return(

    <div className="side-dash"
     style={{
     left: size < '768' ? (iOpen ? 0 : '-100%') : 0,

      width: iOpen ? "220px" :"60px",

     }}
    >

         <NavLink className="nav" to={"user"}>
            <FontAwesomeIcon className="icon" icon={faUsers} />
            
            <p style={{
                margin:"0",
                paddingLeft:"15px",
                display: iOpen ? 'block' :'none',

            }}>User</p>
         </NavLink>

         <NavLink className="nav" to={"adduser"}>
            <FontAwesomeIcon className="icon" icon={ faPlus} />
            
            <p style={{
                margin:"0",
                paddingLeft:"15px",
                display: iOpen ? 'block' :'none',

            }}>AddUser</p>
         </NavLink>

         <NavLink className="nav" to={"category"}>
            <FontAwesomeIcon className="icon" icon={ faCartShopping} />
            
            <p style={{
                margin:"0",
                paddingLeft:"15px",
                display: iOpen ? 'block' :'none',

            }}>Categories</p>
         </NavLink>

         <NavLink className="nav" to={"addcategory"}>
            <FontAwesomeIcon className="icon" icon={ faPlus} />
            
            <p style={{
                margin:"0",
                paddingLeft:"15px",
                display: iOpen ? 'block' :'none',

            }}>Add Category</p>
         </NavLink>


         <NavLink className="nav" to={"products"}>
            <FontAwesomeIcon className="icon" icon={ faTruckFast} />
            
            <p style={{
                margin:"0",
                paddingLeft:"15px",
                display: iOpen ? 'block' :'none',

            }}>Products</p>
         </NavLink>


         <NavLink className="nav" to={"addproduct"}>
            <FontAwesomeIcon className="icon" icon={ faPlus} />
            
            <p style={{
                margin:"0",
                paddingLeft:"15px",
                display: iOpen ? 'block' :'none',

            }}>Add Products</p>
         </NavLink>

        </div>


 )
}