import React from 'react';
import '../css/components/ListCard.css'

function VertListCard({listItems, header, txtFont,display, txtAlign, storageUrl, currency}) {
    return (
        <div className='horizontal-list-card'>
            <div className='main-headers'>
                <span>{header}</span>
            </div>
            <ul>
                {listItems && listItems.map((val, key)=>{
                   return(
                        <li key={key}  style={{display:display}}>
                           {val.img &&
                                <span>
                                   <img src={storageUrl+val.img} />
                                 </span>
                           }
                           <span  style={{fontSize:txtFont, textAlign:txtAlign, display:display}} className='item-name-wrapper' >
                                <span><b>{val.name}</b></span>
                                <span>{currency}{val.revenue}</span>
                           </span>
                           <span style={{fontSize:txtFont, textAlign:"unset", widh:"auto"}}>
                                {val.quantity} 
                           </span>
                        </li>
                    )
                } )}
            </ul>
        </div>
    );
}

export default VertListCard;
