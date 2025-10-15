import { createContext, useEffect, useState } from "react";

  export const Size =createContext(null);
   

export default function WindowContext({children}){

    const [win,setWin]=useState(window.innerWidth);
    useEffect(() =>{
        function setWindow(){
            setWin(window.innerWidth);

        }
        window.addEventListener("resize" ,setWindow);

        return()=>{
            window.removeEventListener("resize" , setWindow);
        };
    },[]);
    return(
        <Size.Provider value={{win}}>{children}</Size.Provider>
    );
}