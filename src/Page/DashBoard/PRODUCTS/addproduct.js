import axios from "axios";
import { useEffect ,useState } from "react";

import { baseURL, CAT, } from "../../API/api";
import Loading from "../../CMPONENT/Loading";


export default function AddProduct() {
  const [form, setForm] = useState({
    category: "Select Category",
    title: "",
    description: "",
    price: "",
    discount: "",
    About: "",
  });

  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    axios.get(`${baseURL}/${CAT}`)
      .then((data) => setCategories(data.data))
      .catch((err) => console.log(err));
  }, []);



  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
 
  // const cookie = Cookie();
  // const token = cookie.get("e-commerce");

  async function HandleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    try {
      const data=new FormData();
      data.append("category",form.category);
      data.append("About",form.About);
      data.append("description",form.description);
      data.append("price",form.price);
      data.append("title",form.title);
      for(let i=0;i<images.length;i++)
      {
        data.append("images[]",images[i]);
      }
      const res = await axios.post(`${baseURL}/${CAT}/add`, data
      );
      console.log(res);
     window.location.pathname = "/dashboard/products";
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }


  
  // Mapping
  const categoriesShow = categories.map((item, key) => (
    <option key={key} value={item.id}>
      {item.title}
    </option>
  ));

  const imagesShow = images.map((img, key) => (
    
      <div >
        <img src={URL.createObjectURL(img)} width="80px" />
        <div>
          <p className="mb-1">{img.name}</p> 
        </div>
      </div>
  ));

  return (
    <>

      {loading && <Loading />}
      <form className="formT"
       onSubmit={HandleSubmit} >
      
          <label style={{
            padding:"10px"
          }}>Category</label>
          <input
           
            value={form.category}
            required
            onChange={handleChange}
            type="text"
            placeholder="Category..."
          />
        
 
          <label
          style={{
            padding:"10px"
          }}>Title</label>
          <input
            value={form.title}
            required
            onChange={handleChange}
            name="title"
            placeholder="title..."
          />
        

          <label
          style={{
            padding:"10px"
          }}>Description</label>
          <input
            value={form.description}
            required
            onChange={handleChange}
            type="text"
            placeholder="Description..."
          />

          <label
          style={{
            padding:"10px"
          }}>About</label>
          <input
            value={form.About}
            required
            onChange={handleChange}
            
            placeholder="About..."
          />
                   <label
          style={{
            padding:"10px"
          }}>Images</label>
          <input
            value={images}
            type="file"
            multiple
            onChange={(e)=>setImages([...e.target.files])}
            
          />

    


        <button style={{
          padding:"10px",
          margin:"10px",
          width:"100px"
        }}
         className='btn' 
          disabled={
            form.category.length > 1 &&
            form.title.length > 1 &&
            form.print.length !==""  
            
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
