import React, {useState, useEffect} from 'react'


const Bordered = ({ children }) => {
    
    return (
        <span className="main-border"> {children} </span>
    )
}

export default Bordered;