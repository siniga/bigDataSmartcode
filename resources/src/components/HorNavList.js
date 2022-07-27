import {useEffect, useState} from 'react';
import '../css/components/HorNavList.css'

function HorNavList({navList}) {
    const [active, setActive] = useState({});

    useEffect(()=>{
        if(navList.length != 0)
        setActive({name:navList[0].name,status:true})
    },[navList])

    const toggleActiveLink = (name) =>{
        setActive({name: name, status:true})
        // navigate(name);
    }

    return (
      <div className='horizontal-list'>
        <ul>
            {navList.map((value, key)=>{
               return(
                  <li key={key} className={active.name == value.name ? "row active" : "row"}   onClick={()=>toggleActiveLink(value.name)}>{value.name}</li>
                // <li className={active.name == 'operations' ? "row active" : "row"}   onClick={()=>toggleActiveLink('operations')}>Operations</li>
                // <li className={active.name == 'finance' ? "row active" : "row"}   onClick={()=>toggleActiveLink('finance')}>Finance</li>
               )
            })}
        </ul>
      </div>
    );
}

export default HorNavList;
