import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

class settings extends PureComponent {
    render() {
        return (
            <div className='content settings'>
                <FontAwesomeIcon icon={faCog}/>
                <div className='page-title'>Configurações</div>                
            </div>
        );
    }
}

export default settings;