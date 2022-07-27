import React from 'react';
import '../css/components/HorListCard.css'

function HorListCard({listItems}) {
    return (
        <div className='horizontal-list-card'>
            <div className='main-headers'>
                <span>Top Products</span>
            </div>
            <ul>
                {listItems.map((val, key)=>{
                   return(
                        <li key={key}>
                        <span>
                            <img src={val.img} />
                        </span>
                           <span>
                              {val.name}
                           </span>
                           <span>
                               {val.itemSold}
                           </span>
                        </li>
                    )
                } )}
            </ul>
        </div>
    );
}

export default HorListCard;
