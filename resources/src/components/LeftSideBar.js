import {useState, useContext} from 'react';
import {  BsBoxArrowInLeft, BsFillBasketFill, BsFillBarChartLineFill, BsFillFolderFill, BsFillPeopleFill, BsGearFill, BsCartCheckFill } from "react-icons/bs";
import { useNavigate} from 'react-router-dom'
import { LoginContext } from '../context/LoginContext';
import MainLogo from '../img/icons/logo.jpeg';

import '../css/components/LeftSideBar.css'

function LeftSideBar() {    
    const [active, setActive] = useState({name:'dashboard',status:true});
    const navigate = useNavigate();
    const {setIsAuthenticated} = useContext(LoginContext);

    const toggleActiveLink = (name) =>{
        setActive({name: name, status:true})
        navigate(name);
      
    }

    const logout = () =>{
       localStorage.clear();
       setIsAuthenticated(false);
       navigate('/');
    }
    return (
        <div className='sidebar-container left-sidebar'>
            {/* <img src={MainLogo} style={{width:100, marginTop:10}} /> */}
            
            <div className="list-container">
               
            </div>
        </div>
    )
}

export default LeftSideBar;
