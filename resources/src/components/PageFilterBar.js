import React, {useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import '../css/components/PageFilterBar.css'
import HorNavList from './HorNavList';

function PageFilterBar() {
    const [navList, setNavList] =useState([]);

    useEffect(()=>{
         setNavList([{name:"Products"}, {name:"Categories"}]);
    },[])
  return (
        <div>
            <HorNavList navList={navList} />
            <div className='page-filter-bar'>
                <div className='search-bx-wrapper'>
                    <BsSearch/> 
                    <input type="text" placeholder='Search for product name, category...'/>
                </div>
                <div className='btns-wrapper'>
                <button className='app-btn btn-white'>Import</button>
                <button className='app-btn btn-white'>Export</button>
                </div>
            </div>
        </div>
    
  );
}

export default PageFilterBar;
