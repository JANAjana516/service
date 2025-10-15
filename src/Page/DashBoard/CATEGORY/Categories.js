import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../../../CSS/User.css';
export default function Categories(){
 
    return(
        <div className="user-dash">
        <div  style={{
            color:"#bf0000",
            alignItems:"center",
            justifyItems:"center",

         }}>
         <h1>
            Categories
         </h1>
         </div>
    <table>
        <tr>

          <th>id</th>
          <th>title</th>
          <th>image</th>
          <th>Action</th>
        </tr>
        <tr>
         <td>1</td>
         <td>Admin</td>
         <td>Admin@gmail.com</td>
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