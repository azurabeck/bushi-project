import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'

class top10 extends PureComponent {
    render() {
        return (
            <div className='content top-10'>
                <FontAwesomeIcon icon={faFire}/>
                <div className='page-title'>Top 10</div>                
            </div>
        );
    }
}

export default top10;