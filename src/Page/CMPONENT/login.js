import { useState } from "react";

import '../../CSS/component.css';

export default function Login(){

  const [form , setForm]=useState
  ({

    email:'',
    password:'',
  });


  const [err, setErr] = useState("");

  function handle (e){
    setForm({ ...form, [e.target.name]: e.target.value });
  };

   return(
        <>
       
           <div className="container">
           <div className='row'>
            <form className="form" >

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