import { useState } from "react";
import axios from "axios";
import '../../CSS/component.css';
import Loading from "./Loading";
import { baseURL, LOGIN } from "../API/api";
import Cookie from "cookie-universal";
export default function Login(){

  const [form , setForm]=useState
  ({

    email:'',
    password:'',
  });

  const cookie = Cookie();

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${baseURL}/${LOGIN}`, form);
      setLoading(false);
      const token = res.data.token;
      const role = res.data.user.role;
      const go = role === "1995" ? "user" : "test";
      cookie.set("e-commerce", token);
      window.location.pathname = `/dashboard/${go}`;
    } 
    catch (err) {
      console.log(err);
      setLoading(false);
      if (err.response.status === 401) {
        setErr("Wrong Email Or Password");
      } else {
        setErr("Internal Server ERR");
      }
    }
  }


  function handle (e){
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
    

    return(
        <>
       {loading && <Loading />}
           <div className="container">
           <div className='row'>
            <form className="form" onSubmit={handleSubmit}>

            <div className="form-contro">
   
            

         
          <label htmlFor="password" >Password :</label>
                <input value={form.password}
                      required
                       name="password"
                        id="password"
                        type="password" 
                        placeholder="Enter Password "
                        onChange={handle}
                        minLength={8}
                ></input>
          

           
          <label htmlFor="email" >Email :</label>
                <input value={form.email} 
                       name="email"
                       id="password"
                       type="email" 
                      placeholder="Enter Email "
                      onChange={handle}
                      required
                ></input>
            
       
            <button className='btn'  >Log In</button>

            </div>
            {err !== "" && <span className="error">{err}</span>}
            </form>
            </div>
            


         </div>
         
        </>
    )
}