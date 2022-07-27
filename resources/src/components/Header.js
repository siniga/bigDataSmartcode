import '../css/components/Header.css';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom'
import axios from "axios";
import loadImg from "../img/icons/Loader.gif"

function Header({setUploadIsSuccess, setIsFileUploading}) {
  const [active, setActive] = useState({link:"/", name:"Data"});
  const [file, setFile] = useState();
  const [isLoading, setIsloading] = useState(false);

  const navigate = useNavigate();
  const nav = [{link:"/", name:"Data"}, {link:"chart", name:"Chart"}];

  const onChange = (e) =>{
      setFile(e.target.files[0]);
  }

  const onUploadSubmit = (e) =>{
    e.preventDefault();

    setIsFileUploading(true);

    let formData = new FormData();
    formData.append("file", file);

    let url = "http://localhost/projects/smartcode/api/public/index.php/api/upload-file";
    
    axios(
      {
          url: url,
          method: 'post',
          data:formData,
          headers: {
              "Content-Type": "application/json", 
          }        
      }
    ).then(response => {
      setUploadIsSuccess(true);
          console.log(response)
         setIsFileUploading(false)
      })
  }

  const toggleActiveLink = (item) =>{
    setActive({name:item.name, link:item.link})
    navigate(item.link);
  }

  return (
    <div className="header-container" style={{display:"flex",justifyContent:"space-between"}}>
        <ul className="nav-list">
          {nav.map((val, key)=>{
            return (<li key={key} className={active.name == val.name ? "nav-list-item active": "nav-list-item inactive"} onClick={()=>toggleActiveLink(val)}>{val.name}</li>);
          })}
        </ul>

        <div>
            <form encType="multipart/form-data" onSubmit={onUploadSubmit} style={{color:"black"}} className="upload-form">
                {/* <label class="input-file">
                    Choose File<input type="file" name="file" onChange={(e)=>onChange(e)}/>
                </label> */}
               <label className="input-file">
                  <span>{file ? file.name :   <span>Choose file to upload</span>}</span>
                  <input type="file" name="file"  onChange={(e)=>onChange(e)}/>
               </label> 
               {file && <button>Click to upload</button> }
            </form>
        
           
        </div>
    </div>
  );
}

export default Header;
