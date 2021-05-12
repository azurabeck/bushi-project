import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfinity } from '@fortawesome/free-solid-svg-icons'

class information extends PureComponent {
    render() {
        return (
            <div className='content information'>
                <FontAwesomeIcon icon={faInfinity}/>
                <div className='page-title'>Informações</div>                
            </div>
        );
    }
}

export default information