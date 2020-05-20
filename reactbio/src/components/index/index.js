import React from 'react';
import {Link} from 'react-router-dom';

const IndexPage=()=>{
return <div class="bgcolor"> 
    <div class="name"> 
    <h1>Oscar Nuñez</h1>

    <div class="me">About Me</div>
    <p></p>
    
    </div>

<div class="list">
    <nav>
        <ul>
            <li><Link to="/index">About</Link></li>
            <li><Link to="/portfolio">portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
</div>
</div>
}

export default IndexPage;