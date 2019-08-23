import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className='header'>
            <div  className='header-layout content-container '>
                <Link className='header-link' to='/'>LC Brokers</Link>
                
                <Link className='header-link' to='/add-options'>Добави опции</Link>
                
                <Link className='header-link' to='/offers'>Оферти</Link>

                <Link className='header-link' to='/add-offer'>Добави Оферта</Link>   
            </div>
        </div>
    )
}

export default Header;