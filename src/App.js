import { Route, Routes } from "react-router-dom";
import "./App.css";
import Services from "./Page/Services";
import Home from "./Page/Home";
import Register from "./Page/CMPONENT/register";
import Login from "./Page/CMPONENT/login";
// import Dashboard from "./Page/DashBoard/dashboard";
import All from "./Page/All";
// import User from "./Page/DashBoard/USERS/User";
import Err403 from "./Page/ERROR/Err403";
import Err404 from "./Page/ERROR/Err404";
// import AddUser from "./Page/DashBoard/USERS/AddUser";
import Test from "./Page/Test";
// import Categories from "./Page/DashBoard/CATEGORY/Categories";
// import AddCategory from "./Page/DashBoard/CATEGORY/AddCategory";
// import Products from "./Page/DashBoard/PRODUCTS/products";
// import AddProduct from "./Page/DashBoard/PRODUCTS/addproduct";

function App() {
  
  return (
    <Routes> 
     <Route path='/' element={<All/>}></Route>
     <Route path='/services' element={<Services/>}></Route> 
     <Route path='/home' element={<Home/>}></Route> 
     <Route path='/register' element={<Register/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
    
     <Route path='/err403' element={<Err403/>}></Route>
     <Route path='/err404' element={<Err404/>}></Route>
     {/* <Route path='/dashboard' element={<Dashboard/>}>
        <Route path='user' element={<User/>}/>
        <Route path="adduser" element={<AddUser/>}></Route>

        <Route path="category" element={<Categories/>}></Route>
        <Route path="addcategory" element={<AddCategory/>}></Route>
        <Route path="products" element={<Products/>}></Route>
        <Route path="addproduct" element={<AddProduct/>}></Route>

     </Route> */}
     
     <Route path="test" element={<Test/>}></Route>
   </Routes> 

  );
}
export default App;
