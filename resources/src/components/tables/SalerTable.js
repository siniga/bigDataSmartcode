import React from 'react';
import '../../css/components/Table.css'
import mg1 from '../../img/managers/mg1.png'
import mg2 from '../../img/managers/mg2.png'
import mg3 from '../../img/managers/mg3.png'
import NumberFormat from 'react-number-format';

function SalerTable({header, tbWidth, data, getRandomColor}) {
    
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
                    <th>Fullname</th>
                    <th>Position</th>
                    <th>Item Sold</th>
                    <th>Revenue</th>
                    <th>Commission</th>
                    {/* <th>Target</th> */}
                </tr>
            </thead>
            <tbody>
                {data.map((val)=>{
                    return (
                        <tr>
                            <td>
                            <span className='img-wrapper'  style={{background: getRandomColor(), color:'black'}}>
                                {val.name.substr(0, 1)}
                            </span>
                            </td>
                            <td>{val.name}</td>
                            <td> 
                                <span>{val.role == 1 && 'Super admin'}</span>
                                <span>{val.role == 2 && 'Admin'}</span>
                                <span>{val.role == 3 && 'Cashier'}</span>
                                <span>{val.role == 4 && 'Brand ambassador'}</span>
                                <span>{val.role == 5 && 'Salesman'}</span>
                            </td>
                            <td>{val.quantity} </td>
                            <td>
                                <NumberFormat
                                    thousandsGroupStyle="thousand"
                                    value={val.revenue}
                                    prefix=""
                                    decimalSeparator="."
                                    displayType="text"
                                    thousandSeparator={true}
                                    allowNegative={true} />
                            </td>
                            <td>
                                <NumberFormat
                                    thousandsGroupStyle="thousand"
                                    value={(val.revenue * 20) / 100}
                                    prefix=""
                                    decimalSeparator="."
                                    displayType="text"
                                    thousandSeparator={true}
                                    allowNegative={true} />
                                
                            </td>
                            {/* <td>100,000</td> */}
                        </tr>
                    )
                })}
              
               
                
            </tbody>
    </table>
    </div>
  );
}

export default SalerTable;
