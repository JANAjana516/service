import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../../../CSS/User.css';
export default function Products(){
 
    return(
        <div className="user-dash">
        <div  style={{
            color:"#bf0000",
            alignItems:"center",
            justifyItems:"center",

         }}>
         <h1>
            Products
         </h1>
         </div>
    <table>
        <tr>

          <th>id</th>
          <th>title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Action</th>
        </tr>
        <tr>
         <td>1</td>
         <td>p1</td>
         <td>pppppppp</td>
         <td>152</td>
         <td>3</td>
         <td>
             <FontAwesomeIcon  style={{
                paddingRight:"20px",
                color:"#214869",
                
             }}
             icon={faPenToSquare} />

             <FontAwesomeIcon 
             style={{
             color:"red"
             }}
             icon={faTrash} />
         </td>
       </tr>
   </table>



        </div>
    )
}