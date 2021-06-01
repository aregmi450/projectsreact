import React from 'react'
function NavBar(){

    return <div style={{backgroundColor: 'brown'}}>
        <h1 style={{color: 'white'}}>React Meals</h1>
        <a style={{margin: '10px', color: 'white'}}>Home</a>
        <a style={{ margin: '10px', color: 'white' }}>Orders</a>
        <a style={{ margin: '10px', color: 'white' }}>Contact Us</a>

    </div>
}

export default NavBar;