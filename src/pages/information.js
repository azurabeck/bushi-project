import React, { PureComponent } from 'react';
import Carrossel from '../comp_ui/global/carrosselImg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfinity , faSearch , faSort , faCaretRight} from '@fortawesome/free-solid-svg-icons'

class information extends PureComponent {
    render() {
        return (
            <div className='content information'>
                <div className='container'>
                    <Carrossel />

                    <div className='table'>

                        <div className='table-header'>
                            <div className='title'> <FontAwesomeIcon icon={faInfinity} color='#FE9800'/> Veja Animes </div>
                            <div className='filters'>
                                <div className='search'> <input placeholder='animes'/> <FontAwesomeIcon icon={faSearch}/> </div>
                                <div className='sort'> <FontAwesomeIcon icon={faSort} color='#FE9800'/> </div>
                            </div>
                        </div>

                        <div className='table-row'>
                            <div className='img-area'><img src='https://sm.ign.com/t/ign_br/screenshot/default/narutinho_rq9u.h720.jpg' alt=''/></div>
                            <div className='title'>Nome: A.I.C.O Incarnation</div>
                            <div className='desc'>
                                <div className='desc-group'>
                                        <div className='desc'>Episódios: 12 </div>
                                        <div className='desc'>Estrelas: ** </div>
                                </div>
                                <div className='btn'>favoritar</div>
                                <FontAwesomeIcon icon={faCaretRight} color='#000'/>
                            </div>
                        </div>
                        <div className='table-row'>
                            <div className='img-area'><img src='https://sm.ign.com/t/ign_br/screenshot/default/narutinho_rq9u.h720.jpg' alt=''/></div>
                            <div className='title'>Nome: A.I.C.O Incarnation</div>
                            <div className='desc'>
                                <div className='desc-group'>
                                        <div className='desc'>Episódios: 12 </div>
                                        <div className='desc'>Estrelas: ** </div>
                                </div>
                                <div className='btn'>favoritar</div>
                                <FontAwesomeIcon icon={faCaretRight} color='#000'/>
                            </div>
                        </div>
                        <div className='table-row'>
                            <div className='img-area'><img src='https://sm.ign.com/t/ign_br/screenshot/default/narutinho_rq9u.h720.jpg' alt=''/></div>
                            <div className='title'>Nome: A.I.C.O Incarnation</div>
                            <div className='desc'>
                                <div className='desc-group'>
                                        <div className='desc'>Episódios: 12 </div>
                                        <div className='desc'>Estrelas: ** </div>
                                </div>
                                <div className='btn'>favoritar</div>
                                <FontAwesomeIcon icon={faCaretRight} color='#000'/>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        );
    }
}

export default information