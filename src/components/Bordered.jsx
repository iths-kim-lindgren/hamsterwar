import React, {useState, useEffect} from 'react'


const Bordered = ({ children }) => {
    
    return (
        <div className="main-border"> {children} </div>
    )
}

export default Bordered;