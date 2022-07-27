import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import '../../css/components/Table.css'

function ProductTable({header, tbWidth, items}) {

  return (
    <div className='table-wrapper' style={{width:tbWidth}}>
        <div className='main-headers'>
            <span>{header}</span>
        </div>
        <br/>
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Cost</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th style={{width:170}}>Category</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {items.map((value,key)=>{
                    return (
                        <tr key={key}>
                            <td>
                                <span className='img-wrapper' style={{backgroundColor:'rgb(197 247 183)',justifyContent:'center'}}>
                                    <img src={value.img} />
                                </span>
                            </td>
                            <td>{value.name}</td>
                            <td>{value.cost}</td>
                            <td>{value.price}</td>
                            <td>{value.stock}</td>
                            <td>{value.category}</td>
                            <td>
                            <BsThreeDotsVertical />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
    </table>
    </div>
  );
}

export default ProductTable;
