import { useState } from "react";
import Cookie from "cookie-universal";

import axios from "axios";

import '../../CSS/component.css';
import Loading from "./Loading";
import { baseURL, REGISTER } from "../API/api";

import { useNavigate } from "react-router-dom";


export default function Register(){

  const navigate = useNavigate();

  const [form , setForm]=useState
  ({
    name:'',
    email:'',
    password:'',
  });

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const cookie = Cookie();

  function handle (e){
    setForm({...form , [e.target.name]:e.target.value})
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${baseURL}/${REGISTER}`, form);
      const token = res.data.token;
      setLoading(false);
      cookie.set("e-commerce", token);
      navigate("/dashboard/user", { replace: true });
    } catch (err) {
      console.log(err);
      setLoading(false);
      if (err.response.status === 422) {
        setErr("Email is already been taken");
      } else {
        setErr("Internal Server ERR");
      }
    }
  }
    

    return(
        <>
          {loading && <Loading />}
       
           <div className="container">
           <div className='row'>
            <form className="form" onSubmit={handleSubmit}>

            <div className="form-contro">
            
            <label htmlFor="name" >Name :</label>
                <input  value={form.name} 
                        name="name" 
                        id="name" 
                        type="text"
                        required 
                        placeholder="Enter Username ..."
                        onChange={handle}
                    ></input>
            
            

         
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
            
       
            <button className='btn'  >REGISTER</button>

            </div>
            {err !== "" && <span className="error">{err}</span>}
            </form>
            </div>
            


         </div>
         
        </>
    )
}