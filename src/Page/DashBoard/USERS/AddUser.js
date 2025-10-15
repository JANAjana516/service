import axios from "axios";
import {  useState } from "react";

import { baseURL, USER } from "../../API/api";
import Loading from "../../CMPONENT/Loading";


export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
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
       {name: name,
        email: email,
        password: password,
        role: role,
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
          }}>User Name</label>
          <input
           
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="name..."
          />
        
 
          <label
          style={{
            padding:"10px"
          }}>Email</label>
          <input
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="name@example.com"
          />
        

          <label
          style={{
            padding:"10px"
          }}>Password</label>
          <input
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password..."
          />

          <label
          style={{
            padding:"10px"
          }}>Role</label>
          <input
            value={role}
            required
            onChange={(e) => setRole(e.target.value)}
            
            placeholder="Role..."
          />

          {/* 
          <input value={role} onChange={(e) => setRole(e.target.value)}>
            <option disabled value="">
              Select Role
            </option>
            <option value="1995">Admin</option>
            <option value="2001">User</option>
            <option value="1996">Writer</option>
            <option value="1999">Product Manger</option>
          </input> */}
    


        <button style={{
          padding:"10px",
          margin:"10px",
          width:"100px"
        }}
         className='btn' 
          disabled={
            name.length > 1 &&
            email.length > 1 &&
            password.length > 6 &&
            role !== ""
              ? false
              : true
          }
        
        >
          Save
        </button>
       
      </form>
    </>
  );
}
