import Side from "./Side";
import Top from "./Top";
import "../../CSS/Dash.css";
import {Outlet} from "react-router-dom";
export default function Dashboard (){
 
    return(<>
    <div className=" dash ">
             <Top />
            <Side />
            <div style={{
                width:"100%",
                marginTop:"30px",
                marginLeft:"190px",
            }}>
           <Outlet />
           </div>
  
         
    </div>
    </>)
}