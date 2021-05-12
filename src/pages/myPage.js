import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDragon } from '@fortawesome/free-solid-svg-icons'

class myPage extends PureComponent {
    render() {
        return (
            <div className='content my-page'>
                <FontAwesomeIcon icon={faDragon}/>
                <div className='page-title'>Minha Lista</div>                
            </div>
        );
    }
}

export default myPage;