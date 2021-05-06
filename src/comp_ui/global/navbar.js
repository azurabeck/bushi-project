import React, { PureComponent } from 'react';
import Logo from '../images/logo_black.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faBell, faFire, faSearch } from '@fortawesome/free-solid-svg-icons'

class navbar extends PureComponent {
    render() {
        return (
            <div className='navbar'>
                <FontAwesomeIcon icon={faBars} />
                <img src={Logo} alt='' className='logo'/>

                
                <div className='nav-group'>
                    <FontAwesomeIcon icon={faBell} />
                    <FontAwesomeIcon icon={faFire} />
                    <FontAwesomeIcon icon={faSearch} />
                </div>                        
            </div>
        );
    }
}

export default navbar;