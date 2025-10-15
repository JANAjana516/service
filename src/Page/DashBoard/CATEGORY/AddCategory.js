import axios from "axios";
import {  useState } from "react";

import { baseURL, USER } from "../../API/api";
import Loading from "../../CMPONENT/Loading";


export default function AddCategory() {
  const [titel, setTitel] = useState("");
  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);


 
  // const cookie = Cookie();
  // const token = cookie.get("e-commerce");

  async function HandleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    try {

      const res = await axios.post(`${baseURL}/${USER}/add`, null,
       { headers : {
        Authorization: "Bearer "+ res.data.data.token,}
      }, 
       {titel:titel,
        image:image,
      }
      );
      console.log(res);
     window.location.pathname = "/dashboard/user";
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  return (
    <>

      {loading && <Loading />}
      <form className="formT"
       onSubmit={HandleSubmit} >
      
          <label style={{
            padding:"10px"
          }}>Title</label>
          <input
           
            value={titel}
            required
            onChange={(e) => setTitel(e.target.value)}
            type="text"
            placeholder="title..."
          />
        
 
          <label
          style={{
            padding:"10px"
          }}>Image</label>
          <input
            value={image}
            required
            onChange={(e) => setImage(e.target.value)}
          />
        

         


        <button style={{
          padding:"10px",
          margin:"10px",
          width:"100px"
        }}
         className='btn' 
          disabled={
            titel.length > 1
            
 
          }
        
        >
          Save
        </button>
       
      </form>
    </>
  );
}
