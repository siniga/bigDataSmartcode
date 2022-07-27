import React from 'react'

function Loader({loadMsg, icon}) {
    return (
        <div style={{width:'100%',height:'100vh', display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src={icon} styles={{width:20,height:20}}/>
            {loadMsg}
        </div>
    )
}

export default Loader
